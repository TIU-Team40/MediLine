import React, {useState} from 'react'
import './AddNewAddress.css'
import '../../styles/global.css'
import {GrFormClose} from 'react-icons/gr'

const AddNewAddress = ({info,setAddNewAddressButton }) => {
    
  return (
    <div className="ana_edituserprofile-background">
       <div className="ana_edituserprofile-wrapper">
           <div className="ana_edituserprofile-header">
           <h1>Edit my address: </h1>
            <GrFormClose size="2em" className='ana_edituserprofile-close-icon' onClick={()=>setAddNewAddressButton(false)}/>
           </div>
           
           <form action="/" className='ana_edituser-form'>
               <div className="ana_edituser-form-container">

               <label htmlFor="addressLine1">Address Line 1 : </label>
               <input type="text"  />
               </div>
               <div className="ana_edituser-form-container">

               <label htmlFor=" addressLine2">Address Line 2 : </label>
               <input type="text"  />
               </div>
               <div className="ana_edituser-form-container ">

               <label htmlFor="pincode">Pincode : </label>
               <input type="pincode"  />
               </div>
               <div className="ana_edituser-form-container">

               <label htmlFor="state">State : </label>
               <input type="text" value={info.state} disabled/>
               </div>
               <div className="ana_edituser-form-container">

               <label htmlFor="phone">Phone : </label>
               <input type="number" />
               </div>
           </form>
                
                <div className="ana_save-button">
                    <button type="button">
                        Save
                    </button>
                </div>
       </div>
    </div>
  )
}

    export default AddNewAddress