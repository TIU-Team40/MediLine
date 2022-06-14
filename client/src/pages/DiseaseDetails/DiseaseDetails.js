import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/Auth/AuthContext";
import "./DiseaseDetails.css";
import "../../styles/global.css";
import LocationFinder from "../../components/LocationFinder/LocationFinder";
import SearchBar from "../../components/SearchBar/SearchBar";
import { searchBarTest } from "../../dummy_data";
import { Link } from "react-router-dom";

// Disease Data Format
// _id
// name
// picture
// medicines
// seasons

function DiseaseDetails() {
  const { medicineDisease } = useAuth();
  const medicineDiseaseArray = [
    ...medicineDisease.medicines,
    ...medicineDisease.diseases,
  ];
  const navigate=useNavigate();
  
  const { diseaseId } = useParams();
  //medicine.picture
  //medicine.name

  // This is the disease to show in return
  const disease = medicineDisease.diseases.find(
    (disease) => disease._id === diseaseId
  );
  const { name, picture, medicines, seasons } = disease;

  return (
    <div className="disease-detail-container">
      <div className="product-detail-header">
        <LocationFinder />
        <SearchBar
          data={medicineDiseaseArray}
          placeholder="Seach for diseases / medicines"
        />
      </div>
      <div className="product-main-content">
        <div>
          <div className="image-container">
            <img src={picture} className="product-detail-image" />
          </div>
          <div className="small-images-container"></div>
        </div>

        <div className="product-detail-desc-disease">
          <h1>{name}</h1>

          <h4> Common occurence during seasons: </h4>
          <p> {seasons.map((seasons)=>
          {
            return <p> {seasons} </p>
          })} </p>

          <h4>Related Medicines: </h4>
          <div className="select-your-medicine">
            {medicines.map((medicine) => {
              
               
                return (
                  
                   <Link to = {`/product/${medicine._id}`} className={'disease-related-medicine'}>
                    <div className="disease-medicine-image">
                      <img src={medicine.picture} alt="medicine picture" />
                    </div>
                    <div className="disease-medicine-content">
                   
                    <div className="disease-medicine-name">
                      {medicine.name}
                    </div>
                    
                    <div className="disease-medicine-name">
                    
                     <strong>MRP: </strong> ₹{medicine.price}
                    </div>
                    </div>
                  </Link>
                
                )
                

            })}
           
          </div>
        </div>
      </div>



      
    </div>
  );
}

export default DiseaseDetails;
