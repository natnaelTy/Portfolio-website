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
                        className="mt-20 dark:bg-gray-">
                <h1 className="text-3xl font-semibold dark:text-gray-100">About <span className="text-blue-600">Me</span></h1>
                <p className="text-gray-700 text-sm font-medium dark:text-gray-400">Here is a little story to get know me</p>
            </motion.div>
        
            <motion.div initial={{opacity: 0, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.5}}
                        viewport={{once: true}} 
                        className="flex items-start justify-around mt-10 p-4 flex-wrap w-full">
                <div className="w-64 ">
                    <img src="./images/typing.png" alt="me" className="w-full h-full"/>
                </div>
                <div className="flex items-center md:items-start justify-center flex-col mt-8 lg:mt-0">
                    <p className="text-center md:text-left text-gray-700 max-w-lg dark:text-gray-400"> Specialize in building modern, responsive web applications using tools like React, Next.js, Node.js, and MongoDB. From creating intuitive user interfaces to designing robust APIs, I enjoy bringing ideas to life through clean, scalable code. I thrive in collaborative environments, continuously learning and adapting to new technologies to deliver efficient and impactful solutions. Whether working on a startup or a large-scale project, I bring creativity, attention to detail, and i'm pursuing my bachelor degree in computer science at Infolink University Hawassa</p>
                    <div className="flex gap-5 text-2xl cursor-pointer mt-5 dark:text-gray-500">
                         <a href="https://github.com/natnaelTy"> <FaGithub className="hover:text-gray-700"/></a>
                         <a href="https://www.linkedin.com/in/natnael-taye-718284309/"> <FaLinkedin className="hover:text-gray-700"/></a>
                         <a href="https://www.instagram.com/natnael.ty/?next=%2F"> <FiInstagram className="hover:text-gray-700"/></a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutMe;