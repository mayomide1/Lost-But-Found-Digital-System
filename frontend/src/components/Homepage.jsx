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
        <h1>REPORTS</h1>
          <div className='cards'>
        {items.slice(0, 8).map((item, index) => (
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
      <Link to="/reports"><button>View More</button></Link>
      </div>
      </section>

    <section >
      <div className='how-it-works'>
        <h1>HOW IT WORKS</h1>
        <div className='cards'>
        <div className='card'>
            <h2>1. Report Lost or Found Items</h2>
            <p>Provide a clear description, location, date, and contact info. Attach a photo if possible. Your report will be searchable by others.</p>
        </div>
        <div className='card'>
            <h2>2. We Find Matches</h2>
            <p>Our system compares lost and found reports. When a potential match is found, both parties are notified via email.</p>
        </div>
        <div className='card'>
            <h2>3. Claim or Return Items</h2>
            <p><strong>To claim: </strong>Verify ownership (receipt, photo, unique details). <br /> <strong>To return:</strong>Use the secure contact form to arrange pickup or shipping.</p>
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
