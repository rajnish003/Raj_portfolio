import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Importing icons for hamburger menu

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white text-[#ff9f05] font-bold py-3">
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between items-center py-4 relative">
          {/* Logo or Brand Name */}
          <div className=""></div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button onClick={() => setOpen(!open)} className="text-5xl text-gray-700 mr-5">
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 items-center">
            <li>
              <NavLink
              
                to="/"
                className={({ isActive }) =>
                  `${isActive ? 'bg-[#ff9f05] text-gray-700' : 'hover:bg-[#ff9f05] hover:text-gray-700'}
                  px-6 py-3 border-2 border-[#ff9f05] text-gray-700 rounded-full shadow-md font-bold 
                  transition-colors duration-300 ease-in-out text-center `
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? 'bg-[#ff9f05] text-gray-700' : 'hover:bg-[#ff9f05] hover:text-gray-700'}
                  px-6 py-3 border-2 border-[#ff9f05] text-gray-700 rounded-full shadow-md font-bold 
                  transition-colors duration-300 ease-in-out text-center`
                }
              >
                ABOUT
              </NavLink> 
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `${isActive ? 'bg-[#ff9f05] text-gray-700' : 'hover:bg-[#ff9f05] hover:text-gray-700'}
                  px-6 py-3 border-2 border-[#ff9f05] text-gray-700 rounded-full shadow-md font-bold 
                  transition-colors duration-300 ease-in-out text-center`
                }
              >
                PORTFOLIO
              
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? 'bg-[#ff9f05] text-gray-700' : 'hover:bg-[#ff9f05] hover:text-gray-700'}
                  px-6 py-3 border-2 border-[#ff9f05] text-gray-700 rounded-full shadow-md font-bold 
                  transition-colors duration-300 ease-in-out text-center`
                }
              >
                  CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `${isActive ? 'bg-[#ff9f05] text-gray-700' : 'hover:bg-[#ff9f05] hover:text-gray-700'}
                  px-6 py-3 border-2 border-[#ff9f05] text-gray-700 rounded-full shadow-md font-bold 
                  transition-colors duration-300 ease-in-out text-center`
                }
              >
                BLOG
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className={`fixed inset-0 bg-white text-[#ff9f05] transition-transform duration-300 ease-in-out transform ${open ? 'translate-x-0' : 'translate-x-full'} lg:hidden z-50`}>
            <div className="flex justify-end p-4 ">
              <button onClick={() => setOpen(false)} className="text-5xl text-gray-700 mr-3">
                <HiX />
              </button>
            </div>
            <ul className="flex flex-col items-start space-y-12 mt-12 mx-4">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? 'bg-[#ff9f05] text-gray-700' : 'hover:bg-[#ff9f05] hover:text-gray-700'}
                    px-10 py-3 border-2 border-[#ff9f05] text-gray-700 rounded-full shadow-md font-bold 
                    transition-colors duration-300 ease-in-out text-center mt-3`
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? 'bg-[#ff9f05] text-gray-700' : 'hover:bg-[#ff9f05] hover:text-gray-700'}
                    px-10 py-3 border-2 border-[#ff9f05] text-gray-700 rounded-full shadow-md font-bold 
                    transition-colors duration-300 ease-in-out text-center mt-3`
                  }
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? 'bg-[#ff9f05] text-gray-700' : 'hover:bg-[#ff9f05] hover:text-gray-700'}
                    px-8 py-3 border-2 border-[#ff9f05] text-gray-700 rounded-full shadow-md font-bold 
                    transition-colors duration-300 ease-in-out text-center`
                  }
                >
                  CONTACT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? 'bg-[#ff9f05] text-gray-700' : 'hover:bg-[#ff9f05] hover:text-gray-700'}
                    px-6 py-3 border-2 border-[#ff9f05] text-gray-700 rounded-full shadow-md font-bold 
                    transition-colors duration-300 ease-in-out text-center`
                  }
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${isActive ? 'bg-[#ff9f05] text-gray-700' : 'hover:bg-[#ff9f05] hover:text-gray-700'}
                    px-12 py-3 border-2 border-[#ff9f05] text-gray-700 rounded-full shadow-md font-bold 
                    transition-colors duration-300 ease-in-out text-center`
                  }
                >
                  BLOG
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
