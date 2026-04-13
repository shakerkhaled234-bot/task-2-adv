import React, { useState } from 'react';
import './NavBar.css'; 


const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      <nav className="nav-main-container">
        
        {/* القسم 1: اللوجو (برتقالي) */}
        <div className="logo-section">
          <img src="/assets/img/Logo.png" alt="Logo" className="logo-img-nav" />

        </div>

        {/* القسم 2: مساحة فارغة (تختفي في الموبايل أو تتحول لفاصل) */}
        <div className="nav-spacer"></div>

        {/* القسم 3: زر القائمة (بيج فاتح) */}
        <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* القائمة المنسدلة (تظهر عند النقر) */}
        <ul className={`nav-links-list ${isMenuOpen ? 'open' : ''}`}>
          <li className="active">Home</li>
          <li>About Us</li>
          <li>Academics</li>
          <li>Admissions</li>
          <li>Student Life</li>
          <li className="contact-btn">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;