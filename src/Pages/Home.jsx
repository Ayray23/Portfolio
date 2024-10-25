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
      <main className="flex min-h-screen flex-col p-12 dark:text-white text-black bg-white dark:bg-neutral-900">
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
          <div className="absolute top-0 right-0 bg-slate-700 w-1/4 h-screen text-black p-6">
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
          <section className='pt-16 flex dark:text-white text-black  flex-col items-center justify-center '>
        <img src={Pics} alt="" className='h-[250px] md:mt-12 mb-4 w-[250px] rounded-[50%]' />
        <h2>Hi! I am Raymond </h2>
        <h1 className='text-3xl font-bold font-serif md:text-4xl mt-4 text-center'>frontend web <br/>developer based in</h1>
        <h4 className='text-1xl font-semibold px-6'>
          I am a frontend developer from Osun state,Nigeria with ___ years of experience in multiple  
        </h4>
        <div className='flex gap-10'>
          <button className='border-2 flex items-center gap-2 rounded-md p-2 bg-slate-600 hover:bg-slate-800 mt-7'>Contact me
          <BsArrowBarRight className='text-2xl'/>
          </button>
          <button className='border-2 flex items-center gap-2 rounded-md p-2 bg-slate-600 hover:bg-slate-800 mt-7'>My resume
          <BsArrowBarRight className='text-2xl'/>
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
                  <p className='mt-8 mx-16 font-serif font-medium'>
                    I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                  </p>
                  <div className='flex md:flex-row flex-col md:items-center mt-6  md:justify-center gap-8'>
                    <div className='border-2 h-[200px] hover:shadow-lg hover:shadow-white text-center  p-4 w-[400px] md:w-[200px]  dark:border-white border-black '>
                      { <PiPentagramBold className='text-3xl md:ml-16 ml-40' /> }
                      <h2 className='text-2xl'>Languages</h2>
                      <p className=''>HTML,CSS, <md:br />JavaScript, <br />React Js, <md:br />Vite</p>
                    </div>
                    <div className='border-2 hover:shadow-lg hover:shadow-white  h-[200px] text-center p-4 w-[400px]  md:w-[200px] border-black dark:border-white '>
                      { <FaGraduationCap className='text-3xl md:ml-16 ml-40' /> }
                      <h2 className='text-2xl'>Education</h2>
                      <p>B.Tech in <md:br /> Software <md:br /> Engineering</p>
                    </div>
                    <div className='border-2 h-[200px] hover:shadow-lg hover:shadow-white  text-center p-4 w-[400px] md:w-[200px] border-black dark:border-white '>
                      { <FaBriefcase className='text-3xl md:ml-16 ml-40' /> }
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
            <h2 className="text-1xl">
              What i offer
            </h2>
            <h1 className="text-3xl font-bold">
              My services
            </h1>
            <p>
              I am a frontend developer from Nigeria with ___ years of experience
            </p>
          </div>
          <div className="flex md:flex-row flex-col ml-2 md:ml-20 dark:text-white justify-center gap-4 mt-10 ">
            <div className='border-2 border-black dark:border-white h-[250px] hover:bg-slate-700 hover:shadow-lg hover:shadow-white text-center  p-4 w-[400px] md:w-[300px]   '>
                { <AiOutlineGlobal  className='text-3xl my-4 mx-40 md:mx-28 '/> }
                <h2 className='text-2xl'>Web design</h2>
                <p className=''>Web development is the process of building,programming ...</p>
                <h2 className="flex  justify-center items-center pt-12 gap-2 ">
                Read more
                { < FaLongArrowAltRight className='text-4xl pl-2' /> }
                </h2>
            </div>
            <div className='border-2 h-[250px] border-black dark:border-white hover:bg-slate-700 hover:shadow-lg hover:shadow-white text-center  p-4 w-[400px] md:w-[300px]   '>
                { <IoLogoAndroid  className='text-3xl my-4 mx-40 md:mx-28 '/> }
                <h2 className='text-2xl'>Mobile Appps</h2>
                <p className=''>Web development is the process of building,programming ...</p>
                <h2 className="flex justify-center items-center pt-12 gap-2 ">
                Read more
                { < FaLongArrowAltRight className='text-4xl pl-2' /> }
                </h2>
            </div>
            <div className='border-2 h-[250px] hover:bg-slate-700 hover:shadow-lg hover:shadow-white text-center  p-4 w-[400px] md:w-[300px] border-black dark:border-white '>
                { <AiOutlineGlobal  className='text-3xl my-4 mx-40 md:mx-28 '/> }
                <h2 className='text-2xl'>Web design</h2>
                <p className=''>Web development is the process of building,programming ...</p>
                <h2 className="flex  justify-center items-center pt-12 gap-2 ">
                Read more
                { < FaLongArrowAltRight className='text-4xl pl-2' /> }
                </h2>
            </div>
            <div className='border-2 h-[250px] hover:bg-slate-700 hover:shadow-lg hover:shadow-white text-center  p-4 w-[400px] md:w-[300px] border-black dark:border-white '>
                { <IoLogoAndroid  className='text-3xl my-4 mx-40 md:mx-28 '/> }
                <h2 className='text-2xl'>Mobile Appps</h2>
                <p className=''>Web development is the process of building,programming ...</p>
                <h2 className="flex justify-center  items-center pt-12 gap-2 ">
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

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {/* Card 1 */}
        <div className="bg-white text-black border-2 rounded-lg shadow-lg overflow-hidden">
          <img src={Weather} alt="Frontend project" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Frontend project</h3>
            <p className="text-gray-700 mb-4">Web Design</p>
            <button className='border-2 flex items-center gap-2 rounded-md p-2 bg-slate-600 hover:bg-slate-800 mt-7'>Read More
          <BsArrowBarRight className='text-2xl'/>
          </button>
          </div>
        </div>

        
        <div className="bg-white text-black border-2 rounded-lg shadow-lg overflow-hidden">
          <img src={Logo} alt="Geo based app" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Geo based app</h3>
            <p className="text-gray-700 mb-4">Mobile App</p>
            <button className='border-2 flex items-center gap-2 rounded-md p-2 bg-slate-600 hover:bg-slate-800 mt-7'>Read More
          <BsArrowBarRight className='text-2xl'/>
          </button>
          </div>
        </div>

        
        <div className="bg-white border-2 text-black rounded-lg shadow-lg overflow-hidden">
          <img src={Logo} alt="Photography site" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Photography site</h3>
            <p className="text-gray-700 mb-4">Web Design</p>
            <button className='border-2 flex items-center gap-2 rounded-md p-2 bg-slate-600 hover:bg-slate-800 mt-7'>Read More
          <BsArrowBarRight className='text-2xl'/>
          </button>
          </div>
        </div>

        <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
          <img src={Logo} alt="UI/UX designing" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">UI/UX designing</h3>
            <p className="text-gray-700 mb-4">UI/UX Design</p>
            <button className='border-2 flex items-center gap-2 rounded-md p-2 bg-slate-600 hover:bg-slate-800 mt-7'>Read More
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

