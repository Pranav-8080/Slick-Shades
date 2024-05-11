import React from 'react'
import "../styles/CheckOutForm.css"
const CheckOutForm = () => {
  return (
    <div>
        <div className="container">
        <h2 className="form-title">Information</h2>
            <form>
                <div className="form-input">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required/>
                </div>
                <div className="form-input">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required/>
                </div>
                <div className="form-input">
                    <label for="mobileNumber">Mobile Number</label>
                    <input type="tel" id="mobileNumber" name="mobileNumber" required/>
                </div>
                <div className="form-input">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div className="form-input">
                    <label for="address">House Address</label>
                    <textarea id="address" name="address" rows="4" required></textarea>
                </div>
                <div className="form-submit">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CheckOutForm