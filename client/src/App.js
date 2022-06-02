<<<<<<< HEAD
import React from "react"
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="App">
      {/* Welcome To MediLine */}
=======
import React from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import './styles/global.css'
import ProductListing from "./pages/ProductListing/ProductListing";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
function App() {
  return (
    <div className="container">
      <Navbar />
       <Routes>

         <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<ProductListing/>}/>
          <Route path="/cart" element={<Cart/>}/>
       </Routes>
      <Footer/> 
>>>>>>> origin/main
    </div>
  );
}

//export default App;
