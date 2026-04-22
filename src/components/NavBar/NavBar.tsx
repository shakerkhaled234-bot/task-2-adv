import React, { useState } from 'react';
import './NavBar.css'; 
import { NavLink } from 'react-router-dom';


interface NavBarProps {
  logo?: string; 
  items: string[];
}

const NavBar: React.FC<NavBarProps> = ({ items }) => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <nav className="nav-main-container">
        <div className="logo-section">
          <img src="/assets/img/Logo.png" alt="Logo" className="logo-img-nav" />
        </div>

        <div className="nav-spacer"></div>

        <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="hamburger-icon">
            <span></span><span></span><span></span>
          </div>
        </div>


        <ul className={`nav-links-list ${isMenuOpen ? 'open' : ''}`}>
          {items.map((item) => (
            <li key={item}>
              <NavLink 
                to={item ==="Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;