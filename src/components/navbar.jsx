import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black backdrop-blur-sm px-8 shadow-lg z-50">
      <div className="container mx-auto h-16 flex justify-between items-center">
        <div>
          <a href="#" className="text-3xl font-bold text-white">
            Emma
            <span className="text-purple-700">Watson</span>
            <div className="w-4 h-4 rounded-full bg-purple-800"></div>
          </a>
        </div>

        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>Home</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#About"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>About</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#skills"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>Skill</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#Project"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>Project</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#Experiance"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>Experiance</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span>Contact</span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile Version - moved inside container for proper alignment */}
        <div className="md:hidden">
          {showMenu ? (
            <FaTimes
              onClick={() => setShowMenu(false)}
              className="text-2xl text-white cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl text-white cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* mobile menu*/}
      {showMenu && (
        <div className="md:hidden fixed top-40  right-0 bottom-0  p-4 flex flex-col space-y-4 text-center justify-center z-40">
          <a
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span className="border-b-2 group-hover:border-purple-800 border-transparent">Home</span>
            
          </a>

          <a
            href="#About"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
             <span className="border-b-2 group-hover:border-purple-800 border-transparent">About</span>
          </a>

          <a
            href="#skills"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span className="border-b-2 group-hover:border-purple-800 border-transparent">Skill</span>
          </a>

          <a
            href="#Project"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span className="border-b-2 group-hover:border-purple-800 border-transparent">Project</span>
          </a>

          <a
            href="#Experiance"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
             <span className="border-b-2 group-hover:border-purple-800 border-transparent">Experiance</span>
          </a>

          <a
            href="#contact"
            className="relative text-white/80 transition duration-300 hover:text-purple-700 group "
          >
            <span className="border-b-2 group-hover:border-purple-800 border-transparent">Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
