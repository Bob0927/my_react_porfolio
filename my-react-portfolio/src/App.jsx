import Navbar from './components/Navbar';
import About from './components/About';
import Certificates from './components/Certificates';
import Projects from './components/Websites';
import Volunteer from './components/Volunteer';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <main className="about-page" id="top">
                <div className="about-content">
                    <About />
                    <Certificates />
                    <Projects />
                    <Volunteer />
                </div>
                <Footer />
            </main>
        </>
    );
}

export default App;
