import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import projects from './Projects.json';
import { motion } from "motion/react";

function Project(){

    return(
        <div id="projects" className="text-center">
             <motion.div initial={{opacity: 0, y: 60}}
                         whileInView={{opacity: 1, y: 0}}
                         transition={{duration: 1.5}}
                         viewport={{once: true}}
                         className="py-16">
                  <h1 className="text-3xl lg:text-4xl font-medium dark:text-gray-100">Projects</h1>
                  <p className="text-gray-700 text-sm font-medium dark:text-gray-400">Browse my recent work.</p>
             </motion.div>

             <motion.div initial={{opacity: 0, y: 150}}
                         whileInView={{opacity: 1, y: 0}}
                         transition={{duration: 1.6}}
                         viewport={{once: true}} 
                         className="flex items-center justify-around flex-wrap gap-4 w-full">
                    {
                        projects && projects.length ? 
                        projects.map((projectItem, index) => (
                   <div className="flex items-start justify-around w-full p-4 mt-6 flex-wrap">
                      <div key={index} className="max-w-md relative">
                        <img src={projectItem.images} alt="Metron" className="object-cover w-full h-full"/>
                     </div>
                     <div className="flex flex-col items-center lg:items-start justify-center gap-5 mt-4 lg:mt-0">
                         <h1 className="text-gray-900 text-xl font-medium flex items-center gap-3 dark:text-gray-100">{projectItem.title}
                         <a href="https://github.com/natnaelTy"><FaGithub className="text-2xl cursor-pointer hover:text-black text-gray-900 dark:text-gray-400"/></a>
                         </h1>
                         <p className="max-w-lg text-center lg:text-left text-gray-700 dark:text-gray-400">{projectItem.description}</p>
                         <button className="bg-gray-900 text-white flex items-center gap-2 hover:bg-black justif-end rounded-md py-2 px-4 dark:hover:bg-gray-800"><a href={projectItem.button}>Preview </a><BsBoxArrowUpRight/></button>
                     </div>
                     </div>
                        ))
                        : null
                    }
             </motion.div>
             
        </div>
    )
}

export default Project;