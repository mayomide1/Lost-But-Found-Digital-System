import {useState} from 'react'
import "./Report.css"
import { MdLocationPin } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";

   export const items = [
        {
            itemName:"Laptop Charger",
            category: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            description: ""
        },
        {
            itemName:"Phone Charger",
            category: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            description: ""
        },
        {
            itemName:"Headphone",
            category: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            description: "It is a Black laptop bag, It contains contains"
        },
        {
            itemName:"Flash Drive",
            category: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            description: "It is a Black laptop bag, It contains contains"
        },
        {
            itemName:"Black Laptop Bag",
            category: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            description: "It is a Black laptop bag, It contains contains"
        },
        {
            itemName:"Student Id card",
            category: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026",
            description: "The name on the ID Card is Ayomide Emmanuel Mamukuyomi, Matric Number: 220591184."
        },
        {
            itemName:"Laptop Bag",
            category: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026"
        },
        {
            itemName:"Bag",
            category: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026"
        },
        {
            itemName:"Bag",
            category: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026"
        },
        {
            itemName:"Bag",
            category: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026"
        },
        {
            itemName:"Phone",
            category: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026"
        },
        {
            itemName:"Bag",
            category: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026"
        },
        {
            itemName:"Phone Case",
            category: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026"
        },
        {
            itemName:"Bag",
            category: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026"
        },
                {
            itemName:"Id Card",
            category: "Lost",
            locationSeen: "Faculty of Science",
            date: "28/03/2026"
        },
                {
            itemName:"Bag",
            category: "Found",
            locationSeen: "Faculty of Science",
            date: "28/03/2026"
        },
    ]

const Report = () => {

    const [filter, setFilter] = useState("All")
    const [search, setSearch] = useState("")
    const [error, setError] = useState("")

    let filteredItems = [];
    if (filter === "All"){
        filteredItems = items;
    } else if (filter === "Found"){
        filteredItems = items.filter(item => item.category === "Found")
    }else if (filter === "Lost"){
        filteredItems = items.filter(item => item.category === "Lost")
    }

    filteredItems = filteredItems.filter(item => item.itemName.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <section id='cards'>
        <h1 className='header'>REPORTS</h1>
        <div className="search">
        <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)}/>
        </div>
      <div className='filter'>
        <button onClick={() => setFilter ("All")}>All</button>
        <button onClick={() => setFilter ("Lost")}>Lost</button>
        <button onClick={() => setFilter ("Found")}>Found</button>
      </div>

      <div className='cards'>
       {(filteredItems.length === 0 ) ? <p style={{color: "red"}}>Item Could not be found</p>: filteredItems.map((item, index) =>(
            <ItemCard 
            key = {index}
            category={item.category}
            itemName = {item.itemName}
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

export const ItemCard = ({category,itemName, locationSeen, date, description}) => {
    return (
        <>
            <div className='card'>
            <img src="" alt="" style={{border:"2px solid red", width:"100%", height:"150px"}}/>
            <p className='category'> <LuClock4/>{category} 3 days ago</p>
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