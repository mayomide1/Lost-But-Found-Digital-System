import "./Homepage.css"
import {Link} from "react-router-dom"
import {ItemCard, items} from "./Report"

const Homepage = () => {

  return (
    <div>
      <nav id='navbar'>
        <h1>Lost & Found</h1>

        <div className='nav-cta'>
            <button>Home</button>
            <Link to="/reports"><button>Reports</button></Link>
            <Link to="/report-lost"><button>Report Lost Item</button></Link>
            <Link to="/report-found"><button>Report Found Item</button></Link>
        </div>
        <div className='buttons'>
            <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/login"><button>Sign In</button></Link>
        </div>
      </nav>

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

    <section className='how-it-works'>
        <h1>HOW IT WORKS</h1>
        <div className='cards'>
        <div className='card'>
            <h2>Report Items lost of found</h2>
        </div>
        <div className='card'>
            <h2>We Match</h2>
        </div>
        <div className='card'>
            <h2>You Claim/Return</h2>
        </div>
        </div>
    </section>

      <footer>
        <h1>Lost & Found</h1>
        <p>© 2026 Lost & Found Platform. All rights reserved.</p>
        <div>
       <Link to="/report-lost"><p>Report Lost Item</p></Link>
        <Link to="/report-found"><p>Report Found Item</p></Link>
        </div>

      </footer>
    </div>
  )
}

export default Homepage
