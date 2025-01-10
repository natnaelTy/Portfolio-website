import "./style.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

function Contact(){

    return(
        <div id="contact" className="flex justify-center items-center flex-col text-center mt-20">
            <div className="p-6">
                <h1 className="text-3xl md:text-3xl font-medium">Get in <span className="text-blue-600">Touch</span></h1>
                <p className="text-gray-700 text-sm font-medium max-w-lg mt-2">Let's discuss your project needs and start collaborating on something amazing!</p>
            </div>
        
             <div className="flex items-center gap-4 justify-between p-4 md:px-8 mt-10 mb-10 borderline text-lg md:text-xl">
                 <p className="flex gap-1 items-center"><MdEmail/> natitaye316@gmail.com</p>
                 <p className="flex gap-1 items-center"><a href="https://www.linkedin.com/in/natnael-taye-718284309/"><FaLinkedin/> </a>Linkedln</p>
             </div>
             <div className="w-full p-10 flex items-end justify-end cursor-pointer">
                  <a href="#home"><IoIosArrowUp className="border-2 border-gray-900 text-gray-900 p-1 text-4xl rounded-sm "/></a>
             </div>
            
             <div className="p-10 text-gray-700 text-center font-medium text-sm">
                <h1>Copyright &copy; 2024 Natnael Taye. All Rights Reserved</h1>
             </div>
        </div>
    )
}

export default Contact;