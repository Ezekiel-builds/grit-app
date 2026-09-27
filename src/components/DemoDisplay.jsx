import { useState } from 'react';
import './DemoDisplay.css';

export function DemoDisplay() {
    const [isScattered, setIsScattered] = useState(false);
    return (
    <div className="board__section">
      {/* Top Controls */}
      <div className="board__topbar font__mono">
        <span className="state__indicator">
          State: <strong>{isScattered ? 'Scatter Mode' : 'Column Grid'}</strong>
        </span>
        <button 
          className="snap__btn"
          onClick={() => setIsScattered(!isScattered)}
        >
          {isScattered ? 'Snap into order' : 'Scatter notes'}
        </button>
      </div>

      {/* Main Board Area */}
      <div className={`board__columns ${isScattered ? 'is__scattered' : ''}`}>
        
        {/* Column 1 */}
        <div className="board__column col__red">
          <div className="column__header font__mono">
            <span className="dot red__dot">●</span> 1. Uncontacted
          </div>
          
          <div className="card note__red card__1">
            <div className="tape"></div>
            <div className="card__top font__mono">
              <span className="badge__text red__text">• Needs Action</span>
              <span className="stage__text">Stage 1</span>
            </div>
            <p className="card__body">
              "Elena at Studio Drift said 'send Loom tomorrow' (that was 4 days ago)"
            </p>
            <div className="card__footer font__mono red__text">Record 90s Intro</div>
          </div>

          <div className="card note__blue card__2">
            <div className="card__top font__mono">
              <span className="badge__text blue__text">• Prospecting</span>
              <span className="stage__text">Stage 1</span>
            </div>
            <p className="card__body">
              "34 tabs open: Acme Co team page, pricing calculators, portfolio drafts"
            </p>
            <div className="card__footer font__mono red__text">Draft note</div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="board__column col__yellow">
          <div className="column__header font__mono">
            <span className="dot yellow__dot">●</span> 2. Reached Out
          </div>

          <div className="card note__yellow card__3">
            <div className="tape"></div>
            <div className="card__top font__mono">
              <span className="badge__text yellow__text">• 72__Hour Timer</span>
              <span className="stage__text">Stage 2</span>
            </div>
            <p className="card__body">
              "did I follow up with Mike?? Or was that on LinkedIn??"
            </p>
            <div className="card__footer font__mono yellow__text">Follow__up due</div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="board__column col__blue">
          <div className="column__header font__mono">
            <span className="dot blue__dot">●</span> 3. Responded
          </div>

          <div className="card note__purple card__4">
            <div className="tape"></div>
            <div className="card__top font__mono">
              <span className="badge__text blue__text">• Active Conversation</span>
              <span className="stage__text">Stage 3</span>
            </div>
            <p className="card__body">
              "insta DM → maybe? said he needs a brand refresh next month"
            </p>
            <div className="card__footer font__mono blue__text">Replied today</div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="board__column col__pink">
          <div className="column__header font__mono">
            <span className="dot pink__dot">●</span> 4. Scope Lock
          </div>

          <div className="card note__pink card__5">
            <div className="tape"></div>
            <div className="card__top font__mono">
              <span className="badge__text pink__text">• Scope & Pricing</span>
              <span className="stage__text">Stage 4</span>
            </div>
            <p className="card__body">
              "Quote $2,500? Or will that scare them away? Sent proposal Monday"
            </p>
            <div className="card__footer font__mono">$2,500 fixed</div>
          </div>
        </div>

        {/* Column 5 */}
        <div className="board__column col__green">
          <div className="column__header font__mono">
            <span className="dot green__dot">●</span> 5. Won & Deposit
          </div>

          <div className="card note__green card__6">
            <div className="card__top font__mono">
              <span className="badge__text green__text">• Secured Deposit</span>
              <span className="stage__text">Stage 5</span>
            </div>
            <p className="card__body">
              "Apex Lab: 50% deposit received ($1,250). Kickoff scheduled next Tuesday."
            </p>
            <div className="card__footer font__mono green__text">First client secured ✓</div>
          </div>
        </div>

      </div>

      {/* Bottom Summary Bar */}
      <div className="board__summary">
        <div className="summary__item red__border">
          <span className="summary__title font__mono red__text">1. Uncontacted</span>
          <p>Three names maximum. If you add a fourth, drop or message one today.</p>
        </div>
        <div className="summary__item yellow__border">
          <span className="summary__title font__mono yellow__text">2. Reached Out</span>
          <p>A gentle 72__hour timer begins. Never second__guess when to follow up.</p>
        </div>
        <div className="summary__item blue__border">
          <span className="summary__title font__mono blue__text">3. Responded</span>
          <p>Transition smoothly off open tabs into a focused 15-minute scoping call.</p>
        </div>
        <div className="summary__item pink__border">
          <span className="summary__title font__mono pink__text">4. Scope Lock</span>
          <p>A clean, one-page agreement. Plain English, fixed fee, 48__hour validity.</p>
        </div>
        <div className="summary__item green__border">
          <span className="summary__title font__mono green__text">5. Won & Deposit</span>
          <p>Funds in your account before work starts. The foothold is solid.</p>
        </div>
      </div>
    </div>
  );
}