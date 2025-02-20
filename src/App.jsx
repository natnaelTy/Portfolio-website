
import './index.css'
import Home from './components/home/Home';
import AboutMe from './components/about/AboutMe';
import Project from './components/project/Project';
import TechStack from './components/techstack/TechStack';
import Contact from './components/contact/Contact';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';


function App() {

  return (   
    <>
    <div className='dark:bg-gray-950'>
     <Home />
     <AboutMe />
     <TechStack />
     <Project />
     <Contact />
     </div>
    </>
  )
}

export default App
