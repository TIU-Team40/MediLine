import React from 'react'
import {MdLocationPin} from 'react-icons/md'
import './LocationFinder.css'
import '../../styles/global.css'
import { locationArray } from '../../dummy_data'
const LocationFinder = () => {
    const locationFinderHandler = () => {
        console.log("location finder clicked");
    }
  return (
    <div className='location-container'>
      

        <div className="location-name">
        <div className='location-icon'><MdLocationPin size="2rem" className='icon'/></div>
      
          
            
          <select className='select-location'>
            <option value="#1" className='select-location-option'>New Town</option>
            <option value="#2" className='select-location-option'>Salt Lake</option>
            <option value="#3" className='select-location-option'>Bangur</option>
            <option value="#4" className='select-location-option'>Lake Town</option>
          </select>

            
          
        
        </div>

        
    </div>
  )
}

export default LocationFinder