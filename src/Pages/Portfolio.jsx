import Logo from '../assets/1 (2).png'
import Weather from '../assets/weather.png'
import House from '../assets/house.jpg'
import Fruit from '../assets/Fruit.jpg'
import { BsArrowBarRight } from 'react-icons/bs'
import libary from '../assets/library-img.jpg'
const Portfolio = ({darkMode}) => {
  return (
    <section className={`${darkMode && "dark"}`}>
        <div className=" text-black pt-8 dark:text-white min-h-screen flex flex-col justify-center items-center dark:bg-black">
      
      <h1 className="text-4xl font-bold mb-4">My portfolio</h1>
      <h2 className="text-2xl font-semibold mb-6">My latest work</h2>
      <p className="text-lg text-center mb-12 max-w-lg">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-1 md:mx-16 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      <div className="dark:text-white  dark:bg-neutral-800 text-grey-600 text-black  rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
          <img src={Weather} alt="Frontend project" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Web based app</h3>
            <p className=" mb-4">Web App</p>
            <button className='border-2 flex items-center gap-2 rounded-md p-2 text-white bg-blue-700 hover:bg-blue-800 hover:text-white mt-7'>
              <a target="_blank"
              href="https://weather-app-raymond-s-projects-ac2c129d.vercel.app/">
                Read More
              </a>
          <BsArrowBarRight className='text-2xl'/>
          </button>
          </div>
        </div>

        
        <div className="bg-white dark:text-white  dark:bg-neutral-800 text-grey-600  rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
          <img src={Fruit} alt="Geo based app" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Frontend project </h3>
            <p className=" mb-4">Web Design</p>
            <button className='border-2 flex items-center gap-2 rounded-md p-2 bg-blue-700 hover:bg-blue-800 text-white mt-7'>
              <a target="_blank" 
              href="https://food-page-eta.vercel.app/">
              Read More
              </a>
          <BsArrowBarRight className='text-2xl'/>
          </button>
          </div>
        </div>

        
        <div className="bg-white dark:text-white  dark:bg-neutral-800 text-grey-600 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
          <img src={House} alt="Photography site" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Tailwind css Project</h3>
            <p className=" mb-4">Web Design</p>
            <button className='border-2 text-white flex items-center gap-2 rounded-md p-2 bg-blue-700 hover:bg-blue-800text-white mt-7'>
              <a target="_blank" 
              href="https://ayray23.github.io/landing_page_tailwindcss/">
              Read More
              </a>
              
          <BsArrowBarRight className='text-2xl'/>
          </button>
          </div>
        </div>

        
        
        <div className="bg-white dark:text-white  dark:bg-neutral-800 text-grey-600 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
          <img src={libary} alt="Photography site" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Book Search library</h3>
            <p className=" mb-4">An API search app</p>
            <button className='border-2 text-white flex items-center gap-2 rounded-md p-2 bg-blue-700 hover:bg-blue-800text-white mt-7'>
              <a target="_blank" 
              href="https://book-search-app-snowy.vercel.app/book">
              Read More
              </a>
              
          <BsArrowBarRight className='text-2xl'/>
          </button>
          </div>
        </div>
      </div>
    </div>

        </section>
  );
};



export default Portfolio;

