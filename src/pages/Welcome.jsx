import { Link, useLocation } from 'react-router';
import { useAuth } from '../components/useAuth';
import Header from '../components/Header';
import './Welcome.css';

function Welcome() {
  const { user, profile } = useAuth();
  const location = useLocation();
  const name = profile?.full_name || location.state?.name || user?.user_metadata?.full_name || 'Climber';

  return (
    <>
      <Header />
      <main className="welcome">
        <section className="welcome__content" aria-labelledby="welcome-title">
          <p className="welcome__eyebrow">ACCOUNT READY // FIRST HOLD SECURED</p>
          <h1 className="welcome__title" id="welcome-title">
            Welcome, <span>{name}</span>.
          </h1>
          <p className="welcome__copy">
            Your profile is ready. Let’s get your first prospects onto the wall.
          </p>
          <Link className="welcome__link" to="/dashboard">
            Go to your dashboard <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    </>
  );
}

export default Welcome;