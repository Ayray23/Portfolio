import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoLogoAndroid } from "react-icons/io";

// Reusable ServiceCard Component
const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div className='border-2 h-[250px] hover:bg-slate-700 hover:shadow-lg hover:shadow-white text-center p-4 w-[400px] md:w-[300px] border-white'>
      <Icon className='text-3xl  my-4 ml-40' />
      <h2 className='text-2xl'>{title}</h2>
      <p className=''>{description}</p>
      <h2 className="flex justify-center items-center pt-12 gap-2">
        Read more
        <FaLongArrowAltRight className='text-4xl pl-2' />
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
          <ServiceCard 
            Icon={AiOutlineGlobal} 
            title="Web Design" 
            description="Web development is the process of building, programming ..." 
          />
          <ServiceCard 
            Icon={IoLogoAndroid} 
            title="Mobile Apps" 
            description="Web development is the process of building, programming ..." 
          />
          <ServiceCard 
            Icon={AiOutlineGlobal} 
            title="Web Design" 
            description="Web development is the process of building, programming ..." 
          />
          <ServiceCard 
            Icon={IoLogoAndroid } 
            title="Mobile Apps" 
            description="Web development is the process of building, programming ..." 
          />
        </div>
      </section>
    </>
  );
};

export default Service;