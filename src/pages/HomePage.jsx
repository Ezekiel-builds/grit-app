import Header from "../components/Header";
import TransformationSection from "../components/TransformationSection";
import AscentTimeline from "../components/AscentTimeline";
import GritLogo from "../assets/Grit_logo.png"
import GritDasboard from "../assets/Grit_dashboard.png";
/* import './HomePage.css'
 */
function HomePage() {
  return (
    <>
      <Header />
      <main>
            <section className="hero">
                    <div className="hero__left">
                    <p className="hero__eyebrow">
                        <span className="status__dot"></span>
                        Built for your first client . Solo freelancer edition
                    </p>

                    <h1 className="hero__heading">
                        Your first client is out there.{" "}
                        <span className="hero__text-itallic">Stop lying</span> track of
                        them.
                    </h1>

                    <p className="hero__text">
                        Cold emails buried in Gmail drafts. Follow-ups decaying in Apple
                        Notes. Half-written scope docs.{" "}
                        <span className="hero__text-highlight">Grit</span> replaces the
                        chaos with five clean climbing holds between you and your first paid
                        invoice
                    </p>

                    <div className="hero__btn">
                        <a href="#" className="hero__btn-link">
                        Get Gritted <i className="fi fi-rr-arrow-right hero__btn-arrow"></i>
                        </a>
                    </div>

                    <div className="hero__left-bottom">
                        <p className="bottom__text">
                        <span className="bold">
                            No pipelines to configure. No 40 tabs.
                        </span>{" "}
                        Just 5 holds.
                        </p>
                    </div>
                    </div>

                    <div className="neo-container">
                        {/* Card 1: Notes App */}
                        <div className="neo-card card-1">
                                <div className="tape"></div>
                                <div className="card-header">
                                    <span className="app-title">NOTES APP</span>
                                    <span className="tag tag-red">6 DAYS AGO</span>
                                </div>
                                <p className="card-text">
                                "Did I follow up with Mike?? Or was that on LinkedIn?"
                                </p>
                        </div>

                        {/* Card 2: Instagram DM */}
                        <div className="neo-card card-2">
                                <div className="tape"></div>
                                <div className="card-header">
                                    <span className="app-title">INSTAGRAM DM</span>
                                    <span className="tag tag-gray">TRIAGE</span>
                                </div>
                                <p className="card-text">
                                "Insta DM: Marcus asked for a scope audit. Lost in 40 open tabs."
                                </p>
                        </div>

                        {/* Card 3: Gmail Draft */}
                        <div className="neo-card card-3">
                            <div className="tape"></div>
                            <div className="card-header">
                            <span className="app-title">GMAIL DRAFT</span>
                            <span className="tag tag-red">STALLED</span>
                            </div>
                            <p className="card-text">
                            "Quote $2,500? What if that scares them away? Draft sitting in
                            Gmail since Monday..."
                            </p>
                        </div>

                        {/* Card 4: Chrome */}
                        <div className="neo-card card-4">
                            <div className="tape"></div>
                            <div className="card-header">
                            <span className="app-title">CHROME</span>
                            <span className="tag tag-gray">37 TABS</span>
                            </div>
                            <p className="card-text">
                            "37 browser bookmarks of founder Twitter accounts with no
                            follow-up date."
                            </p>
                        </div>
                    </div>
            </section>

            <section className="transformation__section">
                <div className="transformation__header">
                    <p className="header__eyebrow">
                        // 01 • The Unvarnished Reality
                    </p>

                    <h3 className="transformation__header-text">
                        "A few weeks ago I was trying to land my first freelance
                        client with zero system, just vibes and a Notes app."
                    </h3>
                </div>

                <div className="transformation__body-text">
                    <p className="transformation__text">
                        I had 14 tabs open with company 'About' pages, a Notion doc I spent three days styling instead of
                        sending pitches, and a gnawing dread every Thursday afternoon wondering if I seemed desperate by
                        following up.
                    </p>

                    <p className="transformation__text">
                        I think most people don't fail at freelancing because their craft isn't good enough. In my experience, we
                        fail because pitch conversations disintegrate into cognitive mist after 72 hours.
                    </p>

                    <p className="transformation__text">
                        You don't need a 40-step enterprise pipeline with scoring algorithms. You need to know: 
                        <span className="transformation__text-highlight">Who did I message? Did they reply? What hold am I grabbing next?</span>
                    </p>

                    <div className="interactive__demo">
                        <TransformationSection />
                    </div>
                </div>
            </section>

            <section className="how__it-works">
                <div className="process__header">
                    <span className="process__header-eyebrow">
                        How it works • The 5 steps
                    </span>

                    <h3 className="process__header-text">
                        The Wall: 5 Holds to First Client.
                    </h3>

                    <p className="process__text">
                        In climbing, a foothold takes your weight so you can reach the next grip. Here is your
                        ascent from scouted prospect to paid deposit:
                    </p>
                </div>

                <div className="process">
                    <AscentTimeline />
                </div>
            </section>

            <section className="visuals">
                <div className="visuals__header">
                    <span className="visuals__eyebrow">
                        // 03 • The Daily Rig
                    </span>

                    <h3 className="visuals__header-text">
                        Built for 5-minute daily triage.
                    </h3>

                    <p className="visual__text">
                        Open Foothold every morning at 9:00 AM. See the two actions to take. Close Foothold at
                        9:05 AM.
                    </p>
                </div>

                <div className="visuals__image">
                    <img src={GritDasboard} alt="Grit dashboard" />
                    <div className="paper__clip"></div>
                    <div className="paper__clip"></div>
                </div>
            </section>

            <section className="cta">
                <div className="cta__header">
                    <span className="cta__header-eyebrow">
                        The simple promise • No risk
                    </span>

                    <h3 className="cta__header-text">
                        Grab the first hold.
                    </h3>

                    <p className="cta__text">
                        Stop staring at empty Apple Notes folders. Put your first three
                        prospects on the wall and let cadence do the rest.
                    </p>
                </div>

                <a href="#" className="cta__btn">
                    Get Gritted <i className="fi fi-rr-arrow-up-right cta__icon"></i>
                </a>

                <span className="cta__bottom">
                    Free. Built by someone who lived the problem. No credit card • No vanity enterprise tiers • Export your contacts anytime
                </span>
            </section>

            <footer className="footer">
                 <div className="footer__logo">
                    <img src={GritLogo} alt='Grit logo'/>
    
                    <h4 className="footer__logo-text">Grit</h4>
                </div>
                
                <p className="footer__copyright-notice">
                    &copy; {new Date().getFullYear()} Grit. All rights reserved.
                </p>

                <div className="footer__links">
                    <a href="#" className="header__nav-link">The Reality</a>
                    <a href="#" className="header__nav-link">The Wall</a>
                    <a href="#" className="header__nav-link">Dashboard</a>
                </div>
            </footer>
      </main>
    </>
  );
}

export default HomePage;
