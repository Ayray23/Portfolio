import { BsMailbox } from 'react-icons/bs'
const Footer = () => {
  return (
    <>
       <footer className=" text-black bg-slate-600  dark:text-white py-6 mt-10">
      <div className=" mx-auto text-center">
        {/* Brand Name */}
        <h1 className="text-3xl font-bold mb-2">Raymond<span className="text-purple-600">.</span></h1>

        {/* Email */}
          <a 
          href="adebisiraymond16@gmail.com"
          className="flex items-center justify-center text-black space-x-2">
            adebisiraymond16@gmail.com
          </a>
         

        {/* Links */}
        <div className="flex justify-center space-x-6 mt-4">
        <a
            href="https://github.com/Ayray23"
            className="text-black dark:text-white transition duration-300"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-black dark:text-white  transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-black dark:text-white transition duration-300"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer

