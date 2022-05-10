import React from "react";
import royal from "../../../image/royal.png";
import cycle from "../../../image/cycle.png";
import suzuki from "../../../image/suzuki.png";
import jimyy from "../../../image/jimyy.png";
import "./Partners.css";

const Partners = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center text-warning display-5 fw-bold">
        Our Partners
      </h2>
      <div className="d-flex align-items-center justify-content-between my-5 img-container">
        <img width="200px" className="img-fluid" src={cycle} alt="" />
        <img width="200px" className="img-fluid" src={suzuki} alt="" />
        <img width="200px" className="img-fluid" src={royal} alt="" />
        <img width="200px" className="img-fluid" src={jimyy} alt="" />
      </div>
    </div>
  );
};

export default Partners;
