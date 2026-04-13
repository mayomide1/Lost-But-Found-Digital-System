import React from 'react'
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <>
    <h1>Create an account</h1>
    <p>First Name</p>
    <input type="text" placeholder='Enter your first name'/>
    <p>Last Name (Surname)</p>
    <input type="text" placeholder='Enter your last name'/>
    <p>Email Address (Surname)</p>
    <input type="text" placeholder='Enter your email address'/>
    <p>Password (Surname)</p>
    <input type="text" placeholder='Create a password (Min of 8 characters)'/>
    <p>Already have an account <span><Link to="/login">Log in</Link></span></p>
    <button>Create Account</button>
    </>
  )
}

export default Signup