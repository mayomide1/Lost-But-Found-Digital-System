import "../css/Homepage.css"
import {Link} from "react-router-dom"
import {ItemCard, items} from "./Report"
import NavBar from "./NavBar"

const Homepage = () => {

  return (
    <div>
    <NavBar/>
      <section className='hero-section' id='hero-section'>
        <div className="left">
        <h1>Lost Something? <br/>Found Something?</h1>
        <p>Let's reunite them.</p>

        <div className="buttons">
        <Link to="/report-lost"><button>Report Lost Item</button></Link>
        <Link to="/report-found"><button>Report Found Item</button></Link>
        </div>
        </div>
        <div className="right">
        </div>
      </section>

      <section className="reports">
        <div className="header">
        <p>RECENT ITEMS</p>
        <p>Latest reports on campus</p>
        <p>Browse recently submitted found items — one of them might be yours.</p>
        </div>
          <div className='cards'>
        {items.slice(0, 4).map((item, index) => (
            <ItemCard
                key={index}
                category={item.category}
                itemName={item.itemName}
                locationSeen={item.locationSeen}
                date={item.date}
                description={item.description}
            />
        ))}
        </div>
        <div className="cta">
      <Link to="/reports"><button>View Recent Items</button></Link>
      </div>
      </section>

    <section >
      <div className='how-it-works'>
        <div className="header">
        <p>HOW IT WORKS</p>
        <p>Simple, fast, transparent</p>
        <p>Three easy steps to report or recover your item — no physical visits required.</p>
       </div>
        <div className='cards'>
        <div className='card'>
            <button>1</button>
            <h2>Create an account</h2>
            <p>Sign up with your name, email to get started in under a minute.</p>
        </div>
        <div className='card'>
          <button>2</button>
            <h2>Submit your report</h2>
            <p>Sign up with your LASU email and student or staff ID to get started in under a minute.</p>
        </div>
        <div className='card'>
          <button>3</button>
            <h2>Get notified instantly</h2>
            <p>Our matching engine scans all reports automatically and emails you the moment a potential match is found.</p>
        </div>
        </div>
        </div>
    </section>

      <footer>
        <h1>Lost & Found</h1>
        <p>© 2026 Lost & Found Platform. All rights reserved.</p>
        <div>
       <Link to="/report-lost"><button>Report Lost Item</button></Link>
        <Link to="/report-found"><button>Report Found Item</button></Link>
        </div>

      </footer>
    </div>
  )
}

export default Homepage
