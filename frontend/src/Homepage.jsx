import React from 'react'
import "./Homepage.css"

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
        <button>Sign Up</button>
        <button>Sign In</button>
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
    console.log("I am rendering");
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
