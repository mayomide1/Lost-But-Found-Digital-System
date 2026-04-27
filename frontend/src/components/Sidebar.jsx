import React from 'react'
import "../css/Sidebar.css"
import { useNavigate, Link } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate()

    function logout(){
        localStorage.removeItem("loggedUser")
        navigate("/")
    }

  return (
    <>
    <div className="sidebar">
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button onClick={() => navigate("/user-reports")}>Your Reports</button>
        <button onClick={() => navigate("/report-lost")}>Report Lost Items</button>
        <button onClick={() => navigate("/report-found")}>Report Found Items</button>
        <button onClick={() => navigate("/user-settings")}>Settings</button>
        <button onClick={logout}>Logout</button>

    </div>
    </>
  )
}

export default Sidebar