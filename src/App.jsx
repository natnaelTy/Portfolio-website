
import './index.css'
import NavBar from './components/Header/NavBar';
import Home from './components/home/Home';
import AboutMe from './components/about/AboutMe';
import Project from './components/project/Project';
import TechStack from './components/techstack/TechStack';
import Contact from './components/contact/Contact';

function App() {


  return (
    <>
     <NavBar />
     <Home />
     <AboutMe />
     <TechStack />
     <Project />
     <Contact />
    </>
  )
}

export default App
