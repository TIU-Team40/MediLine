import React, {useState} from 'react'
import './Inventory.css'
import '../../../styles/global.css'
import AddMedicineModal from '../../../components/AddMedicineModal/AddMedicineModal';
const Inventory = () => {
    const [addMedicine, setAddMedicine] = useState(false);
  return (
    <div className="inventory-container">
        <div className="inventory-add-medicine">
            <button type="button" onClick={()=>setAddMedicine(true)}>
               + Add Medicine
            </button>
        </div>
        {addMedicine && <AddMedicineModal setAddMedicine={setAddMedicine}/>}


    </div>
  )
}

export default Inventory