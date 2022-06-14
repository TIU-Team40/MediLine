import React, {useState} from "react";
import "./SingleOrderCard.css";
import "../../styles/global.css";
import OrderCards from "../OrderCards/OrderCards";

const SingleOrderCard = ({ order, disabled }) => {
  function getDate(orderDate) {
    const date = new Date(orderDate);
    return date.toDateString();
  }

  return (
    <div className="single-order-container">
      <div className="single-order-header">
        <div className="single-order-header-content">
          <h3>Order Confirmed</h3>
          <p>
            <strong>Ordered on : </strong>
            {getDate(order.createdAt)}
          </p>
          <p>
            <strong>Order ID:</strong> #{order._id}
          </p>
          <p>
            <strong>Ordered from: </strong> {order.pharmacy.name}
          </p>
          <p>
            <strong>Order status: </strong> <span> Shipped </span>
          </p>
          <h4>Order Summary: </h4>
        </div>
        {
          contactPharmacy ? 
        
          
          (
            <div className="contact-pharmacy" id={disabled}>
            <p>+91-786543820</p>
          </div>
          ) 
          :
          (
            

              <div className="contact-pharmacy" id={disabled}>
                <button type="button" onClick={()=>setContactPharmacy(true)}>Contact Pharmacy </button>
              </div>
                
          )
        }
      </div>
      <div className="single-order-wrapper">
        {order.medicines.map((product) => {
          return <OrderCards data={product} key={product._id} />;
        })}
      </div>
      <div className="single-order-user-details">
        <div className="single-order-address-wrapper">
          <h4>Order Address</h4>
          <h5>
            <span>{order.address.name}</span>
          </h5>
          <p>{order.address.addressLine}</p>
          <p>{order.address.pinCode}</p>
          <p>{order.address.state}</p>
          <p>
            <strong> Contact: </strong>
            {order.address.contactNo}
          </p>
        </div>

        <div className="single-order-price-wrapper">
          <h4>Price Details</h4>
          <p>Total Price: ₹{order.totalAmount}</p>
          <p>Discount Price: ₹{order.discountAmount}</p>
          <p>Shipping Price: FREE</p>
          <div className="horizontal-bar"></div>
          <h4>Order Price: ₹{order.orderAmount}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleOrderCard;
