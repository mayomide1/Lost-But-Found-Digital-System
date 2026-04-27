import "../css/Dashboard.css"
import Sidebar from './Sidebar'
import UserNavbar from "./UserNavbar"
import { GoDotFill } from "react-icons/go";
import {items} from './UserReports'
import { useState } from "react";

const Dashboard = () => {
    const activeUser = (JSON.parse(localStorage.getItem("loggedUser")))
    const date = new Date()
    const found = items.filter(item => item.reportType === "Found")
    const lost = items.filter(item => item.reportType === "Lost")
    const activeReport = items.filter(item => item.status === "Active")
    const pendingClaim = items.filter(item => item.status === "Claim Pending")
    const matchFound = items.filter(item => item.status === "Match Found")

  return (
    <>
    <div className="dashboard-page">
    <UserNavbar/>
    <Sidebar />
    <div className='dashboard'>
        <h2>Welcome Back, {activeUser.firstName} </h2>
        <p>{date.toDateString()}</p>

    <div className="summary-cards">
        <div className="summary-card total-reports">
            <h2>Total Reports</h2>
            <h1>{items.length}</h1>
            <h3>{lost.length} Lost <GoDotFill/> {found.length} Found</h3>
        </div>
        <div className="summary-card active">
            <h2>Active Reports</h2>
            <h1>{activeReport.length}</h1>
            <h3><GoDotFill/>Currently searching</h3>
        </div>
        <div className="summary-card matchFound">
            <h2>Matches Found</h2>
            <h1>{matchFound.length}</h1>
            <h3><GoDotFill />Review Pending</h3>
        </div>
        <div className="summary-card claims">
            <h2>Claims Submitted</h2>
            <h1 >{pendingClaim.length}</h1>
            <h3><GoDotFill/>Awaiting Approval</h3>
        </div>
    </div>

    <div className="potential-matches">
        <h2>Potential matches for your reports</h2>
        <div className="matches">
        <div className="match">
            <div className="top">
            <h3>iPhone 13 Pro Max (Space Grey)</h3>
            <p>87% Match</p>
            </div>
            <p>Found near Faculty of Engineering · 25 Apr 2026</p>
            <p>📍 Block A, Engineering</p>
            <button>Claim This Item</button>
        </div>
        <div className="match">
            <div className="top">
            <h3>iPhone 13 Pro Max (Space Grey)</h3>
            <p>87% Match</p>
            </div>
            <p>Found near Faculty of Engineering · 25 Apr 2026</p>
            <p>📍 Block A, Engineering</p>
            <button>Claim This Item</button>
        </div>
        </div>
    </div>

    <div className="recent-activities">
        <h2>Recent Activity</h2>
    <div className="activities">
        <div className="activity">
        <p> <GoDotFill/> Match found for your lost iPhone report</p>
        <p>2 hours ago</p>
        </div>
        <div className="activity">
        <p> <GoDotFill/> Match found for your lost iPhone report</p>
        <p>2 hours ago</p>
        </div>
        <div className="activity">
        <p> <GoDotFill/> Your wallet claim is under admin review</p>
        <p>Yesterday</p>
        </div>
        <div className="activity">
        <p> <GoDotFill/> You submitted a found item report — Textbook</p>
        <p>2 days ago</p>
        </div>
        <div className="activity">
        <p> <GoDotFill/> Student ID card returned successfully</p>
        <p>1 week ago</p>
        </div>
    </div>
    </div>

    <div className="recent-reports">
        <h2>Your recent reports</h2>
    <div className="reports">
        <div className="report">
            <div className="report-info">
            <h3>iPhone 13 Pro Max</h3>
            <p>Lost. Faculty of Science . 22 Apr 2026</p>
            </div>
            <p>Match Found</p>
        </div>
        <div className="report">
            <div className="report-info">
            <h3>iPhone 13 Pro Max</h3>
            <p>Lost. Faculty of Science . 22 Apr 2026</p>
            </div>
            <p>Match Found</p>
        </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard