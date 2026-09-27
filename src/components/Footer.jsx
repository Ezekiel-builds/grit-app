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
                <a href="#" className="header__nav-link">
                The Reality
                </a>
                <a href="#" className="header__nav-link">
                The Wall
                </a>
                <a href="#" className="header__nav-link">
                Dashboard
                </a>
        </div>
    </footer>
  );
}

export default Footer;
