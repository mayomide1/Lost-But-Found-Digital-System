import React from 'react'
import lostButFoundImage from "../assets/lostbutfound.jpeg"
import "./Login.css"
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <>
    <div className="login">
      <div className="left">
    <img src={lostButFoundImage} alt="image" />
    <h1>Welcome <span>Back</span>!</h1>
    </div>
    <div className="right">
    <div className='login-form'>
      <h1>Sign <span>in</span></h1>
      <p>Welcome back! Please enter your details</p>
        <p>Email</p>
        <input type="email" placeholder='Enter your email'/>
        <p>Password</p>
        <input type="password" placeholder='Password'/>
        <p><Link to="">Forgot Password</Link></p>
        <button>Log in</button>
         <p>Don't have an account? <span><Link to="/signup">Sign Up</Link></span></p>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login