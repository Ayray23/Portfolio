import Weather from '../assets/weather.png'
import House from '../assets/house.jpg'
import Fruit from '../assets/Fruit.jpg'
import { BsArrowBarRight } from 'react-icons/bs'
import libary from '../assets/library-img.jpg'

const Portfolio = ({ darkMode }) => {
  return (
    <section className={`${darkMode && "dark"}`}>
      <div className="text-black pt-8 dark:text-white min-h-screen flex flex-col justify-center items-center dark:bg-black">

        <h1 className="text-4xl font-bold mb-4">Professional Portfolio</h1>
        <h2 className="text-2xl font-semibold mb-6">Recent Projects</h2>
        <p className="text-lg text-center mb-12 max-w-lg">
          Explore real-world projects that demonstrate professional frontend development, UI design, and responsive web solutions.
        </p>

        <div className="grid grid-cols-1 md:mx-16 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">

          <div className="dark:text-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:scale-105">
            <img src={Weather} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Weather Forecast App</h3>
              <p>Real-time weather tracking web application</p>
              <a target="_blank" href="https://weather-app-raymond-s-projects-ac2c129d.vercel.app/">
                <button className='border-2 flex items-center gap-2 rounded-md p-2 text-white bg-blue-700 mt-4'>
                  View Project <BsArrowBarRight />
                </button>
              </a>
            </div>
          </div>

          <div className="dark:text-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:scale-105">
            <img src={Fruit} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Food Ordering Web App</h3>
              <p>Modern responsive food ordering platform</p>
              <a target="_blank" href="https://food-page-eta.vercel.app/">
                <button className='border-2 flex items-center gap-2 rounded-md p-2 text-white bg-blue-700 mt-4'>
                  View Project <BsArrowBarRight />
                </button>
              </a>
            </div>
          </div>

          <div className="dark:text-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:scale-105">
            <img src={House} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Real Estate Landing Page</h3>
              <p>Modern property showcase website</p>
              <a target="_blank" href="https://ayray23.github.io/landing_page_tailwindcss/">
                <button className='border-2 flex items-center gap-2 rounded-md p-2 text-white bg-blue-700 mt-4'>
                  View Project <BsArrowBarRight />
                </button>
              </a>
            </div>
          </div>

          <div className="dark:text-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:scale-105">
            <img src={libary} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">Online Book Search Platform</h3>
              <p>API-powered book search web application</p>
              <a target="_blank" href="https://book-search-app-snowy.vercel.app/book">
                <button className='border-2 flex items-center gap-2 rounded-md p-2 text-white bg-blue-700 mt-4'>
                  View Project <BsArrowBarRight />
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;