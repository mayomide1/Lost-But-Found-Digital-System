import React from 'react'
import "../css/Signup.css"
import lostButFoundImage from "/assets/lostbutfound.jpeg"
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <>
    <div className="signup">
    <div className="left">
      <img src={lostButFoundImage} alt="image" />
    </div>
    <div className="right">
    <div className='signup-form'>
    <h1>Create an account</h1>
    <p>First Name</p>
    <input type="text" placeholder='Enter your first name'/>
    <p>Last Name (Surname)</p>
    <input type="text" placeholder='Enter your last name'/>
    <p>Email</p>
    <input type="text" placeholder='Enter your email '/>
    <p>Password</p>
    <input type="text" placeholder='Create a password (Min of 8 characters)'/>
    <p>Already have an account <span><Link to="/login">Log in</Link></span></p>
    <button>Create Account</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Signup