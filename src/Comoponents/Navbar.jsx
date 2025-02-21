import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Bhawani</h1>
        <ul className="flex flex-col sm:flex-row gap-5 mt-4 sm:mt-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-lg text-red-700 font-bold' : 'text-lg hover:text-red-700 cursor-pointer'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-lg text-red-700 font-bold' : 'text-lg hover:text-red-700 cursor-pointer'
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? 'text-lg text-red-700 font-bold' : 'text-lg hover:text-red-700 cursor-pointer'
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/hobbies"
            className={({ isActive }) =>
              isActive ? 'text-lg text-red-700 font-bold' : 'text-lg hover:text-red-700 cursor-pointer'
            }
          >
            Hobbies & Interests
          </NavLink>
          <NavLink
            to="/passions"
            className={({ isActive }) =>
              isActive ? 'text-lg text-red-700 font-bold' : 'text-lg hover:text-red-700 cursor-pointer'
            }
          >
            Passions
          </NavLink>
          <NavLink
            to="/academic"
            className={({ isActive }) =>
              isActive ? 'text-lg text-red-700 font-bold' : 'text-lg hover:text-red-700 cursor-pointer'
            }
          >
            Academic Background
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? 'text-lg text-red-700 font-bold' : 'text-lg hover:text-red-700 cursor-pointer'
            }
          >
            Work Experience
          </NavLink>
          <NavLink
            to="/certifications"
            className={({ isActive }) =>
              isActive ? 'text-lg text-red-700 font-bold' : 'text-lg hover:text-red-700 cursor-pointer'
            }
          >
            Certifications
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
