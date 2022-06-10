import React from 'react'
import './OrderCards.css'
import '../../styles/global.css'
const OrderCards = ({data}) => {
  return (
    <div className="order-cards-container">
  
        <div className="order-cards-card">
            
            <div className="card-image-wrapper">
                <img src={data.imageUrl} alt="Order image" />
            </div>
            <div className="card-content">
                <div className="order-card-title">
                    <h2>{data.title}</h2>
                </div>
                <div className="order-card-description">
                    {data.description}
                </div>
                <div className="card-price">
                ₹{data.price}
                </div>
                <div className="card-quantity">
                    Quantity ordered: <strong>{data.quantity}</strong>
                </div>
                <div className="card-order-details">


                <div className="card-shipping-status">
                    Order Status:  
                    <strong> Shipped</strong>
                </div>
                <div className="card-order-date">
                    Ordered on: <strong>29/05/22</strong>
                </div>
                <div className="card-order-again">
                    <button type="button">
                        Order Again
                    </button>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default OrderCards