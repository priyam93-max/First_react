import React from "react";
import Main from "../components/Main";
import bgImage from "../assets/bgImage.jpg"; 
function Services() {
  return (
    <section className="main"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
    <div>
      <h2>Our Services</h2>
      <p>We provide a wide range of services designed to make your life easier and more convenient. Whether you’re looking for trusted professionals, quick solutions, or reliable support, we’ve got you covered.</p>
      <h4>Here is list</h4>
      <ul>
        <li>Web Development</li>
        <li>UI/UX Design</li>
        <li>API Integration</li>
        <li>Dummy Service 1</li>
        <li>Dummy Service 2</li>
      </ul>
    </div>
    </section>
  );
}

export default Services;