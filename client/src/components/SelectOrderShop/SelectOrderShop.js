import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./SelectOrderShop.css";
import "../../styles/global.css";
import CartContext from "../../context/Cart/CartContext";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
const SelectOrderShop = ({ shops, product }) => {
  const [cartButton, setCartButton] = useState(false);
  const handleAddToCart = () => {
    setCartButton(true);
    addToCart(product._id);
  };
  const {
    addToCart,
    removeItem,
    totalItem,
    totalAmount,
    increment,
    decrement,
    cartItems,
  } = useContext(CartContext);
  return (
    <div className="select-order-shop-container">
      <div className="select-order-shop-wrapper">
        {shops.slice(0, 3).map((shops) => {
          return (
            <div className="shop-order-container">
            <div className="shop-order-details">

              <div className="shop-order-title">{shops.name}</div>
              <div className="shop-order-address">{shops.address}</div>
            </div>
              <div className="add-to-cart-button">
                {cartButton ? (
                  <Link to="/cart">
                    <button
                      type="button"
                      className="add-to-cart"
                      onClick={() => setCartButton(false)}
                    >
                     <span>Go to Cart</span> <BsFillCartCheckFill />
                    </button>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="add-to-cart"
                    onClick={handleAddToCart}
                  >
                    <span>Add to Cart</span> <BsFillCartPlusFill />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectOrderShop;
