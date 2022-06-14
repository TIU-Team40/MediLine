import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import "./styles/global.css";
import ProductListing from "./pages/ProductListing/ProductListing";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Orders from "./pages/Orders/Orders";
import LogIn from "./pages/LogIn/LogIn";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import loadInitialData from "./utils/loadInitialData";
import { useAuth } from "./context/Auth/AuthContext";
import { Loader } from "./components/Loader/Loader";
import { PrivateRoute } from "./utils/PrivateRoute";
import DiseaseDetails from "./pages/DiseaseDetails/DiseaseDetails";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const {
    userState,
    userDispatch,
    pharmacyDispatch,
    networkLoader,
    medicineDisease,
    setMedicineDisease,
    pharmacies,
    setPharmacies,
  } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    loadInitialData(
      userDispatch,
      pharmacyDispatch,
      setMedicineDisease,
      setPharmacies,
      navigate,
      setIsLoading
    );
  }, []);

  if (isLoading) {
    return (
      <>
        <NavbarSwitcher />
        <div className="loader">
          <Loader />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="container">
      <NavbarSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/:_id"
          element={<ProductDetails similarProducts={newSearchBarTest} />}
        />
        <Route path="/disease/:diseaseId" element={<DiseaseDetails />} />
        <Route path="/selectshop" element={<SelectShop />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
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
        <Route
          path="/uploadprescription"
          element={
            <PrivateRoute>
              <UploadPrescription />
            </PrivateRoute>
          }
        />
        <Route
          path="/userprofile"
          element={
            <PrivateRoute>
              <UserProfile info={userInfo} />
            </PrivateRoute>
          }
        />
        <Route
          path="/useraddress"
          element={
            <PrivateRoute>
              <UserAddress info={userInfo} />
            </PrivateRoute>
          }
        />
        <Route
          path="/shopnotification"
          element={
            <PrivateRoute>
              <ShopNotification />
            </PrivateRoute>
          }
        />
        <Route
          path="/shopinventory"
          element={
            <PrivateRoute>
              <Inventory />
            </PrivateRoute>
          }
        />
        <Route
          path="/shoporders"
          element={
            <PrivateRoute>
              <ShopOrders />
            </PrivateRoute>
          }
        />
        <Route
          path="/shopprofile"
          element={
            <PrivateRoute>
              <ShopProfile />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
