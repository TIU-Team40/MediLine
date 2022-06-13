import React, {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { useAuth } from "../Auth/AuthContext";

const MedicineContext = createContext();

export const useMedicine = () => useContext(MedicineContext);

export const MedicineProvider = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState(
    localStorage.getItem("location") || "Laketown"
  );
  const [currentPharmacies, setCurrentPharmacies] = useState([]);
  const { pharmacies } = useAuth();

  useEffect(() => {
    const updatedPharmacies = pharmacies.filter(
      (pharmacy) => pharmacy.area === currentLocation
    );
    setCurrentPharmacies(updatedPharmacies);
  }, [pharmacies]);

  useEffect(() => {
    const updatedPharmacies = pharmacies.filter(
      (pharmacy) => pharmacy.area === currentLocation
    );
    setCurrentPharmacies(updatedPharmacies);
  }, [currentLocation]);

  return (
    <MedicineContext.Provider
      value={{
        currentLocation,
        setCurrentLocation,
        currentPharmacies,
        setCurrentPharmacies,
      }}
    >
      {children}
    </MedicineContext.Provider>
  );
};
