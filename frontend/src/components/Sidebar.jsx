import React from 'react'
import "../css/Sidebar.css"
import { useNavigate, Link } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()

    function logout(){
        localStorage.removeItem("loggedUser")
        navigate("/login")
    }

  return (
    <>
    <div className="sidebar">
        <button>Dashboard</button>
        <Link to="/report-lost"><button>Report Lost Items</button></Link>
        <Link to="/report-found"><button>Report Found Items</button></Link>
        <button>Settings</button>
        <button onClick={logout}>Logout</button>

    </div>
    </>
  )
}

export default Sidebar