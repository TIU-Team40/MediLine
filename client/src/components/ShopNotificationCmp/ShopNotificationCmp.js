import React from "react";
import "./ShopNotificationCmp.css";
import "../../styles/global.css";
import { useNavigate } from "react-router-dom";

const ShopNotificationCmp = () => {
  const navigate = useNavigate();
  return (
    <div className="shopowner-notification-cards">
      <div className="notification-title">
        <h3>NEW ORDER</h3>
        <p>
          <button type="button" onClick={() => navigate("/shoporders")}>
            Go To Order
          </button>
        </p>
      </div>
      <div className="notification-order-details">
        <div className="order-quantity">
          <strong>Order Quantity: </strong> 2
        </div>
        <div className="order-total-amount">
          <strong>Order Total Amount: </strong> ₹27
        </div>
      </div>

      <div className="notification-username">
        <strong> Order from:</strong> Nilankoor Biswas
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
    </div>
  );
};

export default ShopNotificationCmp;
