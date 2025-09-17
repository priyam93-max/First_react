import React from "react";
import "./Main.css";
import bgImage from "../assets/bgImage.jpg"; 

function Main() {
  return (
    <section className="main"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
    <h3 className="tagline">welcome to react website 🚀</h3>
     <div className="overlay"></div>

    <div className="main-content">
        <h1 className="tagline"> Home Page</h1>
        <p className="subtext">Welcome to our platform!
We’re here to make your journey simple, smooth, and enjoyable. Explore a wide range of services designed to meet your needs, connect with trusted vendors, and experience hassle-free booking right at your fingertips. Whether you’re browsing, discovering, or making a purchase, our goal is to bring convenience and quality together — all in one place.</p>
        <button className="main-btn">Get Started</button>

    </div>
    </section>
  );
}

export default Main;