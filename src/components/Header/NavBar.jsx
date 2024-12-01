import { RiMenu5Fill } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import './style.css';
import {motion} from "motion/react";


function NavBar(){

    const [showMenu, setShowMenu] = useState(false);
    const [showNav, setShowNav] = useState(false);

    function handleToggleMenu(){
        setShowMenu(!showMenu);
    }

  
    useEffect(() => {

        function handleNavShow(){
            if(window.scrollY >= 60){
                setShowNav(true);
               }
               else{
                setShowNav(false);
               }
        }
     
       
       window.addEventListener('scroll', handleNavShow);

       return () => {
        window.removeEventListener('scroll', handleNavShow);
       }
       
    },[])
    function Links(){
        return(
            <>
              <li className="hover:text-blue-700 font-medium transition-all duration-100 ease-in-out"><a href="#home">Home</a></li>
              <li className="hover:text-blue-700 font-medium transition-all duration-100 ease-in-out"><a href="#about">About</a></li>
              <li className="hover:text-blue-700 font-medium transition-all duration-100 ease-in-out"><a href="#projects">Projects</a></li>
              <li className="hover:text-blue-700 font-medium transition-all duration-100 ease-in-out"><a href="#contact">Contact</a></li>
          </>
        )
    }
 
    return(
        <div>
               <nav className={showNav ? 'navbar active' : "navbar"}>
                   <h1 className="text-2xl">Nt</h1>
                     <ul className="gap-6 hidden md:flex">
                       <Links />
                    </ul>
                       <button onClick={handleToggleMenu} className="flex md:hidden text-3xl absolute top-0 p-4 right-0 z-40">
                         {showMenu ?  <LiaTimesSolid/> : <RiMenu5Fill/> }
                   </button>

                   {/* side nav menu */}
                   {
                    showMenu ? 
                    <motion.div initial={{x: 150}} 
                                whileInView={{x: 0}}
                                exit={{x: 0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}} 
                                className="lg:hidden flex flex-col items-center justify-center shadow-lg w-3/4 h-screen absolute top-0 z-10 right-0 bg-white">
                        <ul onClick={handleToggleMenu} className="flex flex-col gap-8 text-center">
                           <Links />
                        </ul>
                    </motion.div>
                    : null
                   }
             </nav>
           
    </div>
    )
}

export default NavBar;