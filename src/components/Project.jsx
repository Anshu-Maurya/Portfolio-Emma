import {motion} from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { projects } from '../assets/assets';
import ProjectCard from './ProjectCard';

function Project(){
    return(

       <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6,ease:'easeOut'}}
        viewport={{once:true}}
        id='project'
        className="py-20 bg-neutral-600"
       >
        <div className="container px-6 max-auto text-center">
            <h1 className="text-2xl font-bold mb-3  text-center">My
                <span className="text-purple-700">Project</span>
            </h1>
            <p className="text-gray-400 mb-16  text-center max-w-2xl max-auto">My works on the projects</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl max-auto">
                {/* project card */}
                {
                    projects.map((project,index)=>(
                       <ProjectCard key={index} {...project}/>
                    ))
                }

            </div>
            <div className="text-center mt-12">
                <a href="#" className="inline-flex items-center px-6 py-3 border border-purple-700 rounded-lg font-medium hover:bg-purple-800 transition-duration-300">
                    <span>View More Projects</span>
                    <FaArrowRight className="ml-2"/>
                </a>

            </div>
        </div>

         
       </motion.div>
    );
}
export default Project