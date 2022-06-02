import React, { useContext } from "react";
import "./Cart.css";
import "../../styles/global.css";
import CartContext from "../../context/Cart/CartContext";
import CartCards from "../../components/CartCards/CartCards";
import { searchBarTest, userInfo } from "../../dummy_data";
import CartUserInfo from "../../components/CartUserInfo/CartUserInfo";
import {BiRightArrowAlt} from 'react-icons/bi'
import { Link } from "react-router-dom";
const Cart = () => {
  const { addToCart, removeItem, cartItems, totalItem, totalAmount } = useContext(CartContext);

  return (
    <div className="cart-container">

      {
        cartItems.length===0 ? (
          <div className='empty-cart'>
             <h1> Your cart is empty.
               </h1>
               <Link to="/">

               <h2>Add items to your cart
                 <BiRightArrowAlt size="1.6em" className="arrow-icon"/>
               </h2>
               </Link>
              </div>
        ):
        (
        <>
        

      <div className="heading">
        <h1>My Cart</h1>
        <h2>Total items : {totalItem}</h2>
      </div>
      <div className="cart-wrapper">
        <div className="products-container">
      
          

      
              {cartItems.map((product) => {
                return <CartCards key={product.id} product={product} />;
              })}
          
        
        </div>
        <div className="information-container">
          <CartUserInfo  information={userInfo}/>
        </div>
      </div>
      
         
            
      

      <div className="checkout-btn">
          <div className="subtotal">
           
                
                  
                  <span>Subtotal : </span>
                  <span>
                  ₹{totalAmount} </span>
                 
                
             
           
          </div>
          <button type="button">
              CHECKOUT
          </button>
      </div>
      </>
        )
      }
      </div>
   
  );
};

export default Cart;
