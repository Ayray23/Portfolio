import { Link } from 'react-router-dom';
import Pics from '../assets/jj.jpg'
import { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { TiAdjustBrightness } from 'react-icons/ti';

const Home = ({ darkMode, toggleDarkMode }) => {

  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="flex flex-col dark:text-white dark:bg-black bg-gray-600 text-black ">

        <nav className={`fixed top-0 left-0 w-full z-50 ${isSticky ? "bg-blue-700" : "bg-blue-600"} text-white`}>

          <div className="container justify-between mx-auto px-4 py-3 flex items-center">

            <Link to="/" className="text-2xl font-bold">Add Your Name Here</Link>

            <ul className="hidden gap-4 p-4 md:flex">
              <li><a href="/">Home</a></li>
              <li><a href="#aboutme">About Me</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <button className="hidden md:block" onClick={toggleDarkMode}>
              {darkMode ? <TiAdjustBrightness size={20} /> : <FaMoon size={20} />}
            </button>

            <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</button>
          </div>
        </nav>

        <div className='relative dark:bg-black bg-gray-400 min-h-[550px] flex items-center justify-center pt-32'>
          <section className='flex flex-col md:flex-row items-center w-full px-4 md:px-52 pb-24 z-10'>
            <img src={Pics} className='h-[350px] w-[300px] object-cover rounded-lg' />

            <div className='text-white flex-1 md:text-left mt-10 md:mt-0 md:ml-10'>
              <h1 className='text-5xl font-bold mb-4'>Hi, I'm Add Your Name Here</h1>
              <p className='text-lg mb-6'>
                A professional frontend developer based in Nigeria with over 5 years of experience building scalable web applications.
              </p>
              <a href="#contact">
                <button className="text-white border-2 hover:bg-blue-900 rounded-full px-6 py-2">
                  Contact
                </button>
              </a>
            </div>
          </section>
        </div>

      </main>
    </div>
  );
};

export default Home;