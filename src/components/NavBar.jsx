import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";



function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='nav-bar'>
      <div className='brand-name'>
        <Link to="/">CinephileX</Link>
      </div>
      {/* Desktop Links */}
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>

      {/* Hamburger */}
      <div className="ham-menu">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link
            to="/favorites"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Favorites
          </Link>
        </div>
      )}
    </nav>
  )
}

export default NavBar