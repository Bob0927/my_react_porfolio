import './Navbar.css';

const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'otherwebs', label: 'Other Webs' },
];

function Navbar({ currentPage, onNavigate, onToggleMenu }) {
    return (
        <nav className="portfolio-nav" aria-label="Site navigation">
            <div className="portfolio-nav__left">
                {onToggleMenu ? (
                    <button
                        className="portfolio-nav__menu"
                        onClick={onToggleMenu}
                        type="button"
                        aria-label="Open menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                ) : null}

                <button
                    className="portfolio-nav__brand"
                    onClick={() => onNavigate('home')}
                    type="button"
                >
                    Wei Wang
                </button>
            </div>

            <div className="portfolio-nav__tabs">
                {tabs.map((tab) => (
                    <button
                        className={
                            currentPage === tab.id
                                ? 'portfolio-nav__tab is-active'
                                : 'portfolio-nav__tab'
                        }
                        key={tab.id}
                        onClick={() => onNavigate(tab.id)}
                        type="button"
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
