import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          console.log("Email sent successfully!");
          // You can also reset the form fields here if needed
        } else {
          console.error("Failed to send email.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-black" style={{ minHeight: "100vh" }}>
      <div className="row">
        <div className="col-md-5 text-center mt-4 text-white" style={{ paddingTop: "10%", paddingLeft: "5%" }}>
          <h1>Contact us</h1>
          <p>Want to work with us? Then please fill out this form or reach out to us using the phones and emails found below</p>
        </div>
        <div className="col-md-5 mx-auto" style={{ paddingTop: "10%" }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control mb-4"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control mb-4"
              placeholder="Email"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control mb-4"
              rows="3"
              placeholder="What's in your mind?"
            ></textarea>
            <button type="submit" className="btn btn-primary mx-auto">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
