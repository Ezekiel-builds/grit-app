import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { useAuth } from '../components/useAuth';
import Header from '../components/Header';
import { isSupabaseConfigured, supabase } from '../SupabaseClient';
import './SignUp.css';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const { user, loading, setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleLogin(event) {
        event.preventDefault();
        setErrorMessage('');

        if (!isSupabaseConfigured) {
            setErrorMessage('Log in is unavailable because Supabase is not configured for this deployment.');
            return;
        }

        setIsSubmitting(true);
        try {
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;
            setUser(data.user);
            navigate('/dashboard', { replace: true });
        } catch (error) {
            setErrorMessage(error.message || 'Unable to log in. Check your email and password.');
        } finally {
            setIsSubmitting(false);
        }
    }

    if (!loading && user) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <>
        <Header />
        <main className="form__box">
            <section className="form__container form__container--login">
                <div className="form__heading">
                    <h1 className="form__heading-text">
                        Back on the <span className="form__heading-text-highlight">wall</span>
                    </h1>
                    <small className="form__heading-subtext">
                        Pick up where your last hold left off.
                    </small>
                </div>

                <form className="form" onSubmit={handleLogin}>
                    <div className="form__meta">
                        <label htmlFor="login-email" className="form__label">EMAIL</label>
                        <input
                            type="email"
                            id="login-email"
                            className="form__input"
                            autoComplete="email"
                            placeholder="you@email.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form__meta">
                        <label htmlFor="login-password" className="form__label">PASSWORD</label>
                        <input
                            type="password"
                            id="login-password"
                            className="form__input"
                            autoComplete="current-password"
                            placeholder="Your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>

                    {errorMessage && <p className="form__message form__message--error" role="alert">{errorMessage}</p>}

                    <button className="form__submit" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Logging in...' : 'Log in'}
                    </button>
                    <p className="form__switch">
                        New to Grit? <Link to="/sign-up">Create an account</Link>
                    </p>
                </form>
            </section>
        </main>
        </>
    );
}

export default Login;
