import {useState} from 'react'
import "./Report.css"
import { MdLocationPin } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";

   export const items = [
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
            itemName:"Bag",
            category: "Found",
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
            category: "Found",
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
            category: "Found",
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

    let filteredItems = [];
    if (filter === "All"){
        filteredItems = items;
    } else if (filter === "Found"){
        filteredItems = items.filter(item => item.category === "Found")
    }else if (filter === "Lost"){
        filteredItems = items.filter(item => item.category === "Lost")
    }

  return (
    <>
    <section id='cards'>
        <h1 className='header'>REPORTS</h1>
        <div className="search">
        <input type="text" placeholder='Search'/>
        <button>Search</button>
        </div>
      <div className='filter'>
        <button onClick={() => setFilter ("All")}>All</button>
        <button onClick={() => setFilter ("Lost")}>Lost</button>
        <button onClick={() => setFilter ("Found")}>Found</button>
      </div>

      <div className='cards'>
        {filteredItems.map((item, index) =>(
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