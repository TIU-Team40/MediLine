import React from 'react'
import './ShopOrders.css'
import '../../../styles/global.css'
import OrderCards from '../../../components/OrderCards/OrderCards'
import SingleOrderCard from '../../../components/SingleOrderCard/SingleOrderCard'
import { searchBarTest, userInfo } from '../../../dummy_data'
import ShopSingleOrder from '../../../components/ShopSingleOrder/ShopSingleOrder'
const ShopOrders = () => {
  return (
    <div className="shop-orders-container">

        <h1>Orders </h1>

        <div className="shop-orders-wrapper">
            <h4>Current Orders: </h4>
            <ShopSingleOrder data={searchBarTest} address={userInfo} disabled='disabled' order_Shipped={false}/>
            <h4>Past Orders: </h4>
            <ShopSingleOrder data={searchBarTest} address={userInfo} disabled='disabled' disabled2='disabled2' order_Shipped={true}/>
        </div>
    </div>
  )
}

export default ShopOrders