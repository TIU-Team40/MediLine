import React from "react";
import "./CartUserInfo.css";
import "../../styles/global.css";
import { Link } from "react-router-dom";
const CartUserInfo = ({ information }) => {
  const address = information.addresses[0];
  return (
    <div className="user-info-container">
      <div className="username">
        <h3>{information.name}</h3>
      </div>
      <div className="address">
        <h4> Delivery Address : </h4>
        <p>{address.addressLine}</p>
      </div>
      <div className="state">{address.state}</div>
      <div className="pincode">
        Pincode - <span> {address.pinCode}</span>
      </div>
      <div className="change-address">
        <Link to="/useraddress">Change Address</Link>
      </div>
    </div>
  );
};

export default CartUserInfo;
