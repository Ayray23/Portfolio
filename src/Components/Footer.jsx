const Footer = () => {
  return (
    <footer className="text-white bg-blue-700 py-6">
      <div className="mx-auto text-center">

        <h1 className="text-3xl font-bold mb-2">
          Add Your Name Here<span className="text-purple-600">.</span>
        </h1>

        <a href="mailto:yourmail@gmail.com" className="flex justify-center">
          yourmail@gmail.com
        </a>

        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-white">GitHub</a>
          <a href="#" className="text-white">LinkedIn</a>
          <a href="#" className="text-white">Twitter</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;