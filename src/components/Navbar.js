import React, { startTransition } from "react";
import { NavLink } from "react-router-dom"; 
import "./Navbar.css";
function Navbar(){
    return(
       <nav className="navbar">
    <h2 className="logo">ReactJs</h2>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
           <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
</nav>
    );
}
export default Navbar;