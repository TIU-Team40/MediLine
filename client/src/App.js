import React from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import "./styles/global.css";
import ProductListing from "./pages/ProductListing/ProductListing";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Orders from "./pages/Orders/Orders";
import LogIn from "./pages/LogIn/LogIn";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import {
  searchBarTest,
  singleProduct,
  newSearchBarTest,
  userInfo,
} from "./dummy_data";
import SelectShop from "./pages/SelectShop/SelectShop";
import CreateAnAccount from "./components/CreateAnAccount/CreateAnAccount";
import CreateAnAccountShop from "./components/CreateAnAccountShop/CreateAnAccountShop";
import UploadPrescription from "./pages/UploadPrescription/UploadPrescription";
import UserProfile from "./pages/UserProfile/UserProfile";
import UserAddress from "./pages/UserAddress/UserAddress";
import ShopNotification from "./pages/ShopOwner/ShopNotification/ShopNotification";
import NavbarSwitcher from "./components/NavbarSwitcher/NavbarSwitcher";
import Inventory from "./pages/ShopOwner/Inventory/Inventory";
import ShopOrders from "./pages/ShopOwner/ShopOrders/ShopOrders";
import ShopProfile from "./pages/ShopOwner/ShopProfile/ShopProfile";
function App() {
  return (
    <div className="container">
      <NavbarSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/product/:_id"
          element={
            <ProductDetails
              product={singleProduct}
              similarProducts={newSearchBarTest}
              
            />
          }
        />
        <Route path="/selectshop" element={<SelectShop />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/orders" element={<Orders orders={searchBarTest} />} />
        <Route
          path="/createanaccount"
          element={
            <CreateAnAccount
              heading="Create an account as a user"
              footer="Create an account as a shopowner"
              link_to="/createanaccountshop"
            />
          }
        />
        <Route
          path="/createanaccountshop"
          element={
            <CreateAnAccountShop
              heading="Create an account as a shopowner"
              footer="Create an account as a user"
              link_to="/createanaccount"
            />
          }
        />
        <Route path="/uploadprescription" element={<UploadPrescription />} />
        <Route path="/userprofile" element={<UserProfile info={userInfo} />} />
        <Route path="/useraddress" element={<UserAddress info={userInfo} />} />
        <Route path='/shopnotification' element={<ShopNotification/>}/>
        <Route path='/shopinventory' element={<Inventory/>}/>
        <Route path='/shoporders' element={<ShopOrders/>}/>
        <Route path='/shopprofile' element={<ShopProfile/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
