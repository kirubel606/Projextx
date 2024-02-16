import * as React from "react";
import kena from "../assets/kena.svg";
function About() {
  return (
    <div className="row bg-black" style={{ height: "100vh" }}>
      <div className="col-md-6" style={{ marginTop: "0px" }}>
        <img src={kena} style={{ width: "400px", marginTop: "0px" }} />
      </div>
      <div class="col-md-6 container">
        <div class="row justify-content-center">
          <div style={{ marginRight: "120px" }}>
            <h2 className="text-center  mt-4 mb-4" style={{color:"#D4AF37"}}>
              Welcome to Kena Tech
            </h2>
            <p class="lead" style={{color:"#C0C0C0"}}>
              <strong className="text-white">Our Story</strong>
              <br />
              Kena Tech was founded in response to the need for modern branding
              and digital solutions in Ethiopia. We saw an opportunity to bring
              fresh creativity to businesses lacking a strong online presence.
            </p>
            <p class="lead" style={{color:"#C0C0C0"}}>
              <strong className="text-white">Our Mission</strong>
              <br />
              At Kena Tech, we're committed to providing top-notch services at
              fair prices. Our goal is to exceed expectations by leveraging our
              expertise and creativity to drive tangible results.
            </p>
            <p class="lead" style={{color:"#C0C0C0"}}>
              <strong className="text-white">What Sets Us Apart</strong>
              <br />
              <ul class="text-left">
                <li>
                  <strong className="text-white">Expertise:</strong> Our team brings unmatched
                  experience and untapped potential to every project.
                </li>
                <li>
                  <strong className="text-white">Creativity:</strong> We think outside the box, using
                  innovative marketing strategies to help our clients stand out.
                </li>
                <li>
                  <strong className="text-white">Customer Satisfaction:</strong> Your success is our
                  priority. We're dedicated to delivering quality work on time,
                  every time.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
