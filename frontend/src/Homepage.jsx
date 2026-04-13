import React from 'react'
import "./Homepage.css"
import {Link} from "react-router-dom"

const Homepage = () => {

    const items = [
        {
            itemName:"Bag",
            locationSeen: "Faculty of Science",
            date: "28th of March, 2026"
        },
        {
            itemName:"Bag",
            locationSeen: "Faculty of Science",
            date: "28th of March, 2026"
        },
        {
            itemName:"Bag",
            locationSeen: "Faculty of Science",
            date: "28th of March, 2026"
        },
        {
            itemName:"Bag",
            locationSeen: "Faculty of Science",
            date: "28th of March, 2026"
        },
        {
            itemName:"Bag",
            locationSeen: "Faculty of Science",
            date: "28th of March, 2026"
        },
    ]

  return (
    <div>
      <nav id='Navbar'>
        <div className='buttons'>
            <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/login"><button>Sign In</button></Link>
        </div>
      </nav>

      <div className='cards'>
        {items.map((item, index) =>(
            <ItemCard 
            key = {index}
            itemName = {item.itemName}
            locationSeen = {item.locationSeen}
            date = {item.date}
            />
        ))}
      </div>

      <footer>
        <p>copyright 2026</p>
      </footer>
    </div>
  )
}

const ItemCard = ({itemName, locationSeen, date}) => {
    return (
        <div>
            <div className='card'>
             <p>Item Lost: {itemName}</p>   
             <p>Location last seen: {locationSeen}</p>   
             <p>Date: {date}</p>   
            </div>

        </div>
    )
}

export default Homepage
