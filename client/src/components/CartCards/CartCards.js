import React, {useContext} from "react";
import classes from "./CartCards.module.css";
import "../../styles/global.css";
import CardQty from '../CartQty/CartQty'
import CartContext from "../../context/Cart/CartContext";
const CartCards = ({ product }) => {
  const {cartItems} = useContext(CartContext);
  return (
    <div className={classes.cartCardContainer}>
      <div className={classes.cartCardWrapper}>
        <div className={classes.cartCardImage}>
          <img src={product.imageUrl} alt="Product Image" />
        </div>
        <div className={classes.cartCardContent}>
          <div className={classes.cartCardTitle}><h3>{product.title}
              </h3></div>
          <div className={classes.cartCardSmallDesc}>{product.description}</div>
          <div className={classes.cartCardDesc}>
            {product.bigDescription}
          </div>
          <div className={classes.cartCardPrice}>
            <p> ₹{product.price*product.quantity} </p>
            <div className="cardQty">
              <CardQty key={product.id} product={product}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCards;
