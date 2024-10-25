 import { Link,NavLink } from 'react-router-dom';
// import { BiArrowFromRight } from 'react-icons/bi';
// import { TiAdjustBrightness } from 'react-icons/ti';
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        isSticky ? "bg-slate-700 text-black" : "bg-slate-600 text-white"
      }`}
      style={{ transition: "background-color 0.3s" }}
    >
      <div className="container justify-between mx-auto px-4 py-3 flex  items-center">
      <Link to="/" className="text-2xl font-bold">Raymond</Link>
        <ul className="hidden gap-4 border-2 p-4 rounded-full  md:flex justify-center">
          
          <li>Home</li>
          <li>
           <NavLink to='/'> Aboutus </NavLink>
          </li>
          <li>
            <NavLink to='/Contactme'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/Service'>Service</NavLink>
          </li>
        </ul> 
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
        {menuOpen && (
          <div className="absolute top-0 right-0 bg-slate-700 w-3/4 h-screen text-black p-6">
            <ul className="flex flex-col cursor-pointer  space-y-4">
              <div className="flex justify-between items-center ">
              <li className="" onClick={() => setMenuOpen(false)}  >
                home</li>
              <h1 className="cursor-pointer" onClick={() => setMenuOpen(false)} >
                X</h1>
              
              </div>
              {/* <link>  </link> */}
              <li onClick={() => setMenuOpen(false)}>
              <NavLink to='/'> Aboutus </NavLink>
                </li>
              <li onClick={() => setMenuOpen(false)}>
                <NavLink to='/Contactme'>Contact</NavLink>
                </li>
              <li onClick={() => setMenuOpen(false)}>
              <NavLink to='/Service'>Service</NavLink>
                
                </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

