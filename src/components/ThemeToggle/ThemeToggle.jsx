import { useEffect, useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";


const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        if(savedTheme === 'dark'){
            setIsDarkMode(true);
        }
        else if(savedTheme === 'light'){
           setIsDarkMode(false);
        }
        else if(window.matchMedia('(prefers-color-scheme: dark').matches){
            setIsDarkMode(true);
        }
    },[]);

    useEffect(() => {
      if(isDarkMode){
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      else{
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    },[isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (  
      <button onClick={toggleTheme} className="text-xl dark:text-gray-100">
        {isDarkMode ? <IoMoonSharp/> : <IoSunnyOutline/>}
      </button>
    );
}
 
export default ThemeToggle;