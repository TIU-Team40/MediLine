import React from "react";
import "./ShopNotification.css";
import "../../../styles/global.css";
import ShopNotificationCmp from "../../../components/ShopNotificationCmp/ShopNotificationCmp";
import PrescriptionNotification from "../../../components/PrescriptionNotification/PrescriptionNotification";
import { useAuth } from "../../../context/Auth/AuthContext";
const ShopNotification = () => {
  const { pharmacyState } = useAuth();
  console.log(pharmacyState.notifications);
  return (
    <div className="shopowner-notification-container">
      <h1>Notifications: </h1>
      <div className="shopowner-notification-wrapper">
        {pharmacyState.notifications.map((notify) => {
          if (notify.type === "Upload_Prescription")
            return (
              <div className="shopowner-pres-notification" key={notify._id}>
                <PrescriptionNotification notification={notify} />
              </div>
            );
          return (
            <div className="shopowner-order-notification" key={notify._id}>
              <ShopNotificationCmp notification={notify} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopNotification;
