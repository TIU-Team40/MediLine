import React, {useState} from 'react'
import './Inventory.css'
import '../../../styles/global.css'
import { searchBarTest } from '../../../dummy_data';
import AddMedicineModal from '../../../components/AddMedicineModal/AddMedicineModal';
import InventoryList from '../../../components/InventoryList/InventoryList';
const Inventory = () => {
    const [addMedicine, setAddMedicine] = useState(false);
    const isInventoryEmpty = false;
  return (
    <div className="inventory-container">
      <div className="inventory-header">
        <h1>Inventory</h1>
      </div>
      <div className="inventory-wrapper">

        <div className="inventory-add-medicine">
            <button type="button" onClick={()=>setAddMedicine(true)}>
               + Add Medicine
            </button>
        </div>
        {
          isInventoryEmpty ?
          (
            <div>

            </div>
          ):(
            <InventoryList data={searchBarTest} setAddMedicine={setAddMedicine}/>
          )
        }

      </div>
        {addMedicine && <AddMedicineModal setAddMedicine={setAddMedicine}/>}


    </div>
  )
}

export default Inventory