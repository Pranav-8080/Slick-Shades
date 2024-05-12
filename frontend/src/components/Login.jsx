import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {

  const [email,setEmail] = useState()
  const [pass,setPassword] = useState()
  const [err,setErr] = useState()
  const navigate = useNavigate()

  const submitHandler = async(e)=>{
    e.preventDefault()
    
      try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/login`,{email,pass})
        console.log(response.data)
        if(response.data.msg==="exists"){
          navigate("/designer")
        }else{
          setErr("invalid credentails")
        }
      } catch (error) {
        console.log(error)
      }
    }


  return (
    <div>
        <main>
            <h1>Login</h1>
            <form id="login-form" onSubmit={(e)=>submitHandler(e)}>
            <input type="text" id="email" placeholder="Enter your email address" onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input type="password" id="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button type="submit" id ="loginButton">Login</button><br/>
                <p>new user?</p>
                <button id="signup-button" onClick={()=>navigate('/signup')}>Sign Up</button>
            </form>
            <p id="error-msg">{err}</p>
        </main>
    </div>
  )
}

export default Login