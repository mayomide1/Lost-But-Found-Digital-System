import {React, useState} from 'react'
import lostButFoundImage from "/assets/lostbutfound.jpeg"
import "../css/Login.css"
import {Link, useNavigate} from "react-router-dom"

export const users = [
  {
    firstName: "Ayomide",
    surname:"Mamukuyomi",
    email:"ayomidemamukuyomi5@gmail.com",
    password: "password"
  },
    {
    firstName: "Divine",
    surname:"Aghede",
    email:"aghededivine0@gmail.com",
    password: "password"
  },
    {
    firstName: "Ayomide",
    surname:"Mamukuyomi",
    email:"a.yomidemamukuyomi5@gmail.com",
    password: "password"
  },
    {
    firstName: "Ayomide",
    surname:"Mamukuyomi",
    email:"ay.omidemamukuyomi5@gmail.com",
    password: "password"
  },
    {
    firstName: "Ayomide",
    surname:"Mamukuyomi",
    email:"ayo.midemamukuyomi5@gmail.com",
    password: "password"
  },
    {
    firstName: "Ayomide",
    surname:"Mamukuyomi",
    email:"ayom.idemamukuyomi5@gmail.com",
    password: "password"
  },
]

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  function login(){
    users.find((user) => {
    if (user.email !== email){
        setError("Incorrect Login Details")
      } else if (user.password !== password){
        setError("Incorrect Login Details")
      }
      else{
        console.log(user)
        localStorage.setItem("loggedUser", JSON.stringify(user))
        navigate("/dashboard")
      }
    })
  }
  return (
    <>
    <div className="login">
      <div className="left">
    <img src={lostButFoundImage} alt="image" />
    </div>
    <div className="right">
    <div className='login-form'>
      <h1>Sign <span>in</span></h1>
      <p>Welcome back! Please enter your details</p>
      <p>{error}</p>
        <p>Email</p>
        <input type="email" placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)}/>
        <p>Password</p>
        <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
        <p><Link to="">Forgot Password</Link></p>
        {/* <Link to="/dashboard"><button>Log in</button></Link> */}
        <button onClick={login}>Log in</button>
         <p>Don't have an account? <span><Link to="/signup">Sign Up</Link></span></p>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login