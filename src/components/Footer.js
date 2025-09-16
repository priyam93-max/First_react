import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
        <div className="footer-section">
          <h3>Guide</h3>
          <p>
            We create modern web apps using React 🚀. Our goal is to bring your
            ideas to life with clean design and powerful code.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
        </div>
      <p>© {new Date().getFullYear()} ReactJs | My First website</p>
    </footer>
  );
}

export default Footer;