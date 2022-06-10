import React from 'react'
import './Orders.css'
import '../../styles/global.css'

import OrderCards from '../../components/OrderCards/OrderCards'
import LargeCard from '../../components/LargeCard/LargeCard'
const Orders = ({orders}) => {
  return (
   <div className="orders-container">
       <div className="orders-heading">
           <h1>My Orders </h1>
       </div>
       <div className="orders-subheading">
       <h3>Current Orders: </h3>
       </div>
        <div className="orders-wrapper">
            {
                orders.map((products)=>
                {
                    return (

                        <OrderCards data={products}/>
                    )
                })
            }
        </div>
        <div className="orders-subheading">
       <h3>Past Orders: </h3>
       </div>
        <div className="orders-wrapper">
            {
                orders.map((products)=>
                {
                    return (

                        <OrderCards data={products}/>
                    )
                })
            }
        </div>
   </div>
  )
}

export default Orders