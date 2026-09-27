import { useState } from 'react';
import { Link } from 'react-router';
import GritLogo from '../assets/Grit_logo.png';
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <Link to="/dashboard" className="header__nav-link" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
                <Link to={(e) => e.prevenDefault()} className="header__nav-cta" onClick={() => setIsMenuOpen(false)}>Get Gritted <i className="fi fi-rr-arrow-up-right cta__icon"></i></Link>
            </nav>
        </header>
    )
}

export default Header;