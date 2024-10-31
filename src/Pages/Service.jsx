import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoLogoAndroid } from "react-icons/io";

const Service = ({darkMode}) => {
  return (
    <section className={`${darkMode && "dark"}`}>
        <section className='flex pt-12 flex-col pb-6 h-fit md:h-[500px] dark:bg-black dark:text-white '>
          <div className="flex flex-col  text-black  dark:text-white items-center">
            <h2 className="text-xl">
              What i offer
            </h2>
            <h1 className="text-3xl font-bold">
              My services
            </h1>
            <p>
              I am a frontend developer from Nigeria with ___ years of experience
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pr-8 dark:text-white justify-center gap-4 ml-12 md:ml-4 mt-10 ">
            <div className='border-2 hover:bg-blue-700 border-black dark:border-white h-[250px] hover:text-white hover:shadow-2xl hover:shadow-blue-900  text-center  p-4 w-full md:w-[250px] '>
                { <AiOutlineGlobal  className='text-3xl my-4 mx-20 md:mx-24 '/> }
                <h2 className='text-2xl'>Web design</h2>
                <p className=''>Web development is the process of building,programming ...</p>
                <h2 className="flex  justify-center items-center pt-4 gap-2 ">
                Read more
                { < FaLongArrowAltRight className='text-4xl pl-2' /> }
                </h2>
            </div>
            <div className='border-2 hover:bg-blue-700 border-black dark:border-white h-[250px] hover:text-white hover:shadow-2xl hover:shadow-blue-900  text-center  p-4 w-full md:w-[250px] '>
                { <IoLogoAndroid  className='text-3xl my-4 mx-20 md:mx-24 '/> }
                <h2 className='text-2xl'>Mobile Appps</h2>
                <p className=''>Web development is the process of building,programming ...</p>
                <h2 className="flex justify-center items-center pt-4 gap-2 ">
                Read more
                { < FaLongArrowAltRight className='text-4xl pl-2' /> }
                </h2>
            </div>
            <div className='border-2 hover:bg-blue-700 border-black dark:border-white h-[250px] hover:text-white hover:shadow-2xl hover:shadow-blue-900  text-center  p-4 w-full md:w-[250px] '>
                { <AiOutlineGlobal  className='text-3xl my-4 mx-20 md:mx-24 '/> }
                <h2 className='text-2xl'>Web design</h2>
                <p className=''>Web development is the process of building,programming ...</p>
                <h2 className="flex  justify-center items-center pt-4 gap-2 ">
                Read more
                { < FaLongArrowAltRight className='text-4xl pl-2' /> }
                </h2>
            </div>
            <div className='border-2 hover:bg-blue-700 border-black dark:border-white h-[250px] hover:text-white hover:shadow-2xl hover:shadow-blue-900  text-center  p-4 w-full md:w-[250px] '>
                { <IoLogoAndroid  className='text-3xl my-4 mx-20  md:mx-24 '/> }
                <h2 className='text-2xl'>Mobile Appps</h2>
                <p className=''>Web development is the process of building,programming ...</p>
                <h2 className="flex justify-center  items-center pt-4 gap-2 ">
                Read more
                { < FaLongArrowAltRight className='text-4xl pl-2' /> }
                </h2>
            </div>
          
          </div>
        </section> 
    </section>
  )
}

export default Service
