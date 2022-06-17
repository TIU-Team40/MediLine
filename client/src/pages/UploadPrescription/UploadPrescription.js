import React, { useState } from "react";
import "./UploadPrescription.css";
import "../../styles/global.css";
import { shops } from "../../dummy_data";
import { createNotification } from "../../networkCalls/userCalls";
import { useMedicine } from "../../context/Medicine/MedicineContext";
import { useNavigate } from "react-router-dom";
const UploadPrescription = () => {
  const [prescriptionFile, setPrescriptionFile] = useState();
  const [textContent, setTextcontent] = useState("");
  const { currentPharmacies } = useMedicine();
  const [selectedPharmacy, setSelectedPharmacy] = useState(
    currentPharmacies[0].name
  );
  const navigate = useNavigate();

  function getPharmacy(pharmacyName) {
    return currentPharmacies
      .find((pharmacy) => pharmacy.name === pharmacyName)
      ._id.toString();
  }

  function handleImageSelection(e) {
    if (e.currentTarget && e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      setPrescriptionFile(file);
    }
  }
  async function sendHandler() {
    console.log(
      getPharmacy(selectedPharmacy),
      "Upload_Prescription",
      textContent,
      prescriptionFile
    );
    const data = await createNotification({
      toUserId: getPharmacy(selectedPharmacy),
      type: "Upload_Prescription",
      text: textContent,
      prescription: prescriptionFile,
    });
    if (data.success) {
      setPrescriptionFile("");
      setSelectedPharmacy("");
      setTextcontent("");
      navigate("/");
    }
  }
  return (
    <div className="upload-pres-container">
      <h1>Upload Prescription</h1>
      <div className="upload-pres-wrapper">
        <form>
          <div className="upload-file">
            <label htmlFor="Upload your prescription">
              Upload your prescription:
            </label>
            <input
              type="file"
              placeholder="Upload your prescription"
              required
              onChange={handleImageSelection}
            />
          </div>
          <div className="pres-textarea">
            <label htmlFor="Upload your prescription">
              Write a message for the shop owner:{" "}
            </label>
            <input
              type="textarea"
              placeholder="Type..."
              value={textContent}
              onChange={(e) => setTextcontent(e.target.value)}
            />
          </div>
        </form>
        <div className="select-shop-dropdown">
          Select a shop:
          <select
            value={selectedPharmacy}
            onChange={(e) => setSelectedPharmacy(e.target.value)}
          >
            {currentPharmacies.map((pharmacy) => {
              return <option key={pharmacy._id}>{pharmacy.name}</option>;
            })}
          </select>
        </div>

        <div className="select-button">
          <button type="button" onClick={sendHandler}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPrescription;
