import React from 'react'
import './ShopCards.css'
import '../../styles/global.css'
const ShopCards = ({data}) => {
  return (
    <div className="shop-cards-container">

        <div className="shop-cards-wrapper">
            <div className="shop-cards-image-wrapper">
                <img src={data.imageUrl} alt="Shop Photo" />
            </div>
            <div className="shop-cards-content">
                <div className="shop-name">
                    <h1>{data.name} </h1>
                </div>
                <div className="shop-description">
                    {data.description}
                </div>
                <div className="shop-address">
                    {data.address}
                </div>
                {/* <div className="select-shop-button">
                    <button type="button">
                        Select this pharmacy
                    </button>
                </div> */}
                {/* <div className="select-shop-button-smallscreen">
                    <button type="button">
                        Select 
                    </button>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default ShopCards