import { useContext, useReducer, useEffect } from "react";
import React from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, INCREMENT, DECREMENT, GET_TOTAL, GET_TOTAL_AMOUNT } from "../Types";

const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
    totalAmount: 0,
    totalItem: 0,
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const increment = (id) =>
  {
    dispatch({type: INCREMENT, payload: id});
  }
  const decrement = (id) =>
  {
    dispatch({type: DECREMENT, payload: id})
  }

  useEffect(() => {
      dispatch({type: GET_TOTAL})
      
  }, [state.cartItems] )
  

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        increment, 
        decrement,
        totalItem: state.totalItem,
        totalAmount: state.totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;

export const CartStateContext = () =>
{
    return useContext(CartState);
}