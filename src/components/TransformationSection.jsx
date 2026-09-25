import { useState } from 'react';
/* import './TransformationSection.css'; */

function TransformationSection() {
    const [isSnapped, setIsSnapped] = useState(false)
    return (
        <section className="trans__container">
            <div className="trans__topbar">
                <div className="trans__title">
                    <span className="orange-dot">●</span> The Transformation: Messy Notes Snapping Into Clear Holds
                </div>

                <div className="trans__toggle-group">
                    <span className="state-label">State:</span>

                    <button className="snap__btn"
                    onClick={() => setIsSnapped(!isSnapped)}
                    >
                        {isSnapped ? "Snapped into order": "Snap into order"}    
                    </button>
                </div>
            </div>

            <div className="trans__grid">
                <div className="left__panel">
                    <div className="panel__header">
                        <span className="red__dot">●</span>
                        <span className="panel-title red-text">The Scattered Notes Dump</span>
                        <span className="panel-tag">Unstructured</span>
                    </div>

                    <div className="notes__stack">
                        {/* Note 1 */}
                        <div className="note-card yellow-note">
                            <div className="tape-graphic"></div>
                            <div className="note-label">DM FRAGMENT</div>
                            <div className="note-body">
                            "Marcus from Studio K liked the audit Loom. Did he email back?"
                            </div>
                        </div>

                        {/* Note 2 */}
                        <div className="note-card peach-note">
                            <div className="tape-graphic"></div>
                            <div className="note-label">COLD OUTREACH</div>
                            <div className="note-body">
                            "Sent proposal draft to Arch & Loom... wait, did they sign?"
                            </div>
                        </div>

                        {/* Note 3 */}
                        <div className="note-card blue-note">
                            <div className="tape-graphic"></div>
                            <div className="note-label">BROWSER BOOKMARK</div>
                            <div className="note-body">
                            "34 open tabs of founder Twitter accounts with no follow-up date"
                            </div>
                        </div>

                        {/* Note 4 */}
                        <div className="note-card pink-note">
                            <div className="tape-graphic"></div>
                            <div className="note-label">LOST DRAFT</div>
                            <div className="note-body">
                            "Kiteboard Co. requested rates for redesign. Email sitting in drafts 5 days."
                            </div>
                        </div>

                        <div className="panel-footer font-mono red-text">
                            Result: Decision paralysis → Needs holding & decay line
                        </div>

                    </div>
                </div>

                <div className="arrow__divider">
                    <button className="arrow">
                        <i className="fi fi-rr-arrow-small-right arrow"></i>
                    </button>
                </div>

                <div className="right__panel">
                    <div className="panel-header">
                        <span className="green-dot">●</span>
                        <span className="panel-title green-text">The Foothold Protocol</span>
                        <span className="panel-tag">5 Clear Holds</span>
                    </div>

                    <div className="holds__stack">
                        {/* Hold 1 */}
                        <div className="hold-row">
                            <div className="hold-number font-mono">1</div>
                                <div className="hold-details">
                                <div className="hold-name font-mono">Design Collective</div>
                                <div className="hold-sub">Hook drafted</div>
                            </div>
                            <div className="hold-pill pill-scout font-mono">Hold 01: Scout</div>
                        </div>

                        {/* Hold 2 */}
                        <div className="hold-row">
                            <div className="hold-number font-mono">2</div>
                            <div className="hold-details">
                                <div className="hold-name font-mono">Studio K (Marcus)</div>
                                <div className="hold-sub green-text">Nudge prompt active</div>
                            </div>
                            <div className="hold-pill pill-reached font-mono">Hold 02: Reached out</div>
                        </div>

                        {/* Hold 3 */}
                        <div className="hold-row">
                            <div className="hold-number font-mono">3</div>
                            <div className="hold-details">
                                <div className="hold-name font-mono">Kiteboard Co.</div>
                                <div className="hold-sub">Discovery call Thursday 2pm</div>
                            </div>
                            <div className="hold-pill pill-talking font-mono">Hold 03: Talking</div>
                        </div>

                        {/* Hold 4 */}
                        <div className="hold-row hold-won-row">
                            <div className="hold-number font-mono">5</div>
                            <div className="hold-details">
                                <div className="hold-name font-mono">Arch & Loom Co.</div>
                                <div className="hold-sub">Deposit received • First Client won</div>
                            </div>
                            <div className="hold-pill pill-won font-mono">Hold 05: Won</div>
                        </div>

                        {/* Hold 5 */}
                        <div className="hold-row hold-won-row">
                            <div className="hold-number font-mono">5</div>
                            <div className="hold-details">
                                <div className="hold-name font-mono">Arch & Loom Co.</div>
                                <div className="hold-sub">Deposit received • First Client won</div>
                            </div>
                            <div className="hold-pill pill-won font-mono">Hold 05: Won</div>
                        </div>
                        
                        <div className="right-panel-footer font-mono">
                            <span>Total mental clarity</span>
                            <span className="green-text">5-minute morning routine</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TransformationSection;