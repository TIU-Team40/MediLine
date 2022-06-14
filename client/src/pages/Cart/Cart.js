import React, { useState, useEffect } from "react";
import "./Cart.css";
import "../../styles/global.css";
import { useAuth } from "../../context/Auth/AuthContext";
import CartCards from "../../components/CartCards/CartCards";
import { searchBarTest, userInfo } from "../../dummy_data";
import CartUserInfo from "../../components/CartUserInfo/CartUserInfo";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
const Cart = () => {
  const [bagValue, setBagValue] = useState(0);
  const { userState, userDispatch } = useAuth();

  useEffect(() => {
    setBagValue(
      userState.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [userState.cart]);
  return (
    <div className="cart-container">
      {userState.cart.length === 0 ? (
        <div className="empty-cart">
          <h1> Your cart is empty.</h1>
          <Link to="/">
            <h2>
              Add items to your cart
              <BiRightArrowAlt size="1.6em" className="arrow-icon" />
            </h2>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-heading">
            <h1>My Cart</h1>
            <h2>Total items : {userState.cart.length}</h2>
          </div>
          <div className="cart-wrapper">
            <div className="cart-products-container">
              {userState.cart.map((product) => {
                return <CartCards key={product.id} product={product} />;
              })}
            </div>
            <div className="cart-information-container">
              <CartUserInfo information={userState} />
            </div>
          </div>

          <div className="checkout-btn">
            <div className="subtotal">
              <span>Subtotal : </span>
              <span>₹{bagValue} </span>
            </div>
            <button type="button">CHECKOUT</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
