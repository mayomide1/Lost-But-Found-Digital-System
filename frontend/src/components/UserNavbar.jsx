import React from 'react'
import "../css/UserNavbar.css"
import { useNavigate } from 'react-router-dom'

const UserNavbar = () => {

    const navigate = useNavigate()

   const activeUser = (JSON.parse(localStorage.getItem("loggedUser")))

  return (
    <>
    <nav>
        <h1 onClick={() => navigate("/")}>Lost & Found</h1>
       <div className='nav-left'>
        <p>Notification</p>
        <div className='user'>
            <img src="" alt="" />
            <h3>{activeUser.firstName}</h3>
        </div>
      </div>
    </nav>
    </>
  )
}

export default UserNavbar