import React from 'react'

const Signup = () => {
  return (
    <div>
        <main>
            <h1>SignUp</h1>
            <form id="login-form" onsubmit="return validateForm()">
                <input type="text" id="email" placeholder="Enter your email address"/><br/>
                <input type="password" id="password" placeholder="Enter your password"/><br/>
                <button type="submit" id ="loginButton">Login</button>
                <button type="submit" id="signup-button">Sign Up</button>
            </form>
        <p id="error-msg"></p>
    </main>
    </div>
  )
}

export default Signup;