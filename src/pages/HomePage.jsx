import Header from "../components/Header";

function HomePage() {
    return (
        <>
            <Header />

            <main className="hero">
                <div className="hero__left">
                    <p className="hero__eyebrow">
                        <span className="status__dot"></span>
                        Built for your first client . Solo freelancer edition
                    </p>

                    <h1 className="hero__heading">
                        Your first client is out there. <span className="hero__text-itallic">Stop lying</span> track of them.
                    </h1>

                    <p className="hero__text">
                        Cold emails buried in Gmail drafts. Follow-ups decaying in Apple
                        Notes. Half-written scope docs. Foothold replaces the chaos with
                        five clean climbing holds between you and your first paid invoice
                    </p>
                </div>
            </main>
        </>
    )
}

export default HomePage;