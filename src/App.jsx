import { Route ,Routes } from 'react-router-dom';
// import Header from './Components/Header';
import Footer from './Components/Footer'
import Home from './Pages/Home';
// import Aboutme from './Pages/Aboutme';
// import Service from './Pages/Service';
// import Contactme from './Pages/Contactme';
// import Portfolio from './Pages/Portfolio';
// import Darkmood from './Pages/Darkmood';
function App() {
  return (
    <div className='min-h-screen dark:bg-white dark:text-white bg-slate-600'>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}  />
        {/* <Route path="Aboutme" element={<Aboutme />}  /> */}
      </Routes>
        {/* <Aboutme/>
        <Service/>
        <Portfolio/>
        {/* <Darkmood/> */}
        {/* <Contactme/> */}
      <Footer />
    </div>
  );
}

export default App;