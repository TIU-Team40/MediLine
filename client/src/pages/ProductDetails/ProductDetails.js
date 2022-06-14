import React, { useState, useContext, useEffect } from "react";

import CartContext from "../../context/Cart/CartContext";
import { singleProduct } from "../../dummy_data";
import "./ProductDetails.css";
import "../../styles/global.css";
import { useParams } from "react-router-dom";
import LocationFinder from'../../components/LocationFinder/LocationFinder'
import { Link } from "react-router-dom";
import ProductPageCard from "../../components/ProductPageCard/ProductPageCard";
import SelectOrderShop from "../../components/SelectOrderShop/SelectOrderShop";
import { shops } from "../../dummy_data";
import { useAuth } from "../../context/Auth/AuthContext";
import { useMedicine } from "../../context/Medicine/MedicineContext";
import { searchBarTest } from "../../dummy_data";
import SearchBar from "../../components/SearchBar/SearchBar";
const ProductDetails = ({ similarProducts }) => {
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
  const [cartButton, setCartButton] = useState(false);
  const { medicineDisease } = useAuth();
  const { currentPharmacies } = useMedicine();
  const medicine = medicineDisease.medicines.find(
    (medicine) => medicine._id === _id
  );
  const pharmacies = currentPharmacies.filter((pharmacy) => {
    if (pharmacy.inventory.find((item) => item.medicine === _id))
      return pharmacy;
  });

  return (
    <div>
      <div className="product-detail-container">
        <div className="product-detail-header">
          <LocationFinder/>
          <SearchBar data={searchBarTest} placeholder="Seach for diseases / medicines"/>
        </div>
        <div className="product-main-content">

      
        <div>
          <div className="image-container">
            <img src={medicine.picture} className="product-detail-image" />
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
          <h1>{medicine.name}</h1>

          <h4> Details: </h4>
          <p> {medicine.description} </p>
          <div className="quantity">
            <h3> Quantity: </h3>
            <p> {medicine.perUnitQuantity} tablets </p>
          </div>
          {/* <div className="additional-information">
            <h3>Additional Information: </h3>
            <p>{medicine.additionalInfo}</p>
          </div> */}
          <p className="price"> ₹{medicine.price}</p>

          <h4>Select a shop: </h4>
          <div className="select-your-shop">
            <SelectOrderShop shops={pharmacies} product={medicine} />
            <div className="buttons"></div>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>Medicines similar to this: </h2>

        <div className="maylike-products-container track">
          {similarProducts.map((item) => (
            <ProductPageCard key={item._id} product={item} />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
