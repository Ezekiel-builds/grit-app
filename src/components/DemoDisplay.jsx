import { useState } from 'react';

export function DemoDisplay() {
    const [isScattered, setIsScattered] = useState(false);
    return (
    <div className="board-section">
      {/* Top Controls */}
      <div className="board-topbar font-mono">
        <span className="state-indicator">
          State: <strong>{isScattered ? 'Scatter Mode' : 'Column Grid'}</strong>
        </span>
        <button 
          className="snap-btn"
          onClick={() => setIsScattered(!isScattered)}
        >
          {isScattered ? 'Snap into order' : 'Scatter notes'}
        </button>
      </div>

      {/* Main Board Area */}
      <div className={`board-columns ${isScattered ? 'is-scattered' : ''}`}>
        
        {/* Column 1 */}
        <div className="board-column col-red">
          <div className="column-header font-mono">
            <span className="dot red-dot">●</span> 1. Uncontacted
          </div>
          
          <div className="card note-red card-1">
            <div className="tape"></div>
            <div className="card-top font-mono">
              <span className="badge-text red-text">• Needs Action</span>
              <span className="stage-text">Stage 1</span>
            </div>
            <p className="card-body">
              "Elena at Studio Drift said 'send Loom tomorrow' (that was 4 days ago)"
            </p>
            <div className="card-footer font-mono red-text">Record 90s Intro</div>
          </div>

          <div className="card note-blue card-2">
            <div className="card-top font-mono">
              <span className="badge-text blue-text">• Prospecting</span>
              <span className="stage-text">Stage 1</span>
            </div>
            <p className="card-body">
              "34 tabs open: Acme Co team page, pricing calculators, portfolio drafts"
            </p>
            <div className="card-footer font-mono red-text">Draft note</div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="board-column col-yellow">
          <div className="column-header font-mono">
            <span className="dot yellow-dot">●</span> 2. Reached Out
          </div>

          <div className="card note-yellow card-3">
            <div className="tape"></div>
            <div className="card-top font-mono">
              <span className="badge-text yellow-text">• 72-Hour Timer</span>
              <span className="stage-text">Stage 2</span>
            </div>
            <p className="card-body">
              "did I follow up with Mike?? Or was that on LinkedIn??"
            </p>
            <div className="card-footer font-mono yellow-text">Follow-up due</div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="board-column col-blue">
          <div className="column-header font-mono">
            <span className="dot blue-dot">●</span> 3. Responded
          </div>

          <div className="card note-purple card-4">
            <div className="tape"></div>
            <div className="card-top font-mono">
              <span className="badge-text blue-text">• Active Conversation</span>
              <span className="stage-text">Stage 3</span>
            </div>
            <p className="card-body">
              "insta DM → maybe? said he needs a brand refresh next month"
            </p>
            <div className="card-footer font-mono blue-text">Replied today</div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="board-column col-pink">
          <div className="column-header font-mono">
            <span className="dot pink-dot">●</span> 4. Scope Lock
          </div>

          <div className="card note-pink card-5">
            <div className="tape"></div>
            <div className="card-top font-mono">
              <span className="badge-text pink-text">• Scope & Pricing</span>
              <span className="stage-text">Stage 4</span>
            </div>
            <p className="card-body">
              "Quote $2,500? Or will that scare them away? Sent proposal Monday"
            </p>
            <div className="card-footer font-mono">$2,500 fixed</div>
          </div>
        </div>

        {/* Column 5 */}
        <div className="board-column col-green">
          <div className="column-header font-mono">
            <span className="dot green-dot">●</span> 5. Won & Deposit
          </div>

          <div className="card note-green card-6">
            <div className="card-top font-mono">
              <span className="badge-text green-text">• Secured Deposit</span>
              <span className="stage-text">Stage 5</span>
            </div>
            <p className="card-body">
              "Apex Lab: 50% deposit received ($1,250). Kickoff scheduled next Tuesday."
            </p>
            <div className="card-footer font-mono green-text">First client secured ✓</div>
          </div>
        </div>

      </div>

      {/* Bottom Summary Bar */}
      <div className="board-summary">
        <div className="summary-item red-border">
          <span className="summary-title font-mono red-text">1. Uncontacted</span>
          <p>Three names maximum. If you add a fourth, drop or message one today.</p>
        </div>
        <div className="summary-item yellow-border">
          <span className="summary-title font-mono yellow-text">2. Reached Out</span>
          <p>A gentle 72-hour timer begins. Never second-guess when to follow up.</p>
        </div>
        <div className="summary-item blue-border">
          <span className="summary-title font-mono blue-text">3. Responded</span>
          <p>Transition smoothly off open tabs into a focused 15-minute scoping call.</p>
        </div>
        <div className="summary-item pink-border">
          <span className="summary-title font-mono pink-text">4. Scope Lock</span>
          <p>A clean, one-page agreement. Plain English, fixed fee, 48-hour validity.</p>
        </div>
        <div className="summary-item green-border">
          <span className="summary-title font-mono green-text">5. Won & Deposit</span>
          <p>Funds in your account before work starts. The foothold is solid.</p>
        </div>
      </div>
    </div>
  );
}