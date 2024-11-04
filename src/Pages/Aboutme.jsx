import Pics from '../assets/Raymond.jpg';
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { PiPentagramBold } from "react-icons/pi";

const Aboutme = ({darkMode}) => {
  return (
    <section id='aboutme' className={`${darkMode && "dark"}`}>
      <div className='flex h-fit  md:flex-row flex-col dark:bg-black text-black dark:text-white'>
              <div className='md:w-[40%] '>
                { <img src={Pics} alt="" /> }
              </div>
              <div className='md:mt-0 mt-8 px-2 md:w-[60%] flex flex-col  justify-center items-center'>
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
      </div> 
  </section >
  )
}

export default Aboutme

