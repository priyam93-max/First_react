import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";
function Navbar(){
    return(
       <nav className="navbar">
    <h2 className="logo">ReactJs</h2>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"href="#">Contact</a>
        </li>
      </ul>
    </div>
</nav>
    );
}
export default Navbar;