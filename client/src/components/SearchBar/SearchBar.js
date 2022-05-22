import React from 'react'
import {BsSearch} from 'react-icons/bs'
import './SearchBar.css'
import '../../styles/global.css'

const SearchBar = ({placeholder, data}) => {
    const handleSearch = () =>
    {
        console.log("search button clicked")
    }
  return (
    <div className='search'>
        <div className="search-inputs">
            <input type="text" placeholder={placeholder} size="40"/>
            <div className='search-icon' onClick={handleSearch}><BsSearch size="1.75em" className='icon'/></div>
        </div>

        <div className="smallscreen-input">
          
          <input type="text" placeholder="Search"  />
          
        </div>

    </div>
  )
}

export default SearchBar 