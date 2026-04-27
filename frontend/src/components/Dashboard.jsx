import "../css/Dashboard.css"
import Sidebar from './Sidebar'
import UserNavbar from "./UserNavbar"

const Dashboard = () => {
       

  return (
    <>
    <div className="dashboard-page">
    <UserNavbar/>
    <Sidebar />
    <div className='dashboard'>
        <h1>THIS IS THE DASHBOARD PAGE</h1>
    </div>
    </div>
    </>
  )
}

export default Dashboard