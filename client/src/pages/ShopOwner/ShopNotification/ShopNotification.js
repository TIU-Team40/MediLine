import React from 'react'
import './ShopNotification.css'
import '../../../styles/global.css'
import ShopNotificationCmp from '../../../components/ShopNotificationCmp/ShopNotificationCmp'
const ShopNotification = () => {
  return (
     <div className="shopowner-notification-container">
       
       <h1>Notifications: </h1>
       <div className="shopowner-notification-wrapper">
   
    
        <ShopNotificationCmp/>
        <ShopNotificationCmp/>
        <ShopNotificationCmp/>
        <ShopNotificationCmp/>
        
       </div>
       
        
     </div>
  )
}

export default ShopNotification