import React from "react";
import Main from "../components/Main";
import bgImage from "../assets/bgImage.jpg"; 
function Contact() {
  return (
    <section className="main"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
    <div>
       <h2>Contact Us</h2>
      <p>Email: dummy@example.com</p>
      <p>Phone: +91-9993301123</p>
      <p>Dummy Address: 123, React Street, India</p>
    </div>
    </section>
  );
}

export default Contact;