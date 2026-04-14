import {useState} from 'react'
import "./Homepage.css"
import {Link} from "react-router-dom"
import { MdLocationPin } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";

const Homepage = () => {

    const [filter, setFilter] = useState("All")

    const items = [
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
      <nav id='navbar'>
        <h1>Lost & Found</h1>

        <div className='nav-cta'>
            <button>Home</button>
            <a href="#cards"><button>Reports</button></a>
            <Link to="/report-lost"><button>Report Lost Item</button></Link>
            <Link to="/report-found"><button>Report Found Item</button></Link>
        </div>
        <div className='buttons'>
            <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/login"><button>Sign In</button></Link>
        </div>
      </nav>

      <section className='hero-section'>
        <h1>Lost Something? Found Something?</h1>
        <p>Let's reunite them.</p>

        <Link to="/report-lost"><button>Report Lost Item</button></Link>
        <Link to="/report-found"><button>Report Found Item</button></Link>

      </section>

    <section id='cards'>
        <h1 className='header'>REPORTS</h1>
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

    <section className='how-it-works'>
        <h1>HOW IT WORKS</h1>
        <div className='cards'>
        <div className='card'>
            <h2>Report Items lost of found</h2>
        </div>
        <div className='card'>
            <h2>We Match</h2>
        </div>
        <div className='card'>
            <h2>You Claim/Return</h2>
        </div>
        </div>
    </section>

      <footer>
        <h1>Lost & Found</h1>
        <p>© 2026 Lost & Found Platform. All rights reserved.</p>
        <div>
       <Link to="/report-lost"><p>Report Lost Item</p></Link>
        <Link to="/report-found"><p>Report Found Item</p></Link>
        </div>

      </footer>
    </div>
  )
}

const ItemCard = ({category,itemName, locationSeen, date, description}) => {
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

export default Homepage
