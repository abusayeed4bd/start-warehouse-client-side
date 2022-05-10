import React from "react";
import bannerImage from "../../../image/banner-img.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" ">
      <div className="container d-flex justify-content-between align-items-center  banner">
        <div className="banner-text w-50">
          <h2 className="display-5 fw-bold">
            Warehousing services for importers who distribute throughout North
            America.
          </h2>
          {/* <h2 className="display-3 fw-bold text-warning">Warehouse</h2> */}
          <button className="btn btn-warning text-white fs-5">
            Explore More
          </button>
        </div>
        <div className="banner-img w-50 w-sm-100">
          <img className="img-fluid" src={bannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
