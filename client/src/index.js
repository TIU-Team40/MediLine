import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import CartState from "./context/Cart/CartState";
import { AuthProvider } from "./context/Auth/AuthContext";
import { MedicineProvider } from "./context/Medicine/MedicineContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <MedicineProvider>
          <CartState>
            <App />
          </CartState>
        </MedicineProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
