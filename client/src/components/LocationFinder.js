import React from 'react'
import {MdLocationPin} from 'react-icons/md'
import './LocationFinder.css'
const LocationFinder = () => {
    const locationFinderHandler = () => {
        console.log("location finder clicked");
    }
  return (
    <div className='location-container'>
      

        <div className="location-name">
        <div className='location-icon'><MdLocationPin size="2rem"/></div>
        <div className='location-text' onClick={locationFinderHandler}>Enter Your Location</div>
        </div>

        
    </div>
  )
}

export default LocationFinder