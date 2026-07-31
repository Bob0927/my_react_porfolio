import { useState } from 'react';
import './Navbar.css';

const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="portfolio-nav" aria-label="Site navigation">
            <div className="portfolio-nav__left">
                <a
                    className="portfolio-nav__brand"
                    href="#top"
                    onClick={handleNavClick}
                >
                    Wei Wang
                </a>

                <button
                    className={`portfolio-nav__menu ${menuOpen ? 'is-open' : ''}`}
                    type="button"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <div className="portfolio-nav__tabs">
                {tabs.map((tab) => (
                    <a
                        className="portfolio-nav__tab"
                        key={tab.id}
                        href={`#${tab.id}`}
                        onClick={handleNavClick}
                    >
                        {tab.label}
                    </a>
                ))}
            </div>

            {menuOpen ? (
                <div className="portfolio-nav__mobile">
                    {tabs.map((tab) => (
                        <a
                            className="portfolio-nav__tab"
                            key={`mobile-${tab.id}`}
                            href={`#${tab.id}`}
                            onClick={handleNavClick}
                        >
                            {tab.label}
                        </a>
                    ))}
                </div>
            ) : null}
        </nav>
    );
}

export default Navbar;
