import React from 'react'
import Sidebar from './Sidebar'
import UserNavbar from './UserNavbar'
import "../css/UserSettings.css"


const UserSettings = () => {
  return (
    <>
    <div className="user-settings-page">
        <UserNavbar />
        <Sidebar />
    <div className="user-settings">
        <h1>THIS IS THE SETTINGS PAGE</h1>
    </div>
    </div>
    </>
  )
}

export default UserSettings