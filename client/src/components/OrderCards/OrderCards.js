import React from 'react'
import './OrderCards.css'
import '../../styles/global.css'
import { MdArrowDownward } from 'react-icons/md'
import Card from '../Card/Card'
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
               <div className="order-card-desc">
                <p>{data.description}</p>
               </div>
               <div className="quantity-and-price">
                
                 <p><strong>Quantity: </strong>{data.quantity} x <strong> ₹{data.price} </strong><span>(20 tables per strip)</span></p>
                 
               </div>
                <div className="card-order-details">


              
                {/* <div className="card-order-again">
                    <button type="button">
                        Order Again
                    </button>
                </div> */}
                </div>

            </div>
        </div>
    </div>
  )
}

export default OrderCards