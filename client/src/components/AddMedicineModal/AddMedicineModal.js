import React from "react";
import "./AddMedicineModal.css";
import "../../styles/global.css";
import { GrFormClose } from "react-icons/gr";
import SearchBar from "../SearchBar/SearchBar";
import { searchBarTest } from "../../dummy_data";
import LargeCard from "../LargeCard/LargeCard";
import CartQty from "../CartQty/CartQty";
import { useState } from "react";
const AddMedicineModal = ({ setAddMedicine }) => {
    const [amQuantity, setAmQuantity] = useState(1);
    const handleIncrement = () =>{
        setAmQuantity(prevCount => prevCount + 1)
    }
    const handleDecrement = () =>{
        if(amQuantity >= 2 )
        {

            setAmQuantity(prevCount => prevCount - 1)
        }
        else
        {
            setAmQuantity(prevCount => prevCount + 0)
        }
    }
  return (
    <div className="am_modal-background">
      <div className="am_edituserprofile-wrapper">
        <div className="am_edituserprofile-header">
          <h1>Add Medicine </h1>
          <GrFormClose
            size="2em"
            className="am_edituserprofile-close-icon"
            onClick={() => setAddMedicine(false)}
          />
        </div>
        <div className="am_content-wrapper">
          <SearchBar
            placeholder="Search for a medicine..."
            data={searchBarTest}
          />
          {searchBarTest.slice(0, 1).map((products) => {
            return <LargeCard data={products} />;
          })}

          <div className="am_select-quantity">
            <h3>Select Quantity to Add:</h3>
            <div className="am_quantity-div">
              <div className="am_decrement" >
                <button type="button" onClick={handleDecrement}>-</button>
              </div>
              <div className="am_quantity">{amQuantity}</div>
              <div className="am_increment">
                <button type="button"  onClick={handleIncrement}>+</button>
              </div>
            </div>
            <div className="add-medicine-button">

              
                    <button type="button"> Add Medicine </button>
                    
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMedicineModal;
