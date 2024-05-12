import React, { useState } from 'react'
import "../styles/CheckOutForm.css"
const CheckOutForm = () => {

  const [firstName,setFirstName] = useState()
  const [lastName,setLastName] = useState()
  const [mobileNumber,setMobileNumber] = useState()
  const [address,setAddress] = useState()

  const submit = async(e)=>{
    e.preventDefault()
    try {

    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div>
        <div className="container">
        <h2 className="form-title">Information</h2>
            <form>
                <div className="form-input">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label for="mobileNumber">Mobile Number</label>
                    <input type="tel" id="mobileNumber" name="mobileNumber" required onChange={(e)=>setMobileNumber(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label for="address">House Address</label>
                    <textarea id="address" name="address" cols={80} rows="10" required onChange={(e)=>setAddress(e.target.value)}></textarea>
                </div>
                <div className="form-submit">
                    <button type="submit" onClick={(event)=>submit(event)} >Place Order</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CheckOutForm