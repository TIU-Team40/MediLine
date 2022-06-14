import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/Auth/AuthContext";
import "./DiseaseDetails.css";

// Disease Data Format
// _id
// name
// picture
// medicines
// seasons

function DiseaseDetails() {
  const { medicineDisease } = useAuth();
  const { diseaseId } = useParams();
  //medicine.picture 
  //medicine.name
  
 
  // This is the disease to show in return
  const disease = medicineDisease.diseases.find(
    (disease) => disease._id === diseaseId
  );
  const {name, picture, medicines, seasons} = disease;

  return <div>

    {
      medicines.map((medicine)=>{

      })
    }

  </div>;
}

export default DiseaseDetails;
