import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { PiPentagramBold } from "react-icons/pi";
import { Link,NavLink } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoLogoAndroid } from "react-icons/io";
import Logo from '../assets/1 (2).png';
import Pics from '../assets/Raymond.jpg'
import Weather from '../assets/weather.png'
import { BsArrowBarRight } from 'react-icons/bs'
import { useEffect,useState } from 'react'
import House from '../assets/house.jpg'
import Fruit from '../assets/Fruit.jpg'
 import { BiArrowFromRight } from 'react-icons/bi';
 import { FaMoon } from "react-icons/fa";
import { TiAdjustBrightness } from 'react-icons/ti';
const Home = () => {
        const [darkMode, setDarkMode] = useState(false);
        const [isSticky, setIsSticky] = useState(false);
        const [menuOpen, setMenuOpen] = useState(false);


    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    };
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
      <main className="flex min-h-screen flex-col dark:text-white bg-amber-100 text-black  dark:bg-black">
      <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        isSticky ? "bg-blue-700 text-black" : "bg-blue-600 text-white"
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
            <NavLink to='/section'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/'>Service</NavLink>
          </li>
        </ul>
        <button 
          className=" h-1 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
          onClick={toggleDarkMode}
          >
          {darkMode ? 
            <TiAdjustBrightness size={24} className="text-white dark:text-black" /> 
            : 
            <FaMoon size={24} className="text-white dark:text-black" />
          }
        </button> 
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
        {menuOpen && (
          <div className="absolute top-0 right-0 bg-blue-600 w-1/4 h-screen text-black p-6">
            <ul className="flex flex-col cursor-pointer  space-y-4">
              <div className="flex justify-between items-center ">
              <li className="" onClick={() => setMenuOpen(false)}  >
                Home</li>
              <h1 className="cursor-pointer" onClick={() => setMenuOpen(false)} >
                X</h1>
              
              </div>
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
            <button 
          className=" h-1 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
          onClick={toggleDarkMode}
          >
          {darkMode ? 
            <TiAdjustBrightness size={24} className="text-white dark:text-black" /> 
            : 
            <FaMoon size={24} className="text-white dark:text-black" />
          }
          </button>
          </div>
        )}
        

      </div>
    </nav>

          <>
            <section className="pt-16 my-1 h-screen flex flex-col items-center justify-center dark:text-white text-black bg-blue-600 dark:bg-black  ">
              <img src={Pics} alt="" className="mt-12 h-[250px] w-[250px] rounded-full shadow-lg mb-4 transition-all duration-500 transform hover:scale-105" />
              <h2 className="text-3xl font-bold font-serif md:text-5xl mt-4 text-center animate-fadeIn">Hi! I am Raymond</h2>
              <h4 className="text-xl font-semibold mt-2 text-center">
                I am a frontend developer based in Osun state, Nigeria with ___ years of experience.
              </h4>
              <div className="flex gap-10 my-8">
                <button className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-800 hover:scale-105 transition-all duration-300">
                  Contact Me
                </button>
                <button className="px-4 py-2 bg-blue-900 text-white font-semibold rounded-full shadow-lg hover:bg-blue-950 hover:scale-105 transition-all duration-300">
                  My Resume
                </button>
              </div>
            </section>
          
          </>

        <>
        <section className='flex md:m-12 md:flex-row flex-col text-black dark:text-white'>
                <div className='md:w-[40%] mt-20'>
                  { <img src={Pics} alt="" /> }
                </div>
                <div className='md:mt-0 mt-8 md:w-[60%] flex flex-col  justify-center items-center'>
                  <h5 className='text-xl'>
                    Introduction
                  </h5>
                  <h1 className='text-3xl'>
                    About me
                  </h1>
                  <p className='mt-8  md:mx-16 font-serif font-medium'>
                    I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:ml-16 sm:-ml-14 flex-col md:items-center mt-6  md:justify-center gap-24'>
                    <div className='border-2 h-[200px]  ml-4  hover:shadow-lg hover:shadow-white text-center  p-4 w-full md:w-[150px]  dark:border-white border-black '>
                      { <PiPentagramBold className='text-3xl md:ml-10 ml-24' /> }
                      <h2 className='text-2xl'>Languages</h2>
                      <p className=''>HTML,CSS, <md:br />JavaScript, <br />React Js, <md:br />Vite</p>
                    </div>
                    <div className='border-2 hover:shadow-lg hover:shadow-white  h-[200px] text-center p-4 ml-4 w-full  md:w-[150px] border-black dark:border-white '>
                      { <FaGraduationCap className='text-3xl md:ml-10 ml-28 ' /> }
                      <h2 className='text-2xl'>Education</h2>
                      <p>B.Tech in <md:br /> Software <md:br /> Engineering</p>
                    </div>
                    <div className='border-2 h-[200px] hover:shadow-lg hover:shadow-white  text-center p-4 ml-4 w-full md:w-[150px] border-black dark:border-white '>
                      { <FaBriefcase className='text-3xl md:ml-10 ml-24' /> }
                      <h2 className='text-2xl mb-1'>Project</h2>
                      <p>Built more than <md:br /> 2 projects </p>
                    </div>
                  </div>
                <div>

                </div>
                </div>
        </section>

        <section className='flex mt-16 flex-col'>
          <div className="flex flex-col  text-black dark:text-white items-center">
            <h2 className="text-xl">
              What i offer
            </h2>
            <h1 className="text-3xl font-bold">
              My services
            </h1>
            <p>
              I am a frontend developer from Nigeria with ___ years of experience
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pr-8 dark:text-white justify-center gap-4 ml-12 md:ml-4 mt-10 ">
            <div className='border-2 hover:bg-blue-700 border-black dark:border-white h-[250px] hover:text-white hover:shadow-2xl hover:shadow-blue-900  text-center  p-4 w-full md:w-[250px] '>
                { <AiOutlineGlobal  className='text-3xl my-4 mx-20 md:mx-24 '/> }
                <h2 className='text-2xl'>Web design</h2>
                <p className=''>Web development is the process of building,programming ...</p>
                <h2 className="flex  justify-center items-center pt-4 gap-2 ">
                Read more
                { < FaLongArrowAltRight className='text-4xl pl-2' /> }
                </h2>
            </div>
            <div className='border-2 hover:bg-blue-700 border-black dark:border-white h-[250px] hover:text-white hover:shadow-2xl hover:shadow-blue-900  text-center  p-4 w-full md:w-[250px] '>
                { <IoLogoAndroid  className='text-3xl my-4 mx-20 md:mx-24 '/> }
                <h2 className='text-2xl'>Mobile Appps</h2>
                <p className=''>Web development is the process of building,programming ...</p>
                <h2 className="flex justify-center items-center pt-4 gap-2 ">
                Read more
                { < FaLongArrowAltRight className='text-4xl pl-2' /> }
                </h2>
            </div>
            <div className='border-2 hover:bg-blue-700 border-black dark:border-white h-[250px] hover:text-white hover:shadow-2xl hover:shadow-blue-900  text-center  p-4 w-full md:w-[250px] '>
                { <AiOutlineGlobal  className='text-3xl my-4 mx-20 md:mx-24 '/> }
                <h2 className='text-2xl'>Web design</h2>
                <p className=''>Web development is the process of building,programming ...</p>
                <h2 className="flex  justify-center items-center pt-4 gap-2 ">
                Read more
                { < FaLongArrowAltRight className='text-4xl pl-2' /> }
                </h2>
            </div>
            <div className='border-2 hover:bg-blue-700 border-black dark:border-white h-[250px] hover:text-white hover:shadow-2xl hover:shadow-blue-900  text-center  p-4 w-full md:w-[250px] '>
                { <IoLogoAndroid  className='text-3xl my-4 mx-20  md:mx-24 '/> }
                <h2 className='text-2xl'>Mobile Appps</h2>
                <p className=''>Web development is the process of building,programming ...</p>
                <h2 className="flex justify-center  items-center pt-4 gap-2 ">
                Read more
                { < FaLongArrowAltRight className='text-4xl pl-2' /> }
                </h2>
            </div>
          
          </div>
        </section>


        <section>
        <div className=" text-black mt-16 dark:text-white min-h-screen flex flex-col justify-center items-center">
      
      <h1 className="text-4xl font-bold mb-4">My portfolio</h1>
      <h2 className="text-2xl font-semibold mb-6">My latest work</h2>
      <p className="text-lg text-center mb-12 max-w-lg">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-1 mx-16 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      <div className="bg-white dark:bg-neutral-800 text-black dark:text-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
          <img src={Weather} alt="Frontend project" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Web based app</h3>
            <p className="text-gray-700 mb-4">Web App</p>
            <button className='border-2 flex items-center gap-2 rounded-md p-2 bg-blue-700 hover:bg-blue-800 hover:text-white mt-7'>
              <a 
              href="https://weather-app-raymond-s-projects-ac2c129d.vercel.app/">
                Read More
              </a>
          <BsArrowBarRight className='text-2xl'/>
          </button>
          </div>
        </div>

        
        <div className="bg-white dark:bg-neutral-800 text-black dark:text-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
          <img src={Fruit} alt="Geo based app" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Frontend project </h3>
            <p className="text-gray-700 mb-4">Web Design</p>
            <button className='border-2 flex items-center gap-2 rounded-md p-2 bg-blue-700 hover:bg-blue-800 hover:text-white mt-7'>
              <a href="https://food-page-eta.vercel.app/">
              Read More
              </a>
          <BsArrowBarRight className='text-2xl'/>
          </button>
          </div>
        </div>

        
        <div className="bg-white dark:bg-neutral-800 text-black dark:text-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
          <img src={House} alt="Photography site" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Tailwind css Project</h3>
            <p className="text-gray-700 mb-4">Web Design</p>
            <button className='border-2 flex items-center gap-2 rounded-md p-2 bg-blue-700 hover:bg-blue-800 hover:text-white mt-7'>
              <a href="https://ayray23.github.io/landing_page_tailwindcss/">
              Read More
              </a>
              
          <BsArrowBarRight className='text-2xl'/>
          </button>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 text-black dark:text-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
          <img src={Logo} alt="UI/UX designing" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">UI/UX designing</h3>
            <p className="text-gray-700 mb-4">UI/UX Design</p>
            <button className='border-2 flex items-center gap-2 rounded-md p-2 bg-blue-700 hover:bg-blue-800 hover:text-white mt-7'>Read More
          <BsArrowBarRight className='text-2xl'/>
          </button>
          </div>
        </div>
      </div>
    </div>

        </section>


      
        </>
      </main>
    </div>
  );
  }

export default Home

