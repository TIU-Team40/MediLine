import React, {useState} from "react";
import "./ShopSingleOrder.css";
import "../../styles/global.css";
import OrderCards from "../OrderCards/OrderCards";

const ShopSingleOrder = ({ data, address, disabled, disabled2 }) => {
  const {
    firstName,
    lastName,
    addressLine1,
    addressLine2,
    phoneNumber,
    pinCode,
    state,
  } = address;
  const handleOrderStatus = () =>{
    setOrderShipped(true);
    alert("Order status has been set to Shipped")
  }
  const [orderShipped, setOrderShipped] = useState(false);
  
  return (
    <div className="single-order-container">
      <div className="single-order-header">
        <div className="single-order-header-content">
          <h3>Order #1</h3>
          <p>
            <strong>Ordered on : </strong>10 June 2022
          </p>
          <p>
            <strong>Order ID:</strong> #62jfhaosjfhjoahfgj2
          </p>
          {
            orderShipped && 
          <p>
            <strong>Order Status:</strong> Shipped
          </p>
          
          }
          <h4>Order Summary: </h4>
        </div>
        <div className="contact-pharmacy" id={disabled} >
          <button type="button">Contact Pharmacy </button>
        </div>
      </div>
      <div className="single-order-wrapper">
        {data.slice(0, 3).map((products) => {
          return <OrderCards data={products} />;
        })}
      </div>
      <div className="single-order-user-details">
        <div className="single-order-address-wrapper">
          <h4>User's Address</h4>
          <h5>
            <span>{firstName}</span> <span>{lastName}</span>
          </h5>
          <p>{addressLine1}</p>
          <p>{addressLine2}</p>
          <p>{pinCode}</p>
          <p>{state}</p>
          <p>
            <strong> Contact: </strong>
            {phoneNumber}
          </p>
        </div>

        <div className="single-order-price-wrapper">
          <h4>Price Details</h4>
          <p>Total Price: ₹200</p>
          <p>Discount Price: ₹200</p>
          <p>Shipping Price: ₹200</p>
          <div className="horizontal-bar"></div>
          <h4>Order Price: ₹800</h4>
        </div>
      </div>

      <div className="set-order-status" id={disabled2}>
        <h3>Set Order Status: </h3>
        {
            orderShipped ?
            (

                <button type="button" className="disabled_button"> Shipped </button>
            ):
            (
                <button type="button" className="enabled_button" onClick={handleOrderStatus}> Shipped </button>
            )
        }
        
      </div>
    </div>
  );
};

export default ShopSingleOrder;
