import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from './useAuth';
import { isSupabaseConfigured, supabase } from '../SupabaseClient';
import GritLogo from '../assets/Grit_logo.png';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [signOutError, setSignOutError] = useState('');
    const profileMenuRef = useRef(null);
    const navigate = useNavigate();
    const { user, profile } = useAuth();
    const displayName = profile?.full_name || user?.user_metadata?.full_name || user?.email || 'Account';
    const initials = displayName
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0].toUpperCase())
        .join('');
    const colorSeed = user?.id || user?.email || '';
    const avatarColorIndex = [...colorSeed].reduce((hash, character) => (
        (hash * 31 + character.charCodeAt(0)) >>> 0
    ), 0) % 5 + 1;

    useEffect(() => {
        if (!isProfileMenuOpen) return undefined;

        function closeOnOutsideClick(event) {
            if (!profileMenuRef.current?.contains(event.target)) {
                setIsProfileMenuOpen(false);
            }
        }

        function closeOnEscape(event) {
            if (event.key === 'Escape') setIsProfileMenuOpen(false);
        }

        document.addEventListener('pointerdown', closeOnOutsideClick);
        document.addEventListener('keydown', closeOnEscape);
        return () => {
            document.removeEventListener('pointerdown', closeOnOutsideClick);
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, [isProfileMenuOpen]);

    async function handleSignOut() {
        if (!isSupabaseConfigured) return;

        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;

            setIsProfileMenuOpen(false);
            setIsMenuOpen(false);
            navigate('/', { replace: true });
        } catch (error) {
            setSignOutError(error.message);
        }
    }

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/" >
                 <img src={GritLogo} alt='Grit logo'/>
                </Link> 

                <h4 className="header__logo-text">Grit</h4>
            </div>

            <button
                type="button"
                className="header__menu-toggle"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                aria-controls="header-navigation"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav
                id="header-navigation"
                className={`header__nav${isMenuOpen ? ' header__nav--open' : ''}`}
            >
                <Link to="/the-reality" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>The Reality</Link>
                <Link to="/the-wall" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>The Wall</Link>
                {user ? (
                    <>
                        <Link to="/dashboard" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                        <div className="profile-menu" ref={profileMenuRef}>
                            <button
                                type="button"
                                className="profile-menu__trigger"
                                aria-label={`Open account menu for ${displayName}`}
                                aria-expanded={isProfileMenuOpen}
                                aria-haspopup="menu"
                                onClick={() => {
                                    setSignOutError('');
                                    setIsProfileMenuOpen((isOpen) => !isOpen);
                                }}
                                style={{ '--profile-avatar-color': `var(--profile-avatar-${avatarColorIndex})` }}
                            >
                                <span className="profile-menu__avatar" aria-hidden="true">{initials}</span>
                                <span className="profile-menu__chevron" aria-hidden="true">⌄</span>
                            </button>
                            {isProfileMenuOpen && (
                                <div className="profile-menu__dropdown" role="menu">
                                    <div className="profile-menu__identity">
                                        <span className="profile-menu__name">{displayName}</span>
                                        <span className="profile-menu__email">{user.email}</span>
                                    </div>
                                    <Link
                                        to="/dashboard"
                                        role="menuitem"
                                        className="profile-menu__item"
                                        onClick={() => {
                                            setIsProfileMenuOpen(false);
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        Dashboard
                                    </Link>
                                    <button type="button" role="menuitem" className="profile-menu__item" onClick={handleSignOut}>
                                        Log out
                                    </button>
                                    {signOutError && <p className="profile-menu__error" role="alert">{signOutError}</p>}
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>Log in</Link>
                        <Link to="/sign-up" className="header__nav-cta" onClick={() => setIsMenuOpen(false)}>
                            Get Gritted <i className="fi fi-rr-arrow-up-right cta__icon"></i>
                        </Link>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header;