import Pics from '../assets/Raymond.jpg'
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { PiPentagramBold } from "react-icons/pi";

const InfoBox = ({ Icon, title, content }) => {
  return (
    <div className='border-2 hover:shadow-lg hover:shadow-white h-[200px] text-center p-4 w-[400px] md:w-[200px] border-white'>
      <Icon className='text-3xl md:ml-16 ml-40' />
      <h2 className='text-2xl'>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

const Aboutme = () => {
  return (
    <>
      <section className='flex m-12 md:flex-row flex-col text-white'>
        <div className='md:w-[40%] flex justify-center mt-20'>
          <img src={Pics} alt="Profile" className=' h-[400px]  w-[70%]' />
        </div>
        <div className='md:mt-0 mt-8 md:w-[60%] flex flex-col items-center'>
          <h5 className='text-xl'>Introduction</h5>
          <h1 className='text-3xl'>About me</h1>
          <p className='mt-8 mx-16 font-serif font-medium'>
            I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
          </p>
          <div className='flex md:flex-row flex-col md:items-center mt-6 md:justify-center gap-8'>
            <InfoBox 
              Icon={PiPentagramBold} 
              title="Languages" 
              content="HTML, CSS, JavaScript, React Js, Vite" 
            />
            <InfoBox 
              Icon={FaGraduationCap} 
              title="Education" 
              content="B.Tech in Software Engineering" 
            />
            <InfoBox 
              Icon={FaBriefcase} 
              title="Project" 
              content="Built more than 2 projects" 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutme;
