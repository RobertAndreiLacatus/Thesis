import React from 'react'
import './Hero.css'
import Header from  './Header.js'

import './Hero.css'
import SearchBar from '../Pages/SearchBar'

const Hero = () => {
  return (
    <div className="hero"> 
       <div className="left-h">
        
      <div className='titles'>
        <div className='first-title'>
          <div></div>
          <span>The best app for your next trip</span>
        </div>

        <div className='second-title'>
          <div>
          <span className='stroke-text'>Let us to help you</span>
          </div>
          <div>
            <span>during your trip</span>
          </div>
          
          </div>

          
      </div>
      <SearchBar/>
        
        </div>


        
    </div>
  )
}

export default Hero
