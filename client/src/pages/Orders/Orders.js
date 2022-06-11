import React from 'react'
import './Orders.css'
import '../../styles/global.css'
import { userInfo } from '../../dummy_data'
import OrderCards from '../../components/OrderCards/OrderCards'
import SingleOrderCard from '../../components/SingleOrderCard/SingleOrderCard'
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
           <SingleOrderCard data={orders} address={userInfo}/>

           
        </div>
        <div className="orders-subheading">
       <h3>Past Orders: </h3>
       </div>
        <div className="orders-wrapper">
        <SingleOrderCard data={orders} address={userInfo} disabled='disabled'/>
        </div>
   </div>
  )
}

export default Orders