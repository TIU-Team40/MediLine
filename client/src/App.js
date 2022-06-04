import React from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import './styles/global.css'
import ProductListing from "./pages/ProductListing/ProductListing";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Orders from './pages/Orders/Orders'
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import { searchBarTest, singleProduct, newSearchBarTest } from "./dummy_data";
import SelectShop from "./pages/SelectShop/SelectShop";
function App() {
  return (
    <div className="container">
      <Navbar />
       <Routes>

         <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<ProductListing/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/product/' element ={<ProductDetails product={singleProduct} similarProducts={newSearchBarTest}/>}/>
          <Route path='/selectshop' element={<SelectShop/>}/>
          <Route path="/orders" element = {<Orders orders={searchBarTest}/>}/>
       </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
