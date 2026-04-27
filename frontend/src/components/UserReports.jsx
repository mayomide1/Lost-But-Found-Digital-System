import {useState} from 'react'
import "../css/Report.css"
import { MdLocationPin } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";
import { useEffect } from "react";
import NavBar from './NavBar';
import { GoDotFill } from "react-icons/go";

import Sidebar from './Sidebar'
import UserNavbar from './UserNavbar'
import "../css/UserReports.css"

   export const items = [
        {
            itemName:"Laptop Charger",
            reportType: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Electronics",
            status:"Active"
        },
        {
            itemName:"Phone Charger",
            reportType: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Electronics",
            status:"Match Found"
            
        },
        {
            itemName:"Headphone",
            reportType: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Electronics",
            status:"Match Found"
            
        },
        {
            itemName:"Flash Drive",
            reportType: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Electronics",
            status:"Resolved"
            
        },
        {
            itemName:"Black Laptop Bag",
            reportType: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Bag",
            status:"Resolved"
        },
        {
            itemName:"Student Id card",
            reportType: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "ID",
            status:"Match Found"
        },
        {
            itemName:"Laptop Bag",
            reportType: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Bag",
            status:"Claim Pending"
        },
        {
            itemName:"Bag",
            reportType: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Bag",
            status:"Resolved"
        },
        {
            itemName:"Bag",
            reportType: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Bag",
            status:"Active"
        },
        {
            itemName:"Bag",
            reportType: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Bag",
            status:"Match Found"
        },
        {
            itemName:"Phone",
            reportType: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Electronics",
            status:"Claim Pending"
        },
        {
            itemName:"Bag",
            reportType: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Bag",
            status:"Resolved"
            
        },
        {
            itemName:"Phone Case",
            reportType: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Accessories",
            status:"Active"
        },
        {
            itemName:"Bag",
            reportType: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Bag",
            status:"Match Found"
        },
                {
            itemName:"Id Card",
            reportType: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "ID",
            status:"Claim Pending"
        },
                {
            itemName:"Bag",
            reportType: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Bag",
            status:"Resolved"
        },
    ]

const UserReports = () => {
  
  const [filter, setFilter] = useState("Lost")
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")

  const found = items.filter(item => item.reportType === "Found")
  const lost = items.filter(item => item.reportType === "Lost")

    let filteredItems = [];
  if (filter === "Found"){
    filteredItems = items.filter(item => item.reportType === "Found")
  }else if (filter === "Lost"){
    filteredItems = items.filter(item => item.reportType === "Lost")
  }
  
  filteredItems = filteredItems.filter(item => item.itemName.toLowerCase().includes(search.toLowerCase()))
  
if (statusFilter) {
  filteredItems = filteredItems.filter(item => item.status === statusFilter)
}

if (categoryFilter) {
  filteredItems = filteredItems.filter(item => item.category === categoryFilter)
}
  
return (
    <>
    <div className="user-reports-page">
        <UserNavbar />
        <Sidebar />
    <div className="user-reports">
        <div className='header'>
          <h1>Your Reports</h1>
        <p>All lost and found item reports you have submitted</p>
        
        <div className='buttons'>
          <button className={filter === "Lost" ? "active" : "non-active"}
          onClick={() => {setFilter ("Lost")}} >Lost Items ({lost.length})</button>
          <button className={filter === "Found" ? "active" : "non-active"}
          onClick={() => {setFilter ("Found")}}>Found Items ({found.length})</button>
        </div>
        </div>

        <div className="filter">
          <input type="text" placeholder='Search by name of item' onChange={(e) => setSearch(e.target.value)}/>

        <select name="" id="" onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Match Found">Match Found</option>
            <option value="Claim Pending">Claim Pending</option>
            <option value="Resolved">Resolved</option>
        </select>

        <select name="" id="" onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="ID">ID</option>
          <option value="Bag">Bag</option>
          <option value="Documents">Documents</option>
          <option value="Book">Book</option>
          <option value="Accessories">Accessories</option>
          <option value="Others">Others</option>
        </select>
        </div>

        <div className='lost-items'>
        {(filteredItems.length === 0 ) ? <p style={{color: "red", textAlign:"center"}}>No item was found</p>: filteredItems.map((item, index) => (
          <ReportItems 
            key = {index}
            itemName = {item.itemName}
            reportType = {item.reportType}
            category = {item.category}
            locationSeen = {item.locationSeen}
            date = {item.date}
            status = {item.status}
          />

        ))}
        </div>
    </div>
    </div>
    </>
  )
}

const ReportItems = ({itemName, reportType, category, locationSeen, date, status }) => {
   return(
    <>
        <div className="lost-item">
          <div className="head">
            <h3><strong>{itemName}</strong></h3>
            <p style={{color: "white", borderRadius: "10px", width: "100px", textAlign: "center", padding:"5px", background:(reportType === "Found")? "green" : "red"}}>{reportType}</p>
          </div>
          <div className='body'>
          <p>{category}</p>
          <GoDotFill /> 
          <p>{locationSeen}</p>
          <GoDotFill />
          <p>{date}</p>
          </div>
          <p>65W Dell charger, black with a small yellow tape mark near the connector.</p>

          <div className='bottom'>
            <p style={{color:(status === "Active") ? "#32CD32" 
            : (status === "Match Found") ? "blue" 
            : (status === "Claim Pending") ? "orange" 
            : (status === "Resolved") ? "#228B22"
            : "gray"}}><strong>{status}</strong></p>

         {(status === "Active") ? 
            <>
          <div className="buttons">
            <button>Edit</button>
            <button>Delete</button>
          </div>
          </> : 
          (status === "Match Found") ?
          <>
          <div className="buttons">
            <button>Edit</button>
            <button>Claim</button>
          </div>
          </> :
          null}
          </div>
        </div>
    </>
   )
}


export default UserReports