import React from 'react';
import './Footer.css'; // استيراد ملف الـ CSS العادي

// --- 1. استيراد الصور (تأكد من صحة المسارات لديك) ---
// أيقونات الاتصال

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* التعريف بالهوية */}
        <div className="footer-brand">
          <div className="footer-logo">
            {/* يمكنك هنا أيضاً إضافة لوجو كصورة إذا أردت */}
           <img src="/assets/img/Logo.png" alt="" /> 
          </div>
          <p className="footer-description">
            We believe in the power of play to foster creativity, 
            problem-solving skills, and imagination.
          </p>
          
          {/* --- 2. استبدال النصوص بوسوم img --- */}
          <div className="contact-info-item">
            <div className="info-icon-wrapper">
              <img src="/assets/img/mail.png" alt="Email" className="contact-icon-img" />
            </div>
            hello@littlelearners.com
          </div>
          <div className="contact-info-item">
            <div className="info-icon-wrapper">
              <img src="/assets/img/phone.png" alt="Phone" className="contact-icon-img" />
            </div>
            +91 91813 23 2309
          </div>
          <div className="contact-info-item">
            <div className="info-icon-wrapper">
              <img src="/assets/img/location.png" alt="Location" className="contact-icon-img" />
            </div>
            Somewhere in the World
          </div>
        </div>

        {/* أعمدة الروابط */}
        <div className="footer-links-grid">
          {/* ... (بقية أعمدة الروابط تبقى كما هي) ... */}
          <div className="footer-column">
            <h4>Home</h4>
            <ul>
              <li>Features</li>
              <li>Our Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li>Our Mission</li>
              <li>Our Vission</li>
              <li>Awards and Recognitions</li>
              <li>History</li>
              <li>Teachers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Academics</h4>
            <ul>
              <li>Special Features</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li>Information</li>
              <li>Map & Direction</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="legal-links">
          <span>Terms of Service</span> | 
          <span>Privacy Policy</span> | 
          <span>Cookie Policy</span>
        </div>

        {/* --- 3. استبدال أيقونات السوشيال ميديا بصور --- */}
        <div className="social-media-icons">
          <a href="#" className="social-icon-card">
            <img src="/assets/img/facebook.png" alt="Facebook" className="social-icon-img" />
          </a>
          <a href="#" className="social-icon-card">
            <img src="/assets/img/twitter.png" alt="X (Twitter)" className="social-icon-img" />
          </a>
          <a href="#" className="social-icon-card">
            <img src="/assets/img/linkedin.png" alt="LinkedIn" className="social-icon-img" />
          </a>
        </div>
      </div>

      <p className="footer-copy-text">
        Copyright © [2023] Little Learners Academy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;