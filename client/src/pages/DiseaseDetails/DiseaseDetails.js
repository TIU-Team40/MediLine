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

  // This is the disease to show in return
  const disease = medicineDisease.diseases.find(
    (disease) => disease._id === diseaseId
  );
  return <div>DiseaseDetails</div>;
}

export default DiseaseDetails;
