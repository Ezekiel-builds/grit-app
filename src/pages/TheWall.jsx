import { Link } from 'react-router';
import Header from "../components/Header";
import Footer from "../components/Footer";
import './TheWall.css';

function TheWall() {
  return (
    <>
        <Header />
        <div className="wall" data-aos="fade-up" data-aos-delay="80">
            <div className="wall__meta" data-aos="fade-down" data-aos-delay="120">
                <span className="wall__meta-tag">// 02 • THE ARCHITECTURE</span>
                <span className="wall__meta-version">
                METHODOLOGY <span className="wall__meta-version-num">V2.4</span>
                </span>
            </div>

            <div className="wall__pills" data-aos="fade-up" data-aos-delay="140">
                <span className="wall__pill">// HOW IT WORKS</span>
                <span className="wall__pill-dot">•</span>
                <span className="wall__pill">THE 5 STEPS</span>
            </div>

            <div className="wall__header" data-aos="fade-up" data-aos-delay="180">
                <h3 className="wall__title">The Wall: How Grit Actually Works</h3>
                <span className="wall__page-ref">P. 18 / ASCENT</span>
            </div>

            <blockquote className="wall__quote" data-aos="fade-up" data-aos-delay="220">
                "In rock climbing, a Grit isn't an elaborate roadmap—it's just a
                solid point of contact that supports your weight so you can reach the
                next grip. The Wall is engineered around five tangible holds that carry
                you from an initial cold prospect to money cleared in your bank account,
                without the cognitive fog of a 40-step enterprise CRM."
            </blockquote>

            <nav className="wall__stepnav" data-aos="fade-up" data-aos-delay="260">
                <span className="wall__stepnav-item" data-aos="zoom-in" data-aos-delay="300">
                <span className="wall__stepnav-dot wall__stepnav-dot--scout"></span>
                01 SCOUT
                </span>

                <span className="wall__stepnav-item" data-aos="zoom-in" data-aos-delay="340">
                <span className="wall__stepnav-dot wall__stepnav-dot--out"></span>
                02 OUT
                </span>

                <span className="wall__stepnav-item" data-aos="zoom-in" data-aos-delay="380">
                <span className="wall__stepnav-dot wall__stepnav-dot--talk"></span>
                03 TALK
                </span>

                <span className="wall__stepnav-item" data-aos="zoom-in" data-aos-delay="420">
                <span className="wall__stepnav-dot wall__stepnav-dot--scope"></span>
                04 SCOPE
                </span>

                <span className="wall__stepnav-item" data-aos="zoom-in" data-aos-delay="460">
                <span className="wall__stepnav-dot wall__stepnav-dot--won"></span>
                05 WON
                </span>
            </nav>

            <div className="wall__holds">
                <div className="wall__hold" data-aos="fade-up" data-aos-delay="200">
                    <div className="wall__hold-number wall__hold-number--scout">
                        <span className="wall__hold-number-val">01</span>
                        <span className="wall__hold-number-label">SCOUT</span>
                    </div>

                    <div className="wall__hold-content">
                        <div className="wall__hold-heading">
                        <h4 className="wall__hold-title">
                            Hold 01 • Ground Chalk — Not Contacted (Prospect)
                        </h4>
                        <span className="wall__hold-tag wall__hold-tag--neutral">
                            PITCH ZERO
                        </span>
                        </div>

                        <p className="wall__hold-desc">
                        Every client begins as an unverified observation in the wild. You
                        identify a specific company or founder with a clear problem you
                        can solve, capture their context immediately before memory
                        degrades, and craft an intentional observation hook. You don't
                        dump them into a 500-lead bulk email campaign; you treat them as
                        an individual summit attempt.
                        </p>

                        <p className="wall__hold-tip">
                        <span className="wall__hold-tip-dot">•</span>
                        <span className="wall__hold-tip-label">TIP</span>
                        Never add a lead without writing down their specific friction
                        point first.
                        </p>
                    </div>
                </div>

                <div className="wall__hold" data-aos="fade-up" data-aos-delay="260">
                    <div className="wall__hold-number wall__hold-number--out">
                        <span className="wall__hold-number-val">02</span>
                        <span className="wall__hold-number-label">OUT</span>
                    </div>

                    <div className="wall__hold-content">
                        <div className="wall__hold-heading">
                        <h4 className="wall__hold-title">
                            Hold 02 • First Push — Reached Out
                        </h4>
                        <span className="wall__hold-tag wall__hold-tag--out">
                            72H CLOCK ACTIVE
                        </span>
                        </div>

                        <p className="wall__hold-desc">
                        Your bespoke outreach hook is out in the world, shifting the
                        burden off your shoulders. Once dispatched, a gentle 72-hour timer
                        begins so you never have to carry the mental weight of wondering
                        when or whether to follow up. If they don't reply within three
                        days, Grit surfaces a calm nudge cue to follow up with value,
                        eliminating second-guessing.
                        </p>

                        <p className="wall__hold-tip">
                        <span className="wall__hold-tip-dot">•</span>
                        <span className="wall__hold-tip-label">TIP</span>
                        Send 1 high-signal personalized note instead of 10 generic
                        automated blasts.
                        </p>
                    </div>
                </div>

                <div className="wall__hold" data-aos="fade-up" data-aos-delay="320">
                    <div className="wall__hold-number wall__hold-number--talk">
                        <span className="wall__hold-number-val">03</span>
                        <span className="wall__hold-number-label">TALK</span>
                    </div>

                    <div className="wall__hold-content">
                        <div className="wall__hold-heading">
                        <h4 className="wall__hold-title">
                            Hold 03 • The Crimp — Responded & Talking
                        </h4>
                        <span className="wall__hold-tag wall__hold-tag--talk">
                            DIAGNOSIS
                        </span>
                        </div>

                        <p className="wall__hold-desc">
                        They wrote back, opening active two-way dialogue. The goal of this
                        hold is solely to understand their operational bottleneck and
                        diagnose real pain, not to rush a generic pitch deck. Keep
                        response cadences crisp within 24 hours while conversation
                        momentum is warm and both minds are engaged.
                        </p>

                        <p className="wall__hold-tip">
                        <span className="wall__hold-tip-dot">•</span>
                        <span className="wall__hold-tip-label">TIP</span>
                        Pin audit takeaways and exact client phrasing directly to the hold
                        card.
                        </p>
                    </div>
                </div>

                <div className="wall__hold" data-aos="fade-up" data-aos-delay="380">
                    <div className="wall__hold-number wall__hold-number--scope">
                        <span className="wall__hold-number-val">04</span>
                        <span className="wall__hold-number-label">SCOPE</span>
                    </div>
                    <div className="wall__hold-content">
                        <div className="wall__hold-heading">
                        <h4 className="wall__hold-title">
                            Hold 04 • The Pinch Grip — Negotiating Scope
                        </h4>
                        <span className="wall__hold-tag wall__hold-tag--scope">
                            LOCK TERMS
                        </span>
                        </div>
                        <p className="wall__hold-desc">
                            They want to work together; now you lock the parameters before
                            enthusiasm fades into endless revision cycles. Deliver a tight,
                            one-page simple proposal outlining exactly 3 deliverables, a clear
                            flat fee, and a 48-hour acceptance window. Clear constraints
                            protect both sides from scope creep and ambiguity.
                        </p>

                        <p className="wall__hold-tip">
                            <span className="wall__hold-tip-dot">•</span>
                            <span className="wall__hold-tip-label">TIP</span>
                            Limit proposals to a single page with a defined 48-hour
                            expiration.
                        </p>
                    </div>
                </div>

                <div className="wall__hold" data-aos="fade-up" data-aos-delay="440">
                    <div className="wall__hold-number wall__hold-number--won">
                        <span className="wall__hold-number-val">05</span>
                        <span className="wall__hold-number-label">WON</span>
                    </div>
                    <div className="wall__hold-content">
                        <div className="wall__hold-heading">
                        <h4 className="wall__hold-title">
                            Hold 05 • The Summit — Won & Paid Deposit
                        </h4>
                        <span className="wall__hold-tag wall__hold-tag--won">
                            CLEARED FUNDS
                        </span>
                        </div>
                        <p className="wall__hold-desc">
                        A deal is only real when the contract is signed and the upfront
                        deposit clears into your bank account. In Grit, prospects never
                        linger in a theoretical 'closed-won' limbo without cleared funds.
                        Once the receipt is logged, the route is completed and the
                        milestone is permanently unlocked.
                        </p>

                        <p className="wall__hold-tip">
                            <span className="wall__hold-tip-dot">•</span>
                            <span className="wall__hold-tip-label">TIP</span>
                            Never start kickoff delivery until the 50% deposit has cleared.
                        </p>
                    </div>
                </div>
            </div>

            <div className="wall__note" data-aos="fade-up" data-aos-delay="180">
                <p className="wall__note-heading">
                    A NOTE FROM THE JOURNAL{" "}
                    <span className="wall__note-heading-divider">//</span> NO VANITY
                METRICS
                </p>
                <p className="wall__note-body">
                Most solo craftspeople don't fail because their work is bad—they stall
                because three warm leads went cold on their desktop while they were
                busy fiddling with font sizes on their invoice template. Real client
                acquisition doesn't require complex 40-step enterprise funnels or
                vanity scoring algorithms. It just requires 5 physical points of
                contact you can trust, one grip at a time.
                </p>
            </div>

            <div className="wall__cta" data-aos="zoom-in" data-aos-delay="220">
                <div className="wall__cta-icon">▲</div>
                <h2 className="wall__cta-title">Grab the first hold.</h2>
                <p className="wall__cta-subtitle">
                Take control of your first client journey. No bloated setups, no
                credit card required to scout your route.
                </p>
                <Link to="/sign-up" className="wall__cta-button">
                    GET GRITTED →
                </Link>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default TheWall;
