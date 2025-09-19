import React ,{ useState }from "react";
import axios from "axios";
import Main from "../components/Main";
import bgImage from "../assets/bgImage.jpg"; 
function Contact() {

    
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});
  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    //await axios.post("http://localhost:5000/api/contact", form);
    await axios.post("http://localhost:4000/api/contact", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (err) {
    alert("Error submitting form");
    console.error(err);
  }
};
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
    
    <div style={{ padding: "20px" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        ></textarea>
        <button type="submit" style={{ padding: "10px 20px" }}>
          Submit
        </button>
      </form>
    </div>
    </section>
  );
}

export default Contact;