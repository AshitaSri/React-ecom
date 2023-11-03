import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Your Brand</h3>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            {/* Add your social media icons or links here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
