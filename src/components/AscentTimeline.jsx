/* import './AscentTimeline.css'; */

 function AscentTimeline() {
  return (
    <div className="process-container">
      <div className="process-wrapper">
        
        {/* ================= HOLD 01 (Bottom Step) ================= */}
        <div className="process">
          <div className="process__left">
            <div className="content-block">
              <span className="hold-tag">HOLD 01 • GROUND CHALK</span>
              <h3 className="step-title">Not Contacted (Prospect)</h3>
              <p className="step-desc">
                Identified a brand with clear room for improvement. Captured founder, context, and hook before memory fades.
              </p>
            </div>
          </div>

          <div className="process__chain">
            <div className="node-circle node-black">SCOUT</div>
            <div className="you-are-here-badge">YOU ARE HERE</div>
          </div>

          <div className="process__right">
            <div className="pill-block">
              Quick capture bookmarklet
            </div>
          </div>
        </div>

        {/* ================= HOLD 02 ================= */}
        <div className="process">
          <div className="process__left">
            <div className="pill-block">
              Automatic 72-hour nudge cue
            </div>
          </div>

          <div className="process__chain">
            <div className="node-circle node-orange">OUT</div>
          </div>

          <div className="process__right">
            <div className="content-block">
              <span className="hold-tag">HOLD 02 • FIRST PUSH</span>
              <h3 className="step-title">Reached Out</h3>
              <p className="step-desc">
                Bespoke hook sent. Not generic spam — high-signal observation with your direct value suggestion.
              </p>
            </div>
          </div>
        </div>

        {/* ================= HOLD 03 ================= */}
        <div className="process">
          <div className="process__left">
            <div className="content-block">
              <span className="hold-tag">HOLD 03 • THE CRIMP</span>
              <h3 className="step-title">Responded & Talking</h3>
              <p className="step-desc">
                They wrote back. The discovery conversation is active. Keep response cadence tight within 24 hours.
              </p>
            </div>
          </div>

          <div className="process__chain">
            <div className="node-circle node-blue">TALK</div>
          </div>

          <div className="process__right">
            <div className="pill-block">
              Audit notes pinned to conversation
            </div>
          </div>
        </div>

        {/* ================= HOLD 04 ================= */}
        <div className="process">
          <div className="process__left">
            <div className="pill-block">
              1-page simple proposal format
            </div>
          </div>

          <div className="process__chain">
            <div className="node-circle node-purple">SCOPE</div>
          </div>

          <div className="process__right">
            <div className="content-block">
              <span className="hold-tag">HOLD 04 • THE PINCH GRIP</span>
              <h3 className="step-title">Negotiating Scope</h3>
              <p className="step-desc">
                They want to work together. Lock scope to 3 concrete deliverables before momentum wanes.
              </p>
            </div>
          </div>
        </div>

        {/* ================= HOLD 05 (Top Step) ================= */}
        <div className="process">
          <div className="process__left">
            <div className="content-block">
              <span className="hold-tag">HOLD 05 • THE SUMMIT</span>
              <h3 className="step-title">Won & Paid Deposit</h3>
              <p className="step-desc">
                Contract signed. Upfront deposit cleared into your bank. You have secured your first client.
              </p>
            </div>
          </div>

          <div className="process__chain">
            <div className="node-circle node-green">WON</div>
          </div>

          <div className="process__right">
            <div className="pill-block pill-green">
              Milestone 1 unlocked & receipt logged
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AscentTimeline;  