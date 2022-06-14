import React from "react";
import "./Orders.css";
import "../../styles/global.css";
import { useAuth } from "../../context/Auth/AuthContext";
import SingleOrderCard from "../../components/SingleOrderCard/SingleOrderCard";
const Orders = () => {
  const { userState } = useAuth();
  return (
    <div className="orders-container">
      <div className="orders-heading">
        <h1>My Orders </h1>
      </div>
      <div className="orders-subheading">
        <h3>Current Orders: </h3>
      </div>
      <div className="orders-wrapper">
        {userState.orders.map((order) => {
          return <SingleOrderCard order={order} key={order._id} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
