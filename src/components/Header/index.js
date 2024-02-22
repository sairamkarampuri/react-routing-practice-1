// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <nav className="nav-container">
      <div className="logo-section">
        <img
          className="wave-logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <h1 className="wave-logo-text">Wave</h1>
      </div>
      <ul className="nav-item-section">
        <li className="">
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
        <li className="">
          <Link className="nav-item" to="/about">
            About
          </Link>
        </li>
        <li className="">
          <Link className="nav-item" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
