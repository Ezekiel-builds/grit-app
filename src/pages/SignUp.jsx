import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../components/useAuth';
import Header from '../components/Header';
import { isSupabaseConfigured, supabase } from '../SupabaseClient';
import './SignUp.css';

const STRONG_PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

function SignUp() {
    const navigate = useNavigate();
    const { setUser, setProfile } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageIsError, setMessageIsError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function validatePasswordCandidate(value) {
        if (!STRONG_PASSWORD_REGEX.test(value)) {
            setMessage('Use 8+ characters with upper and lowercase letters, a number, and a symbol.');
            setMessageIsError(true);
            return false;
        }

        return true;
    }

    async function handleSignUp(e) {
        e.preventDefault();
        if (!isSupabaseConfigured) {
            setMessage('Signup is unavailable because Supabase is not configured for this deployment.');
            setMessageIsError(true);
            return;
        }

        if (!validatePasswordCandidate(password)) {
            return;
        }

        setMessage('');
        setIsSubmitting(true);

        try {
            const fullName = name.trim();
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: { full_name: fullName }
                }
            });

            if (error) throw error;

            const newUser = data.user;
            if (!newUser) {
                throw new Error('Signup succeeded without returning a user.');
            }

            const { error: profileError } = await supabase
                .from('profiles')
                .insert({
                    id: newUser.id,
                    full_name: fullName
                });

            if (profileError) {
                console.error('Profile creation error:', profileError);
                setMessage(`Your account was created, but the profile could not be saved: ${profileError.message}`);
                setMessageIsError(true);
                return;
            }

            setUser(newUser);
            setProfile({ id: newUser.id, full_name: fullName });
            navigate('/welcome', { replace: true, state: { name: fullName } });
        } catch (error) {
            console.error('Signup error:', error);
            setMessage(error.message || 'Unable to create your account.');
            setMessageIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
        <Header />
        <main className="form__box" data-aos="fade-up" data-aos-delay="80">
            <section className="form__container" data-aos="zoom-in" data-aos-delay="140">
                <div className="form__heading">
                    <h2 className="form__heading-text">
                        <span className="form__heading-text-highlight">CHALK</span> up
                    </h2>

                    <small className="form__heading-subtext">
                        Three fields and you're on the wall. No credit card, no setup.
                    </small>
                </div>

                <form className="form" onSubmit={handleSignUp}>
                    <div className="form__meta">
                        <label htmlFor="full-name" className="form__label">
                            CLIMBER NAME
                        </label>

                        <input 
                        type="text"
                        id="full-name"
                        placeholder="What should we call you?"
                        className="form__input"
                        value={name}
                        autoComplete="name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form__meta">
                        <label htmlFor="signup-email" className="form__label">
                            WHERE DO WE SEND YOUR ROUTE?
                        </label>

                        <input 
                        type="email"
                        id="signup-email"
                        placeholder="you@email.com"
                        className="form__input"
                        value={email}
                        autoComplete="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form__meta">
                        <label htmlFor="signup-password" className="form__label">
                            YOUR ROPE
                        </label>

                        <input 
                        type="password"
                        id="signup-password"
                        placeholder="Use 8+ chars with mixed case, number, symbol"
                        className="form__input"
                        value={password}
                        autoComplete="new-password"
                        minLength={8}
                        pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}"
                        title="Use 8+ characters with upper and lowercase letters, a number, and a symbol."
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {message && (
                        <p className={`form__message${messageIsError ? ' form__message--error' : ''}`} role={messageIsError ? 'alert' : 'status'}>
                            {message}
                        </p>
                    )}
                    <button className="form__submit" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Creating account...' : 'Start Climbing'}
                    </button>
                    <p className="form__switch">Already have an account? <Link to="/login">Log in</Link></p>
                </form>
            </section>
        </main>
        </>
    )
}

export default SignUp;