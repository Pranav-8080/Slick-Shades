import React, { useContext, useState } from 'react'
import "../styles/CheckOutForm.css"
import axios from 'axios'
import {context} from "../App"
import { Link } from 'react-router-dom'

let lastname=""

const CheckOutForm = () => {

  const [firstName,setFirstName] = useState()
  const [lastName,setLastName] = useState()
  const [mobileNumber,setMobileNumber] = useState()
  const [address,setAddress] = useState()
  
  

  const {cartItems} = useContext(context)

  const submit = async(e)=>{
    e.preventDefault()
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/orders/neworder`,{
            firstName,
            lastName,
            cartItems,
            mobileNumber,
            address
        })

        
    } catch (error) {
        console.log(error)
    }
    
  }
  lastname = lastName
  return (
    <div>
        <div className="container">
        <h2 className="form-title">Information</h2>
            <form>
                <div className="form-input">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label htmlFor="mobileNumber">Mobile Number</label>
                    <input type="tel" id="mobileNumber" name="mobileNumber" required onChange={(e)=>setMobileNumber(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label htmlFor="address">House Address</label>
                    <textarea id="address" name="address" cols={80} rows="10" required onChange={(e)=>setAddress(e.target.value)}></textarea>
                </div>
                <div className="form-submit">
                    <button type="submit" onClick={(event)=>submit(event)} ><Link to={'/myorders'}>Place Order</Link></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CheckOutForm
export {lastname}