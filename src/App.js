import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
    </Router>
  );
}

export default App;
