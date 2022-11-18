import React from 'react'
import './Header.css'
import Sigla from "../Images/Airbnb.png"
import Navbar from '../Navbar/Navbar'
/*import BackgroundH from "../Images/Blackbag.png"*/
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      
      <img src={Sigla} alt="" className="sigla"/>
      <div className="title">
        <h1>Your journey starts with us</h1>
      
      </div>
    <div className='header2'> 
    <Router>
          <Navbar />
          <Routes>
            <Route path='/'/>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default Header
