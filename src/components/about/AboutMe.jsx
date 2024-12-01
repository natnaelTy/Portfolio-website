import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { motion } from "motion/react";

function AboutMe(){
    return(
        <div id="about" className="flex items-center justify-center text-center flex-col ">
            <motion.div initial={{opacity: 0, y: 70}} 
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.3}}
                        viewport={{once: true}}  
                        className="mt-20 ">
                <h1 className="text-3xl font-semibold">About <span className="text-blue-600">Me</span></h1>
                <p className="text-gray-700 text-sm font-medium">Here is a little story to get know me</p>
            </motion.div>
        
            <motion.div initial={{opacity: 0, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.5}}
                        viewport={{once: true}} 
                        className="flex items-start justify-around mt-10 p-6 flex-wrap w-full">
                <div className="w-64 ">
                    <img src="./images/pic3.jpg" alt="me" className="w-full h-full"/>
                </div>
                <div className="flex items-center md:items-start justify-center flex-col mt-8 lg:mt-0">
                    <p className="text-center md:text-left text-gray-700 max-w-lg">I am a passionate ReactJS developer with a strong foundation in building dynamic and responsive web applications. I specialize in creating user-friendly interfaces that are both visually appealing and highly functional. My expertise includes working with modern JavaScript library like React, along with tools such as Redux, Tailwind CSS, and React Router to deliver seamless user experiences, Beyond coding, I enjoy collaborating with teams to transform ideas into reality and continuously learning new technologies to stay at the forefront of web development. Whether working on a startup or a large-scale project, I bring creativity, attention to detail, and i'm also a second year computer science student in Infolink universty hawassa</p>
                    <div className="flex gap-5 text-2xl cursor-pointer mt-5">
                         <a href="https://github.com/natnaelTy"> <FaGithub className="hover:text-gray-800"/></a>
                         <a href="https://www.linkedin.com/in/natnael-taye-718284309/"> <FaLinkedin className="hover:text-gray-800"/></a>
                         <a href="https://www.instagram.com/natnael.ty/?next=%2F"> <FiInstagram className="hover:text-gray-800"/></a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutMe;