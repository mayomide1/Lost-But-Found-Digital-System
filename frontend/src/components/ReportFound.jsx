import React from 'react'
import NavBar from './NavBar'

const ReportFound = () => {
  return (
    <>
    <NavBar />
      <section >
        <div className='report-form'>
        <h1>Found Item Details</h1>
        <p>Item Name</p>
        <input type="text" placeholder='e.g. Black Wallet '/>
        <p>Upload Found Item Image (Upload if Available)</p>
        <input type="file" accept="image/*"/>
        <p>Description (colour, brand, size, markings)</p>
        <textarea type="text" placeholder='Describe the item in detail..'/>
        <p>Date Found</p>
        <input type="date"/>
        <p>Location Found</p>
        <input type="text" placeholder='Item Description'/>
        <button>Submit Found Item Report</button>
      </div>
      </section>
    </>
  )
}

export default ReportFound