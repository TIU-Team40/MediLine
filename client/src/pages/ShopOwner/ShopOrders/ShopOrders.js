import React from "react";
import "./ShopOrders.css";
import "../../../styles/global.css";
import { searchBarTest, userInfo } from "../../../dummy_data";
import ShopSingleOrder from "../../../components/ShopSingleOrder/ShopSingleOrder";
import { useAuth } from "../../../context/Auth/AuthContext";
const ShopOrders = () => {
  const { pharmacyState } = useAuth();
  return (
    <div className="shop-orders-container">
      {pharmacyState.orders.length > 0 ? <h1>Orders </h1> : <h1>No Orders Yet</h1>}

      <div className="shop-orders-wrapper">
        <h4>Current Orders: </h4>
        {pharmacyState.orders.map((order) => {
          return (
            <ShopSingleOrder
              order={order}
              disabled="disabled"
              order_Shipped={false}
              key={order._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShopOrders;
