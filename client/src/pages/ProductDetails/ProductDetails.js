import React, { useState, useContext, useEffect } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import CartContext from "../../context/Cart/CartContext";
import { singleProduct } from "../../dummy_data";
import "./ProductDetails.css";
import "../../styles/global.css";
import { useParams } from "react-router-dom";
import { BsFillCartPlusFill, BsFillCartCheckFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import ProductPageCard from '../../components/ProductPageCard/ProductPageCard'
const ProductDetails = ({ product, similarProducts }) => {
 
  const [index, setIndex] = useState(0);
  const {
    addToCart,
    removeItem,
    totalItem,
    totalAmount,
    increment,
    decrement,
    cartItems,
  } = useContext(CartContext);
  const { _id } = useParams();
  const [cartButton, setCartButton] = useState(false)
  const handleAddToCart = () =>{
      setCartButton(true);
      addToCart(product._id);
  }
 
  return (
    <div>
      
          
          <div className="product-detail-container">
            <div>
              <div className="image-container">
                <img src={product.imageUrl} className="product-detail-image" />
              </div>
              <div className="small-images-container">
                {/* {imageUrl.map((item, i) => (
                        <img 
                        key={index}
                        src={imageUrl}
                        className={i==index ? 'small-image selected-image': 'small-image'}
                        onMouseEnter={() => setIndex(i)}
                        />
                    ))} */}
              </div>
            </div>

            <div className="product-detail-desc">
              <h1>{product.title}</h1>

              <h4> Details: </h4>
              <p> {product.bigDescription} </p>
              <div className="quantity">
                <h3> Quantity: </h3> 
                <p> 10 tablets </p>
              </div>
              <div className="additional-information">
                  <h3>Additional Information: </h3>
                  <p>
                      {product.additionalInfo}
                  </p>
              </div>
              <p className="price"> ₹{product.price}</p>
              <div className="buttons">
                  
              
                {cartButton ? (
                   

                    <Link to="/cart">

                    <button
                    type="button"
                    className="add-to-cart"
                    onClick={() =>setCartButton(false)}
                  >
                   
                    Go to Cart <BsFillCartCheckFill/>
                  </button>
                    </Link>
                    
                ): (

                <button
                  type="button"
                  className="add-to-cart"
                  onClick={handleAddToCart}
                >
                 
                  Add to Cart <BsFillCartPlusFill/>
                </button>
                )
                 }
                
               
                     
                
                 <Link to='/cart'>

                <button type="button" className="buy-now" onClick={()=> addToCart(product._id)}>
                  
                  Buy Now
                </button>
                 </Link>
              </div>
            </div>
          </div>
          <div className="maylike-products-wrapper">
                    <h2>Medicines similar to this: </h2>
                    
                        <div className="maylike-products-container track">
                            {similarProducts.map((item)=>
                            (
                                <ProductPageCard key={item._id} product={item}/>
                            ))}
                        </div>
                    </div>
                </div>
       
   
  );
};

export default ProductDetails;
