import React from 'react'
import {Link} from "react-router-dom"
import "../css/NavBar.css"
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate = useNavigate()

    const activeUser = (JSON.parse(localStorage.getItem("loggedUser")))
    
    function logout(){
        localStorage.removeItem("loggedUser")
        navigate("/")
    }

  return (
    <>
      <nav id='navbar'>
        <h1>Lost & Found</h1>

      {(activeUser) ?
      <>
       <div className='nav-cta'>
            <Link to="/"><button>Home</button></Link>
            <Link to="/reports"><button>Recent Items</button></Link>
            <Link to="/dashboard"><button>Dashboard</button></Link>
            <button onClick={logout}>Logout</button>
        </div>
        <div className='user'>
            <img src="" alt="" />
            <h3>{activeUser.firstName}</h3>
        </div> 
        </>:
        <>        
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
        </>}
        
      </nav>
    </>
  )
}

export default NavBar