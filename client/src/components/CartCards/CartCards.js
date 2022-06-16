import React, { useContext } from "react";
import classes from "./CartCards.module.css";
import "../../styles/global.css";
import CardQty from "../CartQty/CartQty";
const CartCards = ({ product }) => {
  return (
    <div className={classes.cartCardContainer}>
      <div className={classes.cartCardWrapper}>
        <div className={classes.cartCardImage}>
          <img src={product.medicine.picture} alt="Product Image" />
        </div>
        <div className={classes.cartCardContent}>
          <div className={classes.cartCardTitle}>
            <h3>{product.medicine.name}</h3>
          </div>
          <div className={classes.cartCardSmallDesc}>
            {product.medicine.description}
          </div>
          {/* <div className={classes.cartCardDesc}>
            {product.bigDescription}
          </div> */}
          <div className={classes.cartCardPrice}>
            <p>
              {" "}
              {product.quantity} x ₹{product.price}{" "}
            </p>

            <div className="cardQty">
              <CardQty key={product.id} product={product} />
            </div>
            <br />
          </div>
          <div className={classes.pharmacyInfo}>
            <p>
              Ordering from:
              <strong> {product.pharmacy.name} </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCards;
