import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./SelectOrderShop.css";
import "../../styles/global.css";
import { useAuth } from "../../context/Auth/AuthContext";
import { addToCart } from "../../networkCalls/userCalls";
import { CheckItem, CurrentShop } from "../../utils/util";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
const SelectOrderShop = ({ shops, product }) => {
  const [isAvailable, setIsAvailable] = useState(true);
  const handleAddToCart = async (shop) => {
    const price = shop.inventory.find((item) => item.medicine === product._id)
      .price;
    userDispatch({
      type: "ADD_TO_CART",
      payload: {
        medicine: product,
        quantity: 1,
        pharmacy: shop,
        price,
      },
    });
    await addToCart(product._id, shop._id, price);
  };
  const { userState, userDispatch } = useAuth();
  return (
    <div className="select-order-shop-container">
      <div className="select-order-shop-wrapper">
        {shops.slice(0, 3).map((shop) => {
          return (
            <div className="shop-order-container">
              <div className="shop-order-details">
                <div className="shop-order-title">{shop.name}</div>
                <div className="shop-order-address">{shop.address}</div>
                <div className="shop-order-panda">
                  <div className="shop-order-price">
                    <strong>Price: </strong>₹
                    {
                      shop.inventory.find(
                        (item) => item.medicine === product._id
                      ).price
                    }
                  </div>
                  <div className="shop-order-availability">
                    {isAvailable ? (
                      <div className="available">Available</div>
                    ) : (
                      <div className="unavailable">Unavailable</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="add-to-cart-button">
                {CheckItem(userState.cart, product._id) ? (
                  CurrentShop(userState.cart, product._id, shop._id) && (
                    <Link to="/cart">
                      <button type="button" className="go-to-cart">
                        <span>Go to Cart</span> <BsFillCartCheckFill />
                      </button>
                    </Link>
                  )
                ) : (
                  <button
                    type="button"
                    className="add-to-cart"
                    onClick={() => handleAddToCart(shop)}
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
