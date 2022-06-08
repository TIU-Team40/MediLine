import React from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import './styles/global.css'
import ProductListing from "./pages/ProductListing/ProductListing";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Orders from './pages/Orders/Orders'
import LogIn from "./pages/LogIn/LogIn";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import { searchBarTest, singleProduct, newSearchBarTest } from "./dummy_data";
import SelectShop from "./pages/SelectShop/SelectShop";
import CreateAnAccount from "./components/CreateAnAccount/CreateAnAccount";
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
          <Route path='/login' element={<LogIn/>}/>
          <Route path="/orders" element = {<Orders orders={searchBarTest}/>}/>
          <Route path='/createanaccount' element={<CreateAnAccount heading="Create an account as a user" footer="Create an account as a shopowner" link_to="/createanaccountshop"/>}/>
          <Route path='/createanaccountshop' element={<CreateAnAccount heading="Create an account as a shopowner" footer="Create an account as a user" link_to="/createanaccount"/>}/>
       </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
