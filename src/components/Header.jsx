import { Link } from 'react-router';
import GritLogo from '../assets/Grit_logo.png';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={GritLogo} alt='Grit logo'/>

                <h4 className="header__logo-text">Grit</h4>
            </div>

            <nav className="header__nav">
                <Link to="/the-reality" className="header__nav-link">The Reality</Link>
                <Link to="/the-wall" className="header__nav-link">The Wall</Link>
                <Link to="/dashboard" className="header__nav-link">Dashboard</Link>
                <Link to={(e) => e.prevenDefault()} className="header__nav-cta">Get Gritted <i className="fi fi-rr-arrow-up-right cta__icon"></i></Link>
            </nav>
        </header>
    )
}

export default Header;