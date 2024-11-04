import { Link,NavLink } from 'react-router-dom';
import Contactme from './Contactme'
import Pics from '../assets/Raymond.jpg'
import { useEffect,useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { TiAdjustBrightness } from 'react-icons/ti';
const Home = ({darkMode, toggleDarkMode}) => {
        
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
    <div className={`${darkMode && "dark"}`}>
      <main className="flex flex-col dark:text-white dark:bg-black bg-gray-600 text-black ">
        <nav className={`fixed top-0 left-0 w-full z-50 ${
          isSticky ? "bg-blue-700 text-white" : "bg-blue-600 text-white"
        }`}
          style={{ transition: "background-color 0.3s" }}
        >
          <div className="container justify-between mx-auto px-4 py-3 flex  items-center">
              <Link to="/" className="text-2xl font-bold">Raymond</Link>
                <ul className="hidden gap-4 p-4  md:flex justify-center">
                  <li>
                    <a href="/">
                      Home
                    </a>
                    </li>
                  <li>
                    <a href="#aboutme">
                      About Me
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#service">
                      Service
                    </a>
                  </li>
                </ul>
                <button 
                  className="hidden md:block  rounded-full text-white dark:text-black font-semibold"
                  onClick={toggleDarkMode}
                  >
                  {darkMode ? 
                    <TiAdjustBrightness size={20} className="" /> 
                    : 
                    <FaMoon size={20} className="" />
                  }
                </button> 
                <button
                  className="md:hidden text-3xl"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  &#9776;
                </button>
              {menuOpen && (
                <div className="absolute top-14 right-0 bg-blue-500 w-1/4 h-fit text-black p-6">
                  <ul className="flex flex-col cursor-pointer  space-y-4">
                    <div className="flex justify-between items-center ">
                    <li className="" onClick={() => setMenuOpen(false)}  >
                      Home</li>
                    <h1 className="cursor-pointer text-2xl ml-4" onClick={() => setMenuOpen(false)} >
                      X</h1>
                    
                    </div>
                    <li onClick={() => setMenuOpen(false)}>
                      <a href="#aboutme">
                      About Me
                      </a> 
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                      <a href="#contact">
                      Contact
                      </a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                      <a href="#service">
                      Service
                      </a>
                    </li>
                  </ul>
                  <button 
                    className=" pt-4 rounded-full text-white dark:text-black font-semibold"
                    onClick={toggleDarkMode}
                    >
                    {darkMode ? 
                      <TiAdjustBrightness size={24} className=" " /> 
                      : 
                      <FaMoon size={24} className="" />
                    }
                  </button>
              </div>
            )}
          </div>
        </nav>

        <>
        <>
          <div className='relative dark:bg-black bg-gray-400  overflow-hidden min-h-[550px] sm:min-h-[500px] flex flex-col items-center'>
          
            <div className='md:h-[720px] h-[850px]  md:w-[1800px] w-[900px] bg-gradient-to-r absolute bg-blue-950 rounded-full transform  -top-20 -left-80 -right-40 rotate-45 z-0'>
            </div>
            
          
            <section className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 md:mt-0 mt-24 z-10'>
              <div data-aos='fade-up' className='flex-1 flex justify-center md:justify-start mt-0 md:mt-0'>
                <img src={Pics} alt="Hero Image" className='h-[300px] sm:h-[400px] md:h-[440px] w-[250px] sm:w-[360px] object-cover rounded-lg' />
              </div>
              <div data-aos='fade-up' className='text-white flex-1 md:text-left mt-10 md:mt-0'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>Hi, I'm Raymond</h1>
                <h4 data-aos='fade-up' data-aos-delay='300' className='text-base sm:text-lg md:text-lg  mb-6'>
                  I am a frontend developer based in Osun state, Nigeria with ___ years of experience.
                </h4>
                <a href="#contact">
                  <button type="button" className="text-white mt-4 border-2 hover:bg-blue-900 hover:shadow-2xl font-semibold rounded-full text-sm px-5 py-2.5 text-center">
                    Contact
                  </button>
                </a>
              </div>
            </section>
          </div>
        </>
        </>
      </main>
    </div>
  );
  }

export default Home

