import React, {useState} from 'react'
import './AddressUser.css'
import '../../styles/global.css'
import AddNewAddress from '../AddNewAddress/AddNewAddress'
const AddressUser = ({info, heading, primary_address, disabled }) => {
    const [editButton, setEditButton] = useState(false)
  return (

      <div className="address-user-container">


    <h3>{heading} </h3>
        <div className="user-address-cards " id={primary_address}>
          <div className="user-address-content">


            <div className="user-address-name">
              <h4>
                <span>
                {info.firstName}
                </span>
                <span>
              {info.lastName}
                </span>
              </h4>
            </div>
            <div className="user-address-address1">
            <span>Address Line 1 : </span>{info.addressLine1}
            </div>
            <div className="user-address-address2">
            <span>Address Line 2: </span>{info.addressLine2}
            </div>
            <div className="user-address-pincode">
            <span>Pincode : </span>{info.pinCode}
            </div>
            <div className="user-address-state">
            <span>State : </span>{info.state}
            </div>
            <div className="user-phone-number">
               <span>Contact : </span>
                {info.phoneNumber}
            </div>

            <div className="user-address-buttons">
              <button type="button" className='edit-button' onClick={()=>setEditButton(true)} > Edit </button>
              <button type="button" className='remove-button-red'> Remove </button>
            <div className="set-as-primary" id={disabled}>
                <button type='button'>
                    Set as primary
                </button>
            </div>
            </div>
          </div>
        </div>
        {editButton && <AddNewAddress info={info} setAddNewAddressButton={setEditButton}/>}
      </div>
  )
}

export default AddressUser