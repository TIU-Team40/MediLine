import React, { useContext } from "react";
import "./CartQty.css";
import "../../styles/global.css";
import { BiTrash } from "react-icons/bi";
import CartContext from "../../context/Cart/CartContext";
import { useAuth } from "../../context/Auth/AuthContext";
import {
  deleteFromCart,
  updateCartProductQuantity,
} from "../../networkCalls/userCalls";
const CartQty = ({ product }) => {
  const { userDispatch } = useAuth();
  // const {increment,  removeItem, decrement} = useContext (CartContext);
  async function increaseQuantityHandler() {
    userDispatch({ type: "INC_QTY", payload: product.medicine._id });
    await updateCartProductQuantity(product.medicine._id, product.quantity + 1);
  }
  async function decreaseQuantityHandler() {
    userDispatch({ type: "DEC_QTY", payload: product.medicine._id });
    await updateCartProductQuantity(product.medicine._id, product.quantity - 1);
  }
  async function removeFromCartHandler() {
    userDispatch({ type: "REMOVE_FROM_CART", payload: product.medicine._id });
    await deleteFromCart(product.medicine._id);
  }
  return (
    <div className="cart-qty-container">
      <div className="remove-icon" onClick={removeFromCartHandler}>
        <BiTrash size="1.75em" />
      </div>
      <button className="cart-qty-minus" onClick={decreaseQuantityHandler}>
        -
      </button>
      <div className="cart-qty-number">{product.quantity}</div>
      <button className="cart-qty-plus" onClick={increaseQuantityHandler}>
        +
      </button>
    </div>
  );
};

export default CartQty;
