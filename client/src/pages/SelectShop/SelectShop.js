import React from 'react'
import './SelectShop.css'
import '../../styles/global.css'
import ShopCards from '../../components/ShopCards/ShopCards'
import { shops } from '../../dummy_data'
const SelectShop = () => {
  return (
    <div className="select-shop-container">
        <div className="select-shop-heading">

        <h1>Select any pharmacy: </h1>
        </div>
        {shops.map((shop) => {
            return (

                <ShopCards data={shop}/>
            )
        })}

    </div>
  )
}

export default SelectShop