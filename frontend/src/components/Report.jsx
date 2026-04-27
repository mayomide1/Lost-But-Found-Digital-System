import {useState} from 'react'
import "../css/Report.css"
import { MdLocationPin } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { useEffect } from "react";
import NavBar from './NavBar';

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
            status:"Claim Pending"
            
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
            status:"Active"
        },
        {
            itemName:"Student Id card",
            reportType: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            category: "Id",
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
            category: "Id",
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

const Report = () => {

    const [filter, setFilter] = useState("All")
    const [search, setSearch] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("")

    let filteredItems = [];
    if (filter === "All"){
        filteredItems = items;
    } else if (filter === "Found"){
        filteredItems = items.filter(item => item.reportType === "Found")
    }else if (filter === "Lost"){
        filteredItems = items.filter(item => item.reportType === "Lost")
    }

    filteredItems = filteredItems.filter(item => item.itemName.toLowerCase().includes(search.toLowerCase()))
    if (categoryFilter) {
        filteredItems = filteredItems.filter(item => item.category === categoryFilter)
    }
  
    useEffect(() => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    },[])
  return (
    <>
    <NavBar />
    <section id='cards'>
        <h1 className='header'>RECENT ITEMS</h1>
        <div className="search">
        <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)}/>
        
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
      <div className='filter'>
        <button onClick={() => setFilter ("All")}>All</button>
        <button onClick={() => setFilter ("Lost")}>Lost</button>
        <button onClick={() => setFilter ("Found")}>Found</button>
      </div>

      <div className='cards'>
       {(filteredItems.length === 0 ) ? <p style={{color: "red"}}>No item was found</p>: filteredItems.map((item, index) =>(
            <ItemCard 
            key = {index}
            reportType={item.reportType}
            itemName = {item.itemName}
            category = {item.category}
            locationSeen = {item.locationSeen}
            date = {item.date}
            description = {item.description}
            />
        ))}
      </div>
    </section>
    </>
  )
}

export const ItemCard = ({reportType,itemName, locationSeen, date, description,category}) => {
    return (
        <>
            <div className='card'>
            <img src="" alt="" style={{border:"2px solid red", width:"100%", height:"150px"}}/>
            <div className='status-category'>
            <p style={{width: "100px", textAlign:"center", color: "white", borderRadius: "10px", padding:"5px", background:(reportType === "Found")? "green" : "red"}}>{reportType}</p>
            <GoDotFill/> 
            <p>{category}</p>
            </div>
            <p className='item-name'><strong>{itemName}</strong></p>   
            <div className="date-location">
            <p><MdLocationPin/>{locationSeen}</p>   
            <p><IoCalendarNumberSharp/>{date}</p>
            </div>
            <p>{description}</p>
            <div className="cta-button">
                <button>View</button>
                <button>Claim</button>
             </div>
            </div>
        </>
    )
}

export default Report