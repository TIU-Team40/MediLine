import React from "react";

import "./App.css";
<<<<<<< HEAD
import Contact from "./components/Contact Us/ContactUs";
import Founder from "./components/founder/Founder.js";
=======
>>>>>>> aritra

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import './styles/global.css'
import ProductListing from "./pages/ProductListing/ProductListing";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      
      <Founder/>
=======
    <div className="container">
      <Navbar />
       <Routes>

         <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<ProductListing/>}/>
          <Route path="/cart" element={<Cart/>}/>
       </Routes>
      <Footer/> 
>>>>>>> aritra
    </div>
  );
}

export default App;
