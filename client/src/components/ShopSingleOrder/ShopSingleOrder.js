import React, { useState } from "react";
import "./ShopSingleOrder.css";
import "../../styles/global.css";
import OrderCards from "../OrderCards/OrderCards";

const ShopSingleOrder = ({ order, disabled, disabled2 }) => {
  const [contactPharmacy, setContactPharmacy] = useState(false);
  const { address, pharmacy } = order;
  const { name, addressLine, contactNo, pinCode, state } = address;
  const handleOrderStatus = () => {
    setOrderShipped(true);
    alert("Order status has been set to Shipped");
  };
  const [orderShipped, setOrderShipped] = useState(false);

  function getDate(orderDate) {
    const date = new Date(orderDate);
    return date.toDateString();
  }

  return (
    <div className="single-order-container">
      <div className="single-order-header">
        <div className="single-order-header-content">
          <h3>Order #1</h3>
          <p>
            <strong>Ordered on : </strong>
            {getDate(order.createdAt)}
          </p>
          <p>
            <strong>Order ID:</strong> #{order._id}
          </p>
          {orderShipped && (
            <p>
              <strong>Order Status:</strong> Shipped
            </p>
          )}
          <h4>Order Summary: </h4>
        </div>
        <div className="contact-pharmacy" id={disabled}>
          {contactPharmacy ? (
            <p>+91-786543820</p>
          ) : (
            <button type="button" onClick={() => setContactPharmacy(true)}>
              Contact Pharmacy{" "}
            </button>
          )}
        </div>
      </div>
      <div className="single-order-wrapper">
        {order.medicines.map((product) => {
          return <OrderCards data={product} key={product._id} />;
        })}
      </div>
      <div className="single-order-user-details">
        <div className="single-order-address-wrapper">
          <h4>User's Address</h4>
          <h5>
            <span>{name}</span>
          </h5>
          <p>{addressLine}</p>
          <p>{pinCode}</p>
          <p>{state}</p>
          <p>
            <strong> Contact: </strong>
            {contactNo}
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

      <div className="set-order-status" id={disabled2}>
        <h3>Set Order Status: </h3>
        {orderShipped ? (
          <button type="button" className="disabled_button">
            {" "}
            Shipped{" "}
          </button>
        ) : (
          <button
            type="button"
            className="enabled_button"
            onClick={handleOrderStatus}
          >
            {" "}
            Shipped{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default ShopSingleOrder;
