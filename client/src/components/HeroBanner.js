import React from 'react'
import LocationFinder from './LocationFinder'
import SearchBar from './SearchBar'
import './HeroBanner.css'
import herobanner_illustration from '../assets/herobanner_illustration.svg'
import '../styles/global.css'
const HeroBanner = () => {
  return (
    <div className='herobanner-container'>
      <header>
      <div className="location">
      <LocationFinder/>
      </div>
      <div className="search-bar">
      <SearchBar placeholder="Search for diseases/symptoms/medicine"/>
      </div>
      </header>
      <div className="hero-banner">
        <div className="welcome-header">
          
          <h1>WELCOME TO <span>MEDILINE</span> - THE ONLINE MEDICINE PROCUREMENT WEBSITE!</h1>
      
          
            <p>Order medicine from the comfort of your homes.</p>
          
        </div>
        <div className="illustration">
         <img src={herobanner_illustration} alt="Illustration"/>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner