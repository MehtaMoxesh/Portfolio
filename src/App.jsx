import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import MyJourney from './components/MyJourney'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TechnicalSkills from './components/TechnicalSkills'

function App() {

  return (
   <div>
    <Navbar />
    <Home />
    <About />
    <TechnicalSkills />
    <MyJourney />
    <Projects />
    <Contact />
    <Footer />
   </div>
  )
}

export default App
