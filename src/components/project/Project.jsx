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
                  <h1 className="text-3xl lg:text-4xl font-medium">Projects</h1>
                  <p className="text-gray-700 text-sm font-medium">Browse my recent work.</p>
             </motion.div>

             <motion.div initial={{opacity: 0, y: 150}}
                         whileInView={{opacity: 1, y: 0}}
                         transition={{duration: 1.6}}
                         viewport={{once: true}} 
                         className="flex items-center justify-around flex-wrap ">
                    {
                        projects && projects.length ? 
                        projects.map((projectItem) => (
                   <div className="flex items-start justify-around w-full p-8 mt-6 flex-wrap">
                      <div className="w-96 h-48 relative bg-black">
                        <img src={projectItem.images} alt="Metron" className="object-cover w-full h-full"/>
                     </div>
                     <div className="flex flex-col items-center lg:items-start justify-center gap-5 mt-4 lg:mt-0">
                         <h1 className="text-gray-900 text-xl font-medium flex items-center gap-3">{projectItem.title}
                         <a href="https://github.com/natnaelTy"><FaGithub className="text-2xl cursor-pointer hover:text-black text-gray-900"/></a>
                         </h1>
                         <p className="max-w-lg text-center lg:text-left text-gray-700">{projectItem.description}</p>
                         <button className="bg-gray-900 text-white flex items-center gap-2 hover:bg-black justif-end rounded-md py-2 px-4">Preview <BsBoxArrowUpRight/></button>
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