import React, {useState} from 'react'
import './UserAddress.css'
import '../../styles/global.css'
import AddressUser from '../../components/AddressUser/AddressUser'
import AddNewAddress from '../../components/AddNewAddress/AddNewAddress'
import { blank } from '../../dummy_data'
const UserAddress = ({info}) => {
  const [addNewAddressButton, setAddNewAddressButton] = useState(false)
  return (
    <div className="user-address-container">
      <h1>My Address</h1>
      <div className="user-address-wrapper">
        
        <AddressUser info={info} primary_address='primary-address' disabled='disabled' heading='Primary Address : ' />

        <AddressUser info={info} heading='Other Addresses : '/>
      </div>
      <div className="add-new-address" onClick={()=>setAddNewAddressButton(true)}>
        
        <button type='button'>
        + Add New Address
          </button>
      </div>
      {addNewAddressButton && <AddNewAddress info={blank} setAddNewAddressButton={setAddNewAddressButton}/>}
    </div>
  )
}

export default UserAddress