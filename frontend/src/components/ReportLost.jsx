import {React, useEffect} from 'react'
import NavBar from './NavBar'
import "../css/ReportLost.css"

const ReportLost = () => {
      useEffect(() => {
      window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
      })
      },[])
  return (
    <>
      <NavBar/>
      <section >
        <div className='report-form'>
        <h1>Lost Item Details</h1>
        <p>Item Name</p>
        <input type="text" placeholder='e.g. Black Wallet '/>
        <p>Upload Lost Item Image (Upload if Available)</p>
        <input type="file" accept="image/*"/>
        <p>Description (colour, brand, size, markings)</p>
        <textarea type="text" placeholder='Describe the item in detail..'/>
        <p>Date Lost</p>
        <input type="date"/>
        <p>Last Known Location</p>
        <input type="text" placeholder='Item Description'/>
        <button>Submit Lost Item Report</button>
      </div>
      </section>
    </>
  )
}

export default ReportLost