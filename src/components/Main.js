import React from "react";
import "./Main.css";
import bgImage from "../assets/bgImage.jpg"; 
function Main() {
  return (
    <div className="main"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h1 className="tagline">This is my First React page 🚀</h1>
    </div>
  );
}

export default Main;