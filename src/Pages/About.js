import React from "react";
import Main from "../components/Main";
import bgImage from "../assets/bgImage.jpg"; 
function About() {
  return (
    <section className="main"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
    <div>
      <h2>About Us</h2>
      <p>We are committed to making everyday services more accessible, reliable, and convenient for everyone. Our platform connects customers with trusted vendors, offering seamless booking, transparent pricing, and a smooth user experience. With a focus on quality and trust, we aim to build lasting relationships and create value for both customers and service providers.</p>
      <p>Dummy data: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    </section>
  );
}


export default About;