import * as React from "react";
import "./team.css";
import CEO from "../assets/ceo.jpg";

function Team() {
  return (
    <div className="bg-black" style={{ minHeight: "100vh" }}>
      <h1 className="text-center pt-4" style={{ color: "#D4AF37" }}>
        The Team
      </h1>
      <div className="justify-content-center row" style={{ marginTop: "5%" }}>
        <div className="m-3 card shadowcard col-md-4" style={{ maxWidth: "200px" }}>
          <img src={CEO} className="card-img-top" alt="Card Image" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Title</h5>
            <p className="card-text">Name</p>
            <p className="card-text text-muted">Expertise</p>
          </div>
        </div>
        <div className="m-3 card shadowcard col-md-4" style={{ maxWidth: "200px" }}>
          <img src={CEO} className="card-img-top" alt="Card Image" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Title</h5>
            <p className="card-text">Name</p>
            <p className="card-text text-muted">Expertise</p>
          </div>
        </div>
        <div className="m-3 card shadowcard col-md-4" style={{ maxWidth: "200px" }}>
          <img src={CEO} className="card-img-top" alt="Card Image" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Title</h5>
            <p className="card-text">Name</p>
            <p className="card-text text-muted">Expertise</p>
          </div>
        </div>
        <div className="m-3 card shadowcard col-md-4" style={{ maxWidth: "200px" }}>
          <img src={CEO} className="card-img-top" alt="Card Image" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Title</h5>
            <p className="card-text">Name</p>
            <p className="card-text text-muted">Expertise</p>
          </div>
        </div>
        <div className="m-3 card shadowcard col-md-4" style={{ maxWidth: "200px" }}>
          <img src={CEO} className="card-img-top" alt="Card Image" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">Title</h5>
            <p className="card-text">Name</p>
            <p className="card-text text-muted">Expertise</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
