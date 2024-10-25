// import { Link,NavLink } from 'react-router-dom';
// import { BiArrowFromRight } from 'react-icons/bi';
// import { TiAdjustBrightness } from 'react-icons/ti';
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Links for the navbar
  const links = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ];

  // Handle scroll to make the navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        isSticky ? "bg-slate-700 text-black" : "bg-transparent text-white"
      }`}
      style={{ transition: "background-color 0.3s" }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Raymond</h1>

       
        <ul className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="hover:text-blue-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Menu button for mobile view */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-0 right-0 bg-slate-700 w-3/4 h-screen text-black p-6">
            <ul className="flex flex-col space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="hover:text-blue-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

