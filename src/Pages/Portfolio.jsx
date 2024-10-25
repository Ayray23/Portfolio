import { FaArrowRight } from "react-icons/fa";
import Weather from '../assets/weather.png'
import React from 'react';
import Logo from '../assets/1 (2).png'

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">
      <div className="text-center mt-8 mb-12">
        <h2 className="text-2xl font-semibold">My portfolio</h2>
        <h1 className="text-5xl font-bold mt-2">My latest work</h1>
        <p className="text-lg mt-4">
          Welcome to my web development portfolio! Explore a collection of projects
          showcasing my expertise in front-end development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-16">
        <PortfolioItem
          title="Frontend project"
          category="Web Design"
          image={Logo}
        />
        <PortfolioItem
          title="Weather Forcast Site"
          category="Web design"
          image={Weather}
        />
        <PortfolioItem
          title="Photography site"
          category="Web Design"
          image={Logo}
        />
        <PortfolioItem
          title="UI/UX designing"
          category="UI/UX Design"
          image={Logo}
        />
      </div>
    </div>
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
          <FaArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;

