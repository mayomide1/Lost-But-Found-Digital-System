import "../css/Dashboard.css"
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Dashboard = () => {
   
   const activeUser = (JSON.parse(localStorage.getItem("loggedUser")))
    console.log(activeUser)
       

  return (
    <>
    <div className='dashboard'>
    <nav>
        <Link to="/"><h1>Lost & Found</h1></Link>

        <div className='user'>
            <img src="" alt="" />
            <h3>{activeUser.firstName}</h3>
        </div>
    </nav>
    <Sidebar />
    </div>
    </>
  )
}

export default Dashboard