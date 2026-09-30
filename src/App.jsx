import Footer from './Components/Footer'
import Home from './Pages/Home'
import Aboutme from './Pages/Aboutme'
import Service from './Pages/Service'
import Contactme from './Pages/Contactme'
import Portfolio from './Pages/Portfolio'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode((current) => !current)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-black text-white' : 'bg-white text-slate-900'}`}>
      <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Aboutme darkMode={darkMode} />
      <Service darkMode={darkMode} />
      <Portfolio darkMode={darkMode} />
      <Contactme darkMode={darkMode} />
      <Footer />
    </div>
  )
}

export default App
