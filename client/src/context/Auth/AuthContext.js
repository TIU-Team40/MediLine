import React, { useContext, createContext, useReducer, useState } from "react";
import { userReducer } from "./UserReducer";
import { pharmacyReducer } from "./PharmacyReducer";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    userId: "",
    type: "",
    name: "",
    email: "",
    contactNo: "",
    addresses: [],
    orders: [],
    cart: [],
    notifications: [],
  });
  const [pharmacyState, pharmacyDispatch] = useReducer(pharmacyReducer, {
    pharmacyId: "",
    type: "",
    name: "",
    email: "",
    contactNo: "",
    address: "",
    pinCode: "",
    ratings: "",
    orders: [],
    inventory: [],
    notifications: [],
  });

  const [networkLoader, setNetworkLoader] = useState(false);
  const [medicineDisease, setMedicineDisease] = useState({
    medicines: [],
    diseases: [],
  });
  const [pharmacies, setPharmacies] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        userState,
        userDispatch,
        pharmacyState,
        pharmacyDispatch,
        networkLoader,
        setNetworkLoader,
        medicineDisease,
        setMedicineDisease,
        pharmacies,
        setPharmacies,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
