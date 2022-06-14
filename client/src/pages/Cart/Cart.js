import React, { useState, useEffect } from "react";
import "./Cart.css";
import "../../styles/global.css";
import { useAuth } from "../../context/Auth/AuthContext";
import CartCards from "../../components/CartCards/CartCards";
import CartUserInfo from "../../components/CartUserInfo/CartUserInfo";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { SamePharmacy } from "../../utils/util";
import { proceedToPay } from "../../utils/razorpayCall";

const Cart = () => {
  const [bagValue, setBagValue] = useState(0);
  const [error, setError] = useState("");
  const { userState, userDispatch } = useAuth();
  const navigate = useNavigate();
  const discountValue = Math.round((bagValue * 10) / 100);
  const orderTotalValue = bagValue - Math.round((bagValue * 10) / 100);
  const pharmacyId =
    userState.cart.length > 0 && userState.cart[0].pharmacy._id;

  const paymentHandler = () =>
    SamePharmacy(userState.cart)
      ? proceedToPay(
          orderTotalValue,
          bagValue,
          discountValue,
          userState,
          userDispatch,
          navigate,
          pharmacyId
        )
      : setError("Please Select Medicines from single pharmacy.");

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
                return <CartCards product={product} key={product.id} />;
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
            {error !== "" && <h4 className="error-message">{error}</h4>}
            <button type="button" onClick={paymentHandler}>
              PAYMENT
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
