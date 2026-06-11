import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import './App.css'

function App() {
    return (
        <div className="portfolio">
            <Header />
            <Home />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
