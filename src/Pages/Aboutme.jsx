import Pics from '../assets/jj.jpg';
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { PiPentagramBold } from "react-icons/pi";

const Aboutme = ({ darkMode }) => {
  return (
    <section id='aboutme' className={`${darkMode && "dark"}`}>
      <div className='flex h-fit md:flex-row flex-col dark:bg-black text-black dark:text-white'>
        <div className='md:w-[40%]'>
          <img src={Pics} alt="Profile" />
        </div>

        <div className='md:mt-0 mt-8 px-2 md:w-[60%] flex flex-col justify-center items-center'>
          <h5 className='text-xl'>Introduction</h5>
          <h1 className='text-3xl'>About Me</h1>

          <p className='mt-8 md:mx-16 font-serif font-medium'>
            I am a professional Frontend Developer with over 5 years of experience building modern, responsive, and high-performance web applications. I specialize in creating clean UI designs, optimizing user experience, and delivering scalable solutions that solve real business problems.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:ml-16 sm:-ml-14 mt-6 gap-24'>

            <div className='border-2 h-[200px] ml-4 hover:shadow-lg hover:shadow-white text-center p-4 w-full md:w-[150px] dark:border-white border-black'>
              <PiPentagramBold className='text-3xl md:ml-10 ml-24' />
              <h2 className='text-2xl'>Languages</h2>
              <p>HTML, CSS, JavaScript, React.js, Vite, Tailwind CSS</p>
            </div>

            <div className='border-2 hover:shadow-lg hover:shadow-white h-[200px] text-center p-4 ml-4 w-full md:w-[150px] border-black dark:border-white'>
              <FaGraduationCap className='text-3xl md:ml-10 ml-28' />
              <h2 className='text-2xl'>Education</h2>
              <p>B.Tech in Software Engineering</p>
            </div>

            <div className='border-2 h-[200px] hover:shadow-lg hover:shadow-white text-center p-4 ml-4 w-full md:w-[150px] border-black dark:border-white'>
              <FaBriefcase className='text-3xl md:ml-10 ml-24' />
              <h2 className='text-2xl mb-1'>Projects</h2>
              <p>Successfully delivered over 20 professional web projects</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;