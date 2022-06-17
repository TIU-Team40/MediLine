import React from "react";
import "./PrescriptionNotification.css";
import "../../styles/global.css";
import { useNavigate } from "react-router-dom";
const PrescriptionNotification = ({ notification }) => {
  const navigate = useNavigate();
  return (
    <div className="shopowner-notification-cards">
      <div className="notification-title">
        <h4>PRESCRIPTION RECEIVED</h4>
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
        <strong> From:</strong> {notification.fromUser.name}
      </div>
      <div className="notification-user-address">
        {/* <p>
          <strong>Address: </strong> Debinagar, Maynaguri, Jalpaiguri
        </p>
        <p>
          <strong>PIN: </strong> 735224
        </p> */}
        <p>
          <strong>Contact: </strong> {notification.fromUser.contactNo}
        </p>
      </div>
      <div className="notification-message">
        <h5>Message: </h5>
        <p>{notification.prescription.text}</p>
      </div>
      <div className="open-prescription-button">
        <a href={notification.prescription.file.secure_url} target="_blank">
          Open Prescription
        </a>
      </div>
    </div>
  );
};

export default PrescriptionNotification;
