// import { toast } from "react-toastify";
import { userDashboard } from "../networkCalls/userCalls";
import {
  pharmaciesCall,
  pharmacyDashboard,
} from "../networkCalls/pharmacyCalls";
import { getMedicineAndDisease } from "../networkCalls/medicineCalls";

export default async function loadInitialData(
  userDispatch,
  pharmacyDispatch,
  setMedicineDisease,
  setPharmacies,
  navigate,
  setIsLoading
) {
  const session = JSON.parse(localStorage.getItem("session"));
  const type = JSON.parse(localStorage.getItem("type"));
  const data = await getMedicineAndDisease();
  if (data.success) {
    setMedicineDisease({
      medicines: data.medicines,
      diseases: data.diseases,
    });
  }
  // else toast("Cannot connect to server.");

  if (session && session.userId) {
    if (type === "user") {
      const userData = await userDashboard();
      const pharmacies = await pharmaciesCall();
      if (!userData.success || !pharmacies.success) {
        userDispatch({ type: "END_USER_SESSION" });
        navigate("/login", { replace: true });
      } else {
        setPharmacies(pharmacies.pharmacies);
        userDispatch({ type: "START_USER_SESSION", payload: userData.user });
      }
    } else if (type === "pharmacy") {
      const pharmacyData = await pharmacyDashboard();
      if (pharmacyData.success === false) {
        pharmacyDispatch({ type: "END_PHARMACY_SESSION" });
        navigate("/login", { replace: true });
      } else
        pharmacyDispatch({
          type: "START_PHARMACY_SESSION",
          payload: pharmacyData.pharmacy,
        });
    }
  }
  setIsLoading(false);
}
