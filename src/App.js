
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero.js'
import Home from './../src/Components/Pages/Home.js'
import AboutUs from './Components/Pages/AboutUs';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Components/Hero/Header';
import Contact from './Components/Pages/Contact.js';

function App() {
  return (
    <>
      <Header/>
      
      <Router>
       <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
