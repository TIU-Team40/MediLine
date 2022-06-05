import React from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import './styles/global.css'
import ProductListing from "./pages/ProductListing/ProductListing";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Consultadocter from "./pages/ConsultADocteer/ConsultAdocter";
function App() {
  return (
    <div className="container">
      <Navbar />
       <Routes>

         <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<ProductListing/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/consult"element={<Consultadocter />}/>
       </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
