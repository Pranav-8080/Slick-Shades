import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

// const bodyStyle = {
//   backgroundImage: "url('https://c1.wallpaperflare.com/preview/703/854/446/glasses-spectacle-frame-black-and-white.jpg')",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat"
// };



const Signup = () => {

  const [email,setEmail] = useState("")
  const [pass,setPassword] = useState("")
  const [err,setErr] = useState("")                
  const navigate = useNavigate()
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


  const submitHandler = async(e)=>{
    e.preventDefault()
    if(validRegex.test(email) && pass.length > 8){
      try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/signup`,{email,pass})
        console.log(response.data)
        if(response.data.msg==="user created"){
          navigate("/login")
        }
      } catch (error) {
        console.log(error)
      }
    }else{
      setErr("Invalid credentials")
      return
    }

  }

  
  return (
    <div >
        <main >
            <h1>SignUp</h1>
            <form id="login-form" onSubmit={(event)=>submitHandler(event)}>
                <input type="text" id="email" placeholder="Enter your email address" onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input type="password" id="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/><br/>

                <button type="submit" id="signup-button">Sign Up</button>                
                <p>already a user</p>
                <button id ="loginButton" onClick={()=>navigate('/login')}>Login</button>
            </form>
        <p id="error-msg">{err}</p>
    </main>
    </div>
  )
}

export default Signup;