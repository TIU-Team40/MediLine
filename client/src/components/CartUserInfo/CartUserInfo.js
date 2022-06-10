import React from 'react'
import './CartUserInfo.css'
import '../../styles/global.css'
import { Link } from 'react-router-dom'
const CartUserInfo = ({information}) => {
  return (
   <div className="user-info-container">

       <div className="username">
           <h3>
                {information.firstName} {information.lastName}
            </h3>
       </div>
       <div className="address">
           <h4> Delivery Address : </h4>
           <p>{information.addressLine1}</p>
                
       
           <p>{information.addressLine2}</p>
       
       </div>
       <div className="state">
           {information.state}
       </div>
       <div className="pincode">
           Pincode - <span> {information.pinCode}
               </span>
       </div>
       <div className="change-address">
           <Link to='/useraddress'>
               Change Address
           </Link>
       </div>
   </div>
  )
}

export default CartUserInfo