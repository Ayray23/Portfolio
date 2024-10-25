import React, { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import { BsArrowBarRight } from 'react-icons/bs';
import { FaGraduationCap, FaBriefcase, FaLongArrowAltRight, FaArrowRight } from "react-icons/fa";
import { PiPentagramBold } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoLogoAndroid } from "react-icons/io";
import Weather from './assets/weather.png';
import Logo from './assets/1 (2).png'; 
import Pics from './assets/Raymond.jpg'; 

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
    const [darkMode, setDarkMode] = useState(false);
    // const [isSticky, setIsSticky] = useState(false);

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
      <main className="flex min-h-screen flex-col p-12 bg-slate-600 dark:bg-neutral-900">
      <nav
      className={`fixed top-0 bg-gray-700 left-0 w-full z-50 flex justify-between text-black ${
        isSticky ? "bg-slate-700 text-black" : "bg-transparent text-white"
      }`}
      style={{ transition: "background-color 0.3s" }}
    >
          <h1 className="text-xl font-semibold dark:text-white">
            Raymond
          </h1>

          <button
          className=" w-10 h-10 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
          onClick={toggleDarkMode}
        >
          {darkMode ? "LHT" : "DRK"}
        </button>
          <ul className="flex dark:text-white gap-10 pr-10">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
          
        </nav>
        </main>
        </div>
  );
};

const Home = () => {
  return (
    <>
      <section className='pt-16 flex dark:text-white  flex-col items-center justify-center text-white'>
        <img src={Pics} alt="Profile" className='h-[250px] md:mt-12 mb-4 w-[250px] rounded-[50%]' />
        <h2>Hi! I am Raymond </h2>
        <h1 className='text-3xl font-bold font-serif md:text-4xl mt-4 text-center'>
          frontend web <br/>developer based in
        </h1>
        <h4 className='text-1xl font-semibold px-6'>
          I am a frontend developer from Osun state, Nigeria with ___ years of experience in multiple  
        </h4>
        <div className='flex gap-10'>
          <button className='border-2 flex items-center gap-2 rounded-md p-2 bg-slate-600 hover:bg-slate-800 mt-7'>
            Contact me <BsArrowBarRight className='text-2xl'/>
          </button>
          <button className='border-2 flex items-center gap-2 rounded-md p-2 bg-slate-600 hover:bg-slate-800 mt-7'>
            My resume <BsArrowBarRight className='text-2xl'/>
          </button>
        </div>
      </section>
    </>
  );
};

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
          <img src={Pics} alt="Profile" className='h-[400px]  w-[70%]' />
        </div>
        <div className='md:mt-0 mt-8 md:w-[60%] flex flex-col items-center'>
          <h5 className='text-xl'>Introduction</h5>
          <h1 className='text-3xl'>About me</h1>
          <p className='mt-8 mx-16 font-serif font-medium'>
            I am an experienced Frontend Developer with over a decade of professional expertise in the field. 
            Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
          </p>
          <div className='flex md:flex-row flex-col md:items-center mt-6 md:justify-center gap-8'>
            <InfoBox Icon={PiPentagramBold} title="Languages" content="HTML, CSS, JavaScript, React Js, Vite" />
            <InfoBox Icon={FaGraduationCap} title="Education" content="B.Tech in Software Engineering" />
            <InfoBox Icon={FaBriefcase} title="Project" content="Built more than 2 projects" />
          </div>
        </div>
      </section>
    </>
  );
};

const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div className='border-2 h-[250px] hover:bg-slate-700 hover:shadow-lg hover:shadow-white text-center p-4 w-[400px] md:w-[300px] border-white'>
      <Icon className='text-3xl  my-4 ml-40' />
      <h2 className='text-2xl'>{title}</h2>
      <p className=''>{description}</p>
      <h2 className="flex justify-center items-center pt-12 gap-2">
        Read more <FaLongArrowAltRight className='text-4xl pl-2' />
      </h2>
    </div>
  );
};

const Service = () => {
  return (
    <>
      <section className="mb-8">
        <div className="flex flex-col text-white items-center">
          <h2 className="text-1xl">What I offer</h2>
          <h1 className="text-3xl font-bold">My services</h1>
          <p>I am a frontend developer from Nigeria with ___ years of experience</p>
        </div>
        <div className="flex text-white ml-8 items-center md:ml-0 md:flex-row flex-col justify-center gap-4 mt-10">
          <ServiceCard Icon={AiOutlineGlobal} title="Web Design" description="Web development is the process of building, programming ..." />
          <ServiceCard Icon={IoLogoAndroid} title="Mobile Apps" description="Web development is the process of building, programming ..." />
          <ServiceCard Icon={AiOutlineGlobal} title="Web Design" description="Web development is the process of building, programming ..." />
          <ServiceCard Icon={IoLogoAndroid} title="Mobile Apps" description="Web development is the process of building, programming ..." />
        </div>
      </section>
    </>
  );
};

const PortfolioItem = ({ title, category, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{category}</p>
        <button className="mt-4 gap-2  inline-flex items-center px-3 py-2 bg-slate-600 text-white font-medium rounded-md hover:bg-slate-800 focus:outline-none">
          <span>Explore</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "Project 1", category: "Web Development", image: Pics },
    { title: "Project 2", category: "Mobile App", image: Pics },
    { title: "Project 3", category: "Web Design", image: Pics }
  ];

  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white text-center mb-8">My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="container mx-auto px-4 py-8 text-white">
        <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border-2 border-white rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border-2 border-white rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border-2 border-white rounded-md"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export { Header, Home, Aboutme, Service, Portfolio, ContactMe };

