import { Route ,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';
import Service from './Pages/Service';
import Contactme from './Pages/Contactme';
import Portfolio from './Pages/Portfolio';
import { useState } from 'react';
import HomeAbout from './Pages/HomeAbout';
// import Darkmood from './Pages/Darkmood';
function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    };


  return (
    <div className='min-h-screen '>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}  />
        {/* <Route path="Aboutme" element={<Aboutme darkMode={darkMode}/>}  />
         <Route path="Service" element={ <Service darkMode={darkMode}/>}  /> 
         <Route path="" element={<Portfolio darkMode={darkMode} />}  /> 
         <Route path="" element={<Contactme darkMode={darkMode}/>}  />  */}
      </Routes>
      <Aboutme darkMode={darkMode}/>
        <Service darkMode={darkMode}/>
        <Portfolio darkMode={darkMode} />
        {/* <Darkmood/> */}
       <Contactme darkMode={darkMode}/> 
      <Footer />
    </div>
  );
}

export default App;