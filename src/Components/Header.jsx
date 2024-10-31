import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TiAdjustBrightness } from 'react-icons/ti';
import { FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Navbar links
  const NavbarLinks = [
    { name: 'Home', link: '/' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'My Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle scroll for sticky navbar
  const handleScroll = () => {
    setIsSticky(window.scrollY > 50);
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${isSticky ? "bg-blue-700 text-black" : "bg-blue-600 text-white"}`}
      style={{ transition: "background-color 0.3s" }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Portfolio</Link>

        {/* Hamburger Icon for Small Screens */}
        <button
          className="md:hidden text-3xl"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex w-full md:w-auto font-medium flex-col md:flex-row items-center text-base text-gray-300 justify-center`}
        >
          {NavbarLinks.map((e, index) => (
            <NavLink
              key={index}
              to={e.link}
              className="mr-7 hover:text-white mt-2 md:mt-0"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {e.name}
            </NavLink>
          ))}
          <button
            type="button"
            className="text-gray-900 mt-4 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center md:mt-0 md:ml-4"
          >
            Contact
          </button>
        </nav>

        {/* Dark Mode Toggle Button */}
        <button
          className="hidden md:block rounded-full text-white dark:text-black font-semibold"
          onClick={toggleDarkMode}
        >
          {darkMode ? 
            <TiAdjustBrightness size={20} /> : 
            <FaMoon size={20} />
          }
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-0 right-0 bg-blue-500 w-1/4 h-fit text-black p-6">
            <ul className="flex flex-col cursor-pointer space-y-4">
              {NavbarLinks.map((e, index) => (
                <li key={index} onClick={() => setMenuOpen(false)}>
                  <NavLink to={e.link}>{e.name}</NavLink>
                </li>
              ))}
              <button 
                className="pt-4 rounded-full text-white dark:text-black font-semibold"
                onClick={toggleDarkMode}
              >
                {darkMode ? 
                  <TiAdjustBrightness size={24} /> : 
                  <FaMoon size={24} />
                }
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
