import React from "react";
import { useContext, useState } from "react";
import classes from "./LargeCard.module.css";
import "../../styles/global.css";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";
import CartContext from "../../context/Cart/CartContext";
import CardQty from "../CartQty/CartQty";
import { Link, useNavigate } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";

const LargeCard = ({ data }) => {
  const { addToCart, removeItem, cartItems } = useContext(CartContext);
  const [addToCartBtn, setAddToCartBtn] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={classes.largeCardContainer}>
      <div className={classes.largeCardWrapper}>
        <div className={classes.largeCardImageWrapper}>
          <Link to={`/product/${data._id}`}>
            <div className={classes.largeCardImage}>
              <img src={data.picture} alt="product image" />
            </div>
          </Link>
        </div>
        <div className={classes.largeCardContent}>
          <div className={classes.largeCardTitle}>
            <h3> {data.name}</h3>{" "}
          </div>
          <div className={classes.largeCardSmallDesc}>{data.description}</div>
          {/* <div className={classes.largeCardDesc}>{data.bigDescription}</div> */}
          <div className={classes.largeCardPrice}>
            <p> ₹{data.price}</p>
          </div>
        </div>
      </div>

      {/* <div className={classes.cartButton}>
                {
                  cartItems.some(p =>p._id === data._id) ? (
                    
                    <button type="button" className={classes.removeCart} onClick={() => removeItem(data._id)}> Remove from Cart
                    <BsFillCartDashFill className={classes.cartIcon}/> </button>
                    ):(
                      <button type="button" className={classes.addCart} onClick={()=> addToCart(data)}> Add to Cart 
                      <BsFillCartPlusFill className={classes.cartIcon}/> </button>  
                      
                      )
                      
                    }
                  </div> */}
    </div>
  );
};

export default LargeCard;
