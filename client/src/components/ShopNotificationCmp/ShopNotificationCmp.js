import React from 'react'
import './ShopNotificationCmp.css'
import '../../styles/global.css'

const ShopNotificationCmp = () => {
  return (
    <div className="shopowner-notification-cards">
    <div className="notification-title">
      New Order! 
    </div>
    <div className="notification-description">
      Paracetamol 2 strips 10 mg 
    </div>
    <div className="notification-username">
      <strong> Order from:</strong>  Nilankoor Biswas
    </div>
    <div className="notification-user-address">
      <p>
      <strong>Address: </strong> Debinagar, Maynaguri, Jalpaiguri 

      </p>
      <p>
      <strong>PIN: </strong> - 735224
      </p>
      <p>
        <strong>Contact: </strong> 7001345668
      </p>
    </div>
  </div>
  )
}

export default ShopNotificationCmp