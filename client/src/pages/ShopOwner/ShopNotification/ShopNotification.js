import React from 'react'
import './ShopNotification.css'
import '../../../styles/global.css'
import ShopNotificationCmp from '../../../components/ShopNotificationCmp/ShopNotificationCmp'
import PrescriptionNotification from '../../../components/PrescriptionNotification/PrescriptionNotification'
const ShopNotification = () => {
  return (
     <div className="shopowner-notification-container">
       
       <h1>Notifications: </h1>
       <div className="shopowner-notification-wrapper">
          <div className="shopowner-order-notification">
          <h3>Order Notification: </h3>
           <ShopNotificationCmp/>
          </div>
          <div className="shopowner-pres-notification">
            <h3>Prescription Notification:</h3>
            <PrescriptionNotification/>
          </div>
    
        
        
       </div>
       
        
     </div>
  )
}

export default ShopNotification