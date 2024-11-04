import { Route ,Routes } from 'react-router-dom';
import Footer from './Components/Footer'
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';
import Service from './Pages/Service';
import Contactme from './Pages/Contactme';
import Portfolio from './Pages/Portfolio';
import { useState } from 'react';
function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    };
  return (
    <div className='min-h-screen '>
     <Routes>
     </Routes>
      <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Aboutme darkMode={darkMode}/>
        <Service darkMode={darkMode}/>
        <Portfolio darkMode={darkMode} />
       <Contactme darkMode={darkMode}/> 
      <Footer />
    </div>
  );
}
export default App;