import React from 'react'
import './PrescriptionNotification.css'
import '../../styles/global.css'
const PrescriptionNotification = () => {
  return (
    <div className="shopowner-notification-cards">
    <div className="notification-title">
      <h4>
        PRESCRIPTION RECEIVED
      </h4>
       
    </div>
    {/* <div className="notification-order-details">
        <div className="order-quantity">
          <strong>Order Quantity: </strong> 2
        </div>
        <div className="order-total-amount">
          <strong>Order Total Amount: </strong> ₹27
        </div>
    </div> */}
    
    <div className="notification-username">
      <strong> From:</strong>  Nilankoor Biswas
    </div>
    <div className="notification-user-address">
      <p>
      <strong>Address: </strong> Debinagar, Maynaguri, Jalpaiguri 

      </p>
      <p>
      <strong>PIN: </strong> 735224
      </p>
      <p>
        <strong>Contact: </strong> 7001345668
      </p>
    </div>
    <div className="notification-message">
        <h5>Message: </h5>
        <p>Hi kids, do you like violins? Wanna see me stick nine inch nails to each one of my eyelids? Wanna copy me and do exactly like I did? Try 'cid and get fucked up worse than my life is?</p>
    </div>
    <div className="open-prescription-button">

        <button type="button">Open Prescription</button>
    </div>
  </div>
  )
}

export default PrescriptionNotification