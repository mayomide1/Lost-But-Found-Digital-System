import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <>
    <h1>Welcome Back</h1>
    <div className='login-form'>
        <p>Email Address</p>
        <input type="email" placeholder='Enter Email Address'/>
        <p>Password</p>
        <input type="email" placeholder='Your Password'/>
        <p>Don't have an account? <span><Link to="/signup">Sign Up</Link></span></p>
        <p>Forgot Password</p>
        <button>Log in</button>
    </div>
    </>
  )
}

export default Login