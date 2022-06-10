import React from 'react'
import LargeCard from '../../components/LargeCard/LargeCard'
import LocationFinder from '../../components/LocationFinder/LocationFinder'
import SearchBar from '../../components/SearchBar/SearchBar'
import { newSearchBarTest, searchBarTest } from '../../dummy_data'
import '../../styles/global.css'
import './ProductListing.css'
const ProductListing = () => {
  return (
    <div className='product-list-container'>
      <div className="product-list-header">
      
      <LocationFinder/>
        <SearchBar placeholder={"Search..."} data={searchBarTest}/>
      </div>
        <div className="sort-by">
            

                
            <p>Sort By: </p>
            <select>
                <option value="relevance">Relevance</option>
                <option value="pricehightolow"> Price: High To Low </option>
                <option value="pricelowtohigh"> Price: Low To High </option>

            </select>
            
        </div>

        <div className='product-list'>
        {

        searchBarTest.map((product)=> {
          return (

            <LargeCard key={product.id} data={product}/>
          )
        })
      }
      </div>

        <div className="relevant-medicine">
            <h2>Here are some other related medicines: </h2>
            {newSearchBarTest.map((product)=>{
              return(
                <LargeCard key={product.id} data={product}/>
              )
            })}
        </div>
    </div>
  )
}

export default ProductListing