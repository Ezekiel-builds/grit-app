import  GritLogo  from '../assets/Grit_logo.png';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={GritLogo} alt='Grit logo'/>

                <h4 className="header__logo-text">Grit</h4>
            </div>

            <nav className="header__nav">
                <a href="#" className="header__nav-link">The Reality</a>
                <a href="#" className="header__nav-link">The Wall</a>
                <a href="#" className="header__nav-link">Dashboard</a>
                <a href="#" className="header__nav-cta">Get Gritted <i className="fi fi-rr-arrow-up-right cta__icon"></i></a>
            </nav>
        </header>
    )
}

export default Header;