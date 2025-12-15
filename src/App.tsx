import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import './App.css'

function App() {
    return (
        <div className="portfolio">
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
