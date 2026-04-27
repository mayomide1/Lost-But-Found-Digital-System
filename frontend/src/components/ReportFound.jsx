import { useEffect} from 'react'
import NavBar from './NavBar'

const ReportFound = () => {
      useEffect(() => {
      window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
      })
      },[])
  return (
    <>
    <NavBar />
      <section >
        <div className='report-form'>
        <h1>Found Item Details</h1>
        <p>Item Name</p>
        <input type="text" placeholder='e.g. Black Wallet '/>
        <p>Upload Found Item Image (Mandatory)</p>
        <input type="file" accept="image/*"/>
        <select name="" id="">
          <option value="">Select Category</option>
          <option value="">Electronics</option>
          <option value="">ID</option>
          <option value="">Bag</option>
          <option value="">Documents</option>
          <option value="">Book</option>
          <option value="">Accessories</option>
          <option value="">Others</option>
        </select>
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