import React from "react";
import "./OrderCards.css";
import "../../styles/global.css";
import { MdArrowDownward } from "react-icons/md";
import Card from "../Card/Card";
const OrderCards = ({ data }) => {
  const { medicine, quantity, price } = data;
  return (
    <div className="order-cards-container">
      <div className="order-cards-card">
        <div className="card-image-wrapper">
          <img src={medicine.picture} alt="Order image" />
        </div>
        <div className="card-content">
          <div className="order-card-title">
            <h2>{medicine.name}</h2>
          </div>
          <div className="order-card-desc">
            <p>{medicine.description}</p>
          </div>
          <div className="quantity-and-price">
            <p>
              <strong>Quantity: </strong>
              {quantity} x <strong> ₹{price} </strong>
              <span>({medicine.perUnitQuantity} tables per strip)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCards;
