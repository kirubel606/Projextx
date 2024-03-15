import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import KENA from "../assets/kena.png";
import "./service.css";

function Services() {
  const services = [
    { name: "Web Development", description: "We specialize in creating responsive and user-friendly websites tailored to your needs." },
    { name: "Digital Marketing", description: "Our digital marketing strategies help your business grow online through targeted campaigns and analytics." },
    { name: "Social Media Management", description: "We handle all aspects of your social media presence, from content creation to community engagement." },
    { name: "Full Photography and Production", description: "Capture the memorable moments of your events with our professional photography and production services." }
  ];

  return (
    <div className="container-fluid" style={{ minHeight: "100vh" }}>
      <h1>Services</h1>

      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <div className="circle">
            <img src={KENA} alt="KENA Logo" className="kena-logo" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        {services.map((service, index) => (
          <div key={index} className="col-md-3">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id={`tooltip-${index}`}>{service.description}</Tooltip>}
            >
              <div className="service">
                <h3>{service.name}</h3>
              </div>
            </OverlayTrigger>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
