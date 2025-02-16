import { GrSend } from "react-icons/gr";
import { BsMouse } from "react-icons/bs";
import './style.css'; 
import { motion } from "motion/react";

function Home(){

    return(
        <motion.div  initial={{opacity: 0, y: 60}} 
                     whileInView={{opacity: 1, y: 0}}
                     transition={{duration: 1.3}}
                     viewport={{once: true}} 
                     id="home">
            <div className="flex items-center justify-evenly gap-4 h-screen lg:mt-0 mt-16 flex-wrap-reverse p-4 ">
                <div className="flex items-center md:items-start flex-col gap-2 relative">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-semibold dark:text-gray-100">Natnael Taye 👋🏾</h1>
                    <p className="text-lg text-gray-900 md:text-2xl font-medium dark:text-gray-200">Front-End Reactjs Developer</p>
                    <p className="text-gray-700 md:text-left max-w-lg text-center font-medium dark:text-gray-400">I'm creative Reactjs developer based in Ethiopia, and i'm very passionate and dedicated to my work.</p>
                    <a href="#contact"><button className="font-semibold flex items-center justify-end gap-2 text-white bg-blue-600 hover:bg-blue-500 rounded-lg px-4 py-3 mt-6">Say Hello <GrSend style={{fontSize: '19px'}}/></button></a>
                </div>
                <div className="relative image-container">
                    <img src="./images/me.jpg" alt="natnael" className="object-cover w-full h-full dark:border-gray-800 image"/>
                </div>
            </div>
            {/* Scroll Mouse */}
           <a href="#about"><BsMouse className="hidden lg:flex mouse hover:text-gray-800 cursor-pointer dark:hover:text-gray-400 dark:text-gray-200"/> </a>
        </motion.div>
    )
}

export default Home;