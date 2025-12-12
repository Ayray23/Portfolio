import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoLogoAndroid } from "react-icons/io";

const Service = ({ darkMode }) => {
  return (
    <section id="service" className={`${darkMode && "dark"}`}>
      <section className='flex pt-12 flex-col pb-6 h-fit md:h-[500px] dark:bg-black dark:text-white'>

        <div className="flex flex-col items-center">
          <h2 className="text-xl">What I Offer</h2>
          <h1 className="text-3xl font-bold">My Services</h1>
          <p>I am a professional frontend developer with over 5 years of industry experience</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-4 ml-12 md:ml-4 mt-10">

          {[...Array(4)].map((_, i) => (
            <div key={i} className='bg-gray-200 shadow-xl hover:bg-blue-700 h-[250px] hover:text-white text-center p-4 w-full md:w-[250px]'>
              {i % 2 === 0 ? <AiOutlineGlobal className='text-3xl my-4 mx-auto' /> : <IoLogoAndroid className='text-3xl my-4 mx-auto' />}
              <h2 className='text-2xl'>{i % 2 === 0 ? "Web Development" : "Mobile Web Apps"}</h2>
              <p>Professional modern UI/UX design with responsive development</p>
              <h2 className="flex justify-center items-center pt-4 gap-2">
                Read more <FaLongArrowAltRight />
              </h2>
            </div>
          ))}

        </div>
      </section>
    </section>
  );
};

export default Service;