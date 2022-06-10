import React from 'react'
import './UploadPrescription.css'
import '../../styles/global.css'
import { shops } from '../../dummy_data'
const UploadPrescription = () => {
  return (
    <div className="upload-pres-container">
        <h1>Upload Prescription</h1>
       <div className="upload-pres-wrapper" >
            <form action="/" id="form1">
                <div className="upload-file">

                <label htmlFor="Upload your prescription">Upload your prescription:</label>
                <input type="file" placeholder="Upload your prescription" required />
                </div>
                <div className="pres-textarea">

                <label htmlFor="Upload your prescription">Write a message for the shop owner: </label>
                <input type="textarea" placeholder='Type...' />
                </div>
            </form>
            <div className="select-shop-dropdown">
                Select a shop:  
                <select>
                    {shops.map((shops=> {
                        return(
                            <>
                            <option value="#1">{shops.name}</option>
                            </>

                        )
                    }))}

                </select>
            </div>

                    <div className="select-button">
                        <button type="button" form="form1">
                            Send
                        </button>
                    </div>
       </div>
    </div>
  )
}

export default UploadPrescription