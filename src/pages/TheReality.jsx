import { Link } from 'react-router';
import Header from "../components/Header";
import Footer from '../components/Footer';
import { DemoDisplay } from "../components/DemoDisplay";
import './TheReality.css';

function TheReality() {
    return (
        <>
            <Header />
            <main className="main">
                <div className="the__reality-container">
                    <section className="journal">
                        <div className="journal__heading">
                            <div className="journal__heading-eyebrow">
                                <span className="eyebrow__text">
                                    —The Unvarnished Reality
                                </span>
                                
                                <span className="eyebrow__text-highlight">
                                    Personal Journal
                                </span>
                            </div>

                            <h3 className="journal__heading-text">
                                I'm trying to land my first client with <span>zero system</span> just vibes
                                and a Notes app.
                            </h3>
                       </div>   

                            <div className="journal__body">
                                <p className="journal__body-text border__orange">
                                    I have 14 tabs open with company “About” pages, a Notion document I spent three
                                    days styling instead of sending actual messages, and a gnawing dread every
                                    Thursday afternoon wondering if I seemed desperate by following up. When you
                                    don't have a system, every single outreach feels like an existential crisis.
                                </p>

                                <p className="journal__body-text border__yellow">
                                    The advice from the internet is always to go install HubSpot or build a 40-step
                                    sales funnel with automated nurture sequences and automated spam cadences.
                                    But I'm just one person with a laptop trying to get someone to pay me for my craft.
                                    I don't need lead scoring or enterprise pipelines. I just need to know: Who did I talk
                                    to? Did they reply? What hold am I grabbing next?         
                                </p>

                                <p className="journal__body-text border__green">
                                    Grit exists because pitch conversations disintegrate into cognitive mist after
                                    72 hours unless they're anchored to something physical. In rock climbing, a
                                    Grit isn't fancy—it's just a solid point of contact that supports your weight so
                                    you can reach the next grip. That's all client acquisition needs to be.
                                </p>
                            </div>

                            <div className="context__card">
                                <div className="context__topbar">
                                    <i class="fi fi-rr-triangle-warning warning__icon"></i>
                                    <span className="context__card-text">
                                        A NOTE FROM THE JOURNAL
                                    </span>
                                </div>

                                <p className="context__card-text">
                                    Most solo craftspeople don't fail because their work is bad. They stall because three warm
                                    leads went cold on their desktop while they were busy fiddling with font sizes on their
                                    invoice template.
                                </p>
                            </div>
                    </section>

                    <section className="tactile__demo">
                        <div className="tactile__demo-heading">
                            <span className="heading__eyebrow">
                                TACTILE DEMO
                            </span>

                            <h3 className="heading__text">
                                Watch the chaos snap into clarity.
                            </h3>

                            <p className="heading__subtext">
                                Click “Sort it” to see scattered desk notes gently organize into five natural climbing holds.
                            </p>
                        </div>

                        <DemoDisplay />

                    </section>

                    <section className="cta">
                        <div className="cta__card">
                            <div className="cta__heading">
                                <span className="cta__heading-eyebrow">
                                    FROM THE NOTEBOOK
                                </span>

                                <h4 className="cta__heading-text"> 
                                    “Stop staring at empty Apple Notes folders. Put your first
                                    three prospects on the wall and let Grit do the rest.”
                                </h4>
                            </div>

                            <div className="cta__button-card">
                                <Link to="/"
                                className="cta__button-link"
                                >
                                    Get Gritted <i className="fi fi-rr-arrow-up-right cta__icon"></i>
                                </Link>

                                <span className="cta__button-subtext">
                                    Free until you collect your first client check • Zero credit card required
                                </span>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>

            </main>
        </>
    )
}

export default TheReality;