import "./style.css";
import icons from './TechStack.json';

function TechStack(){

    return(
    <div className="text-center flex items-center justify-center flex-col">
      {/* Tech stack */}
       <div className="relative p-1 mb-10 mt-20">
          <h1 className="text-2xl text-gray-900 lg:text-3xl font-medium dark:text-gray-100">Tech Stack</h1>
         <div className="underlinebg">
             {/* before psudeo class */}
         </div>
       </div>
            <div className="flex gap-10 mb-20 flex-wrap p-4 max-w-[600px] w-full items-center justify-center">
                {icons && icons.length ?
                 icons.map(iconList => (
                    <div key={iconList.id} className="w-12 h-12 logo dark:bg-gray-900">
                        <img src={iconList.logos} alt="images" className="w-full h-full obeject-cover"/>
                    </div>
                 ))
                 : null}
            </div>
        </div>
    )
}

export default TechStack;