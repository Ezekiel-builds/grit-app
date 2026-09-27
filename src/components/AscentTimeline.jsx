import React from 'react';
import './AscentTimeline.css';

export default function AscentTimeline() {
  return (
    <div className="process__container">
      <div className="process__wrapper">
        
        {/* ================= HOLD 01 (Bottom Step) ================= */}
        <div className="process">
          <div className="process__left">
            <div className="content__block">
              <span className="hold__tag">HOLD 01 • GROUND CHALK</span>
              <h3 className="step__title">Not Contacted (Prospect)</h3>
              <p className="step__desc">
                Identified a brand with clear room for improvement. Captured founder, context, and hook before memory fades.
              </p>
            </div>
          </div>

          <div className="process__chain">
            <div className="node__circle node__black">SCOUT</div>

          </div>

          <div className="process__right">
            <div className="pill__block">
              Quick capture bookmarklet
            </div>
          </div>
        </div>

        {/* ================= HOLD 02 ================= */}
        <div className="process">
          <div className="process__left">
            <div className="pill__block">
              Automatic 72__hour nudge cue
            </div>
          </div>

          <div className="process__chain">
            <div className="node__circle node__orange">OUT</div>
          </div>

          <div className="process__right">
            <div className="content__block">
              <span className="hold__tag">HOLD 02 • FIRST PUSH</span>
              <h3 className="step__title">Reached Out</h3>
              <p className="step__desc">
                Bespoke hook sent. Not generic spam — high__signal observation with your direct value suggestion.
              </p>
            </div>
          </div>
        </div>

        {/* ================= HOLD 03 ================= */}
        <div className="process">
          <div className="process__left">
            <div className="content__block">
              <span className="hold__tag">HOLD 03 • THE CRIMP</span>
              <h3 className="step__title">Responded & Talking</h3>
              <p className="step__desc">
                They wrote back. The discovery conversation is active. Keep response cadence tight within 24 hours.
              </p>
            </div>
          </div>

          <div className="process__chain">
            <div className="node__circle node__blue">TALK</div>
          </div>

          <div className="process__right">
            <div className="pill__block">
              Audit notes pinned to conversation
            </div>
          </div>
        </div>

        {/* ================= HOLD 04 ================= */}
        <div className="process">
          <div className="process__left">
            <div className="pill__block">
              1__page simple proposal format
            </div>
          </div>

          <div className="process__chain">
            <div className="node__circle node__purple">SCOPE</div>
          </div>

          <div className="process__right">
            <div className="content__block">
              <span className="hold__tag">HOLD 04 • THE PINCH GRIP</span>
              <h3 className="step__title">Negotiating Scope</h3>
              <p className="step__desc">
                They want to work together. Lock scope to 3 concrete deliverables before momentum wanes.
              </p>
            </div>
          </div>
        </div>

        {/* ================= HOLD 05 (Top Step) ================= */}
        <div className="process">
          <div className="process__left">
            <div className="content__block">
              <span className="hold__tag">HOLD 05 • THE SUMMIT</span>
              <h3 className="step__title">Won & Paid Deposit</h3>
              <p className="step__desc">
                Contract signed. Upfront deposit cleared into your bank. You have secured your first client.
              </p>
            </div>
          </div>

          <div className="process__chain">
            <div className="node__circle node__green">WON</div>
          </div>

          <div className="process__right">
            <div className="pill__block pill__green">
              Milestone 1 unlocked & receipt logged
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}