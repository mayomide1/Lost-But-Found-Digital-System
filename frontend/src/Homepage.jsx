import {useState} from 'react'
import "./Homepage.css"
import {Link} from "react-router-dom"

const Homepage = () => {

    const [filter, setFilter] = useState("All")

    const items = [
        {
            itemName:"Black Laptop Bag",
            category: "Lost",
            locationSeen: "Faculty of Science",
            date: "28th of March, 2026",
            description: "It is a Black laptop bag, It contains ......."
        },
        {
            itemName:"Student Id card",
            category: "Found",
            locationSeen: "Faculty of Science",
            date: "28th of March, 2026",
            description: "The name on the ID Card is Ayomide Emmanuel Mamukuyomi, Matric Number: 220591184."
        },
        {
            itemName:"Bag",
            category: "Lost",
            locationSeen: "Faculty of Science",
            date: "28th of March, 2026"
        },
        {
            itemName:"Bag",
            category: "Found",
            locationSeen: "Faculty of Science",
            date: "28th of March, 2026"
        },
        {
            itemName:"Bag",
            category: "Lost",
            locationSeen: "Faculty of Science",
            date: "28th of March, 2026"
        },
        {
            itemName:"Bag",
            category: "Found",
            locationSeen: "Faculty of Science",
            date: "28th of March, 2026"
        },
    ]

    let filteredItems = [];
    if (filter === "All"){
        filteredItems = items;
    } else if (filter === "Found"){
        filteredItems = items.filter(item => item.category === "Found")
    }else if (filter === "Lost"){
        filteredItems = items.filter(item => item.category === "Lost")
    }

  return (
    <div>
      <nav id='Navbar'>
        <h1>FINDEE</h1>
        <div className='buttons'>
            <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/login"><button>Sign In</button></Link>
        </div>
      </nav>

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

      <footer>
        <p>copyright 2026</p>
      </footer>
    </div>
  )
}

const ItemCard = ({category,itemName, locationSeen, date, description}) => {
    return (
        <div>
            <div className='card'>
            <img src="" alt="" style={{border:"2px solid red", width:"100%", height:"150px"}}/>
            <p>{category} 3 days ago</p>
             <p>{itemName}</p>   
             <p>Location seen: {locationSeen}</p>   
             <p>Date: {date}</p>
             <p>{description}</p>
            </div>

        </div>
    )
}

export default Homepage
