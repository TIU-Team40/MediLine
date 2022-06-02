import React, {useContext} from 'react'
import './CartQty.css'
import '../../styles/global.css'
import {BiTrash} from 'react-icons/bi'
import CartContext from '../../context/Cart/CartContext'
const CartQty = ({product}) => {
  
    const {increment,  removeItem, decrement} = useContext (CartContext);
  return (
    <div className="cart-qty-container">
        <div className="remove-button" onClick={() => removeItem(product._id)}>
            <BiTrash size="1.75em"/>
        </div>
        <button className="cart-qty-minus" onClick={()=> decrement(product._id)}>-</button>
        <div className="cart-qty-number">{product.quantity}</div>
        <button className="cart-qty-plus" onClick={()=> increment(product._id)}>+</button>

    </div>
  )
}

export default CartQty