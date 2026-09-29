import { Link } from 'react-router';
import GritLogo from "../assets/Grit_logo.png"

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__logo">
                <img src={GritLogo} alt="Grit logo" />

                <h4 className="footer__logo-text">Grit</h4>
        </div>

        <p className="footer__copyright-notice">
                &copy; {new Date().getFullYear()} Grit. All rights reserved.
        </p>

        <div className="footer__links">
                <Link to="/the-reality" className="header__nav-link">
                The Reality
                </Link>
                <Link to="/the-wall" className="header__nav-link">
                The Wall
                </Link>
                <Link to="/dashboard" className="header__nav-link">
                Dashboard
                </Link>
        </div>
    </footer>
  );
}

export default Footer;
