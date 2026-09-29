import { useState, useEffect } from 'react';
import { useAuth } from '../components/useAuth';
import { supabase } from '../SupabaseClient';
import Header from '../components/Header';
import { isNudgeDue } from './dashboardUtils';
import './Dashboard.css';

const STAGES = [
  { key: 'not_contacted', label: '01 NOT CONTACTED', desc: 'Unengaged prospects ready for first touch.' },
  { key: 'reached_out', label: '02 REACHED OUT', desc: 'First note sent. Awaiting feedback.' },
  { key: 'responded', label: '03 RESPONDED', desc: 'Dialogue open. Discovery stage in play.' },
  { key: 'negotiating', label: '04 NEGOTIATING', desc: 'Scope deck review and deposit discussion.' },
  { key: 'won', label: '05 WON', desc: 'Deposit landed. Contract signed and active.' },
];

function Dashboard() {
  const { user, profile, loading: authLoading } = useAuth();
  const userId = user?.id;
  const [prospects, setProspects] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showLost, setShowLost] = useState(false);
  const [noteDrafts, setNoteDrafts] = useState({});
  const [notesByProspect, setNotesByProspect] = useState({});
  const [noteFeedback, setNoteFeedback] = useState({});
  const [savingNotes, setSavingNotes] = useState({});
  const [addProspectError, setAddProspectError] = useState('');
  const [isAddingProspect, setIsAddingProspect] = useState(false);
  const [clockNow, setClockNow] = useState(Date.now());

  async function getProspects(userId) {
    return supabase
      .from('prospects')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
  }

  async function loadNotes(prospectIds) {
    if (prospectIds.length === 0) {
      setNotesByProspect({});
      return;
    }

    const { data, error } = await supabase
      .from('follow_ups')
      .select('prospect_id, note')
      .in('prospect_id', prospectIds);

    if (error) {
      console.error('Fetch follow-up notes error:', error);
      return;
    }

    const groupedNotes = data.reduce((groups, followUp) => {
      groups[followUp.prospect_id] ??= [];
      groups[followUp.prospect_id].push(followUp.note);
      return groups;
    }, {});
    setNotesByProspect(groupedNotes);
  }

  async function fetchProspects() {
    if (!user) return;

    const { data, error } = await getProspects(user.id);
    if (error) {
      console.error('Fetch prospects error:', error);
    } else {
      const rows = data ?? [];
      setProspects(rows);
      await loadNotes(rows.map((prospect) => prospect.id));
    }
  }

  useEffect(() => {
    const interval = window.setInterval(() => setClockNow(Date.now()), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (authLoading || !userId) return;

    let cancelled = false;

    async function loadProspects() {
      const { data, error } = await getProspects(userId);
      if (cancelled) return;

      if (error) {
        console.error('Fetch prospects error:', error);
      } else {
        const rows = data ?? [];
        setProspects(rows);
        await loadNotes(rows.map((prospect) => prospect.id));
      }
    }

    loadProspects();
    return () => {
      cancelled = true;
    };
  }, [authLoading, userId]);

  const activeProspects = prospects.filter((p) => p.status !== 'lost');
  const lostProspects = prospects.filter((p) => p.status === 'lost');

  const total = activeProspects.length;
  const responded = activeProspects.filter((p) =>
    ['responded', 'negotiating'].includes(p.status)
  ).length;
  const won = activeProspects.filter((p) => p.status === 'won').length;
  const conversionRate = total > 0 ? ((won / total) * 100).toFixed(1) : '0.0';

  async function handleAddProspect({ name, contact_info, source }) {
    if (!user) return;

    setIsAddingProspect(true);
    setAddProspectError('');

    try {
      const { error } = await supabase.from('prospects').insert({
        user_id: user.id,
        name,
        contact_info,
        source,
        status: 'not_contacted',
        last_contacted_at: new Date().toISOString(),
      });

      if (error) throw error;

      setShowAddModal(false);
      await fetchProspects();
    } catch (error) {
      console.error('Add prospect error:', error);
      setAddProspectError(error.message || 'Unable to add this prospect.');
    } finally {
      setIsAddingProspect(false);
    }
  }

  async function advanceStatus(prospect) {
    const currentIndex = STAGES.findIndex((s) => s.key === prospect.status);
    if (currentIndex === -1 || currentIndex === STAGES.length - 1) return;

    const nextStatus = STAGES[currentIndex + 1].key;

    const { error } = await supabase
      .from('prospects')
      .update({ status: nextStatus, last_contacted_at: new Date().toISOString() })
      .eq('id', prospect.id);

    if (error) {
      console.error('Update status error:', error);
    } else {
      fetchProspects();
    }
  }

  async function markLost(prospect) {
    const { error } = await supabase
      .from('prospects')
      .update({ status: 'lost' })
      .eq('id', prospect.id);

    if (!error) fetchProspects();
  }

  async function handleAddNote(prospectId) {
    const note = noteDrafts[prospectId]?.trim();
    if (!note || savingNotes[prospectId]) return;

    setSavingNotes((current) => ({ ...current, [prospectId]: true }));
    setNoteFeedback((current) => ({ ...current, [prospectId]: null }));

    try {
      const { error: noteError } = await supabase.from('follow_ups').insert({
        prospect_id: prospectId,
        note,
      });

      if (noteError) throw noteError;

      setNotesByProspect((current) => ({
        ...current,
        [prospectId]: [...(current[prospectId] ?? []), note],
      }));
      setNoteDrafts((current) => ({ ...current, [prospectId]: '' }));

      const { error: timestampError } = await supabase
        .from('prospects')
        .update({ last_contacted_at: new Date().toISOString() })
        .eq('id', prospectId)
        .eq('user_id', user.id);

      await fetchProspects();

      if (timestampError) {
        setNoteFeedback((current) => ({
          ...current,
          [prospectId]: {
            message: `Note saved, but the nudge timer could not be reset: ${timestampError.message}`,
            isError: true,
          },
        }));
        return;
      }

      setNoteFeedback((current) => ({
        ...current,
        [prospectId]: { message: 'Note logged. The 72-hour nudge timer has restarted.', isError: false },
      }));
    } catch (error) {
      console.error('Add note error:', error);
      setNoteFeedback((current) => ({
        ...current,
        [prospectId]: { message: error.message || 'Unable to log this note.', isError: true },
      }));
    } finally {
      setSavingNotes((current) => ({ ...current, [prospectId]: false }));
    }
  }

  if (authLoading) {
    return (
      <>
        <Header />
        <div className="dash" role="status">Loading your dashboard...</div>
      </>
    );
  }

  if (!userId) {
    return (
      <>
        <Header />
        <div className="dash">
          <h1 className="dash__headline">Sign in to view your dashboard.</h1>
          <p className="dash__subtext">
            <a href="/login">Log in</a> or <a href="/sign-up">create an account</a> to get started.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
    <Header />
    <div className="dash">
      <div className="dash__intro">
        <p className="dash__tag">● PIPELINE ACTIVE • SOLOPRENEUR LEDGER</p>
        <div className="dash__headline-row">
          <h1 className="dash__headline">
            Hey, {profile?.full_name || user?.user_metadata?.full_name || 'there'}.{' '}
            <span className="dash__headline-accent">{total} prospects</span> are waiting on you.
          </h1>
          <button className="dash__add-btn" onClick={() => {
            setAddProspectError('');
            setShowAddModal(true);
          }}>
            + ADD PROSPECT
          </button>
        </div>
        <p className="dash__subtext">
          Every deal is just a hold right in front of you. Check your next touchpoint and keep calm momentum.
        </p>
      </div>

      <div className="dash__stats">
        <div className="dash__stat-card">
          <p className="dash__stat-label">TOTAL PROSPECTS</p>
          <p className="dash__stat-value">{total}</p>
          <p className="dash__stat-sub">Active pool</p>
        </div>
        <div className="dash__stat-card">
          <p className="dash__stat-label">RESPONDED / ACTIVE</p>
          <p className="dash__stat-value dash__stat-value--green">{responded}</p>
          <p className="dash__stat-sub">In flight</p>
        </div>
        <div className="dash__stat-card">
          <p className="dash__stat-label">CLIENT WON</p>
          <p className="dash__stat-value dash__stat-value--red">{won}</p>
          <p className="dash__stat-sub">Conversions</p>
        </div>
        <div className="dash__stat-card">
          <p className="dash__stat-label">CONVERSION RATE</p>
          <p className="dash__stat-value">{conversionRate}%</p>
          <p className="dash__stat-sub">Win velocity</p>
        </div>
      </div>

      <div className="dash__board">
        {STAGES.map((stage) => {
          const stageProspects = activeProspects.filter((p) => p.status === stage.key);
          return (
            <div className="dash__column" key={stage.key}>
              <div className="dash__column-header">
                <span className="dash__column-title">{stage.label}</span>
                <span className="dash__column-count">{stageProspects.length}</span>
              </div>
              <p className="dash__column-desc">{stage.desc}</p>

              {stageProspects.map((prospect) => (
                <div className="dash__card" key={prospect.id}>
                  <p className="dash__card-name">{prospect.name}</p>
                  <p className="dash__card-source">{prospect.source}</p>
                  {isNudgeDue(prospect.last_contacted_at, clockNow) && stage.key !== 'won' && (
                    <span className="dash__nudge-badge">Nudge due today</span>
                  )}

                  <textarea
                    className="dash__card-note-input"
                    placeholder="Add a follow-up note..."
                    value={noteDrafts[prospect.id] || ''}
                    onChange={(e) =>
                      setNoteDrafts((prev) => ({ ...prev, [prospect.id]: e.target.value }))
                    }
                  />
                  {noteFeedback[prospect.id] && (
                    <p
                      className={`dash__note-feedback${noteFeedback[prospect.id].isError ? ' dash__note-feedback--error' : ''}`}
                      role={noteFeedback[prospect.id].isError ? 'alert' : 'status'}
                    >
                      {noteFeedback[prospect.id].message}
                    </p>
                  )}
                  {(notesByProspect[prospect.id] ?? []).map((note, index) => (
                    <p className="dash__logged-note" key={`${prospect.id}-${index}`}>
                      {note}
                    </p>
                  ))}
                  <div className="dash__card-actions">
                    <button
                      className="dash__card-btn"
                      onClick={() => handleAddNote(prospect.id)}
                      disabled={savingNotes[prospect.id] || !noteDrafts[prospect.id]?.trim()}
                    >
                      {savingNotes[prospect.id] ? 'Logging...' : 'Log note'}
                    </button>
                    {stage.key !== 'won' && (
                      <button
                        className="dash__card-btn dash__card-btn--primary"
                        onClick={() => advanceStatus(prospect)}
                      >
                        Move →
                      </button>
                    )}
                    {stage.key !== 'won' && (
                      <button
                        className="dash__card-btn dash__card-btn--danger"
                        onClick={() => markLost(prospect)}
                      >
                        Mark lost
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="dash__lost">
        <button className="dash__lost-toggle" onClick={() => setShowLost(!showLost)}>
          <span>Lost Prospects ({lostProspects.length})</span>
          <span className="dash__lost-tag">COLD / PASSED</span>
          <span>{showLost ? 'Click to hide' : 'Click to show'}</span>
        </button>
        {showLost && (
          <div className="dash__lost-list">
            {lostProspects.map((p) => (
              <p key={p.id} className="dash__lost-item">{p.name} — {p.source}</p>
            ))}
          </div>
        )}
      </div>

      {showAddModal && (
        <AddProspectModal
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddProspect}
          error={addProspectError}
          isSubmitting={isAddingProspect}
        />
      )}
    </div>
    </>
  );
}

function AddProspectModal({ onClose, onSubmit, error, isSubmitting }) {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [source, setSource] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({ name, contact_info: contactInfo, source });
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">Add a prospect</h2>
        <form onSubmit={handleSubmit} className="modal__form">
          <label className="modal__label" htmlFor="prospect-name">Name</label>
          <input
            id="prospect-name"
            className="modal__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Who are you chasing?"
            required
          />

          <label className="modal__label" htmlFor="prospect-contact">Contact info</label>
          <input
            id="prospect-contact"
            className="modal__input"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            placeholder="Email, phone, IG handle..."
          />

          <label className="modal__label" htmlFor="prospect-source">Source</label>
          <input
            id="prospect-source"
            className="modal__input"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="How'd you find them?"
          />

          <div className="modal__actions">
            <button type="button" className="modal__cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="modal__submit" disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add prospect'}
            </button>
          </div>
          {error && <p className="modal__error" role="alert">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Dashboard;