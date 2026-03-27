import './Home.css';

function Home({ onNavigate }) {
    return (
        <div className="home">
            <section className="hero">
                <img
                    src="/profile-photo.jpg"
                    alt="Wei Wang profile"
                    className="profile-img"
                />

                <h1>Hi, I'm Wei Wang</h1>
                <h2>Master of IT @ UQ</h2>

                <p>
                    I am passionate about web development, AI, and cloud
                    technologies. I build modern websites using React and
                    explore AWS solutions.
                </p>

                <button onClick={() => onNavigate('about')} type="button">
                    View My Work
                </button>
            </section>
        </div>
    );
}

export default Home;
