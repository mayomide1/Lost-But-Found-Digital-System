import React from 'react'
import {Link} from "react-router-dom"
import "../css/NavBar.css"
const NavBar = () => {
  return (
    <>
      <nav id='navbar'>
        <h1>Lost & Found</h1>

        <div className='nav-cta'>
            <Link to="/"><button>Home</button></Link>
            <Link to="/reports"><button>Reports</button></Link>
            <Link to="/report-lost"><button>Report Lost Item</button></Link>
            <Link to="/report-found"><button>Report Found Item</button></Link>
        </div>
        <div className='buttons'>
            <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/login"><button>Sign In</button></Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar