import React from "react";
import { useNavigate } from "react-router-dom";
import banner from '../../../image/banner.jpg'
import bannerImage from '../../../image/banner-img.png'
import "./Banner.css";

const Banner = () => {
  return (
    <div style={{ background: `url(${banner})` }} className=" ">
      <div className="container d-flex py-4 justify-content-between align-items-center  banner">
        <div className="banner-text order-2 order-md-2 order-lg-1 w-50">
          <h2 className="display-5 text fw-bold">
            Warehousing services for importers who distribute throughout North
            America.
          </h2>
          {/* <h2 className="display-3 fw-bold text-warning">Warehouse</h2> */}
          <button onClick={useNavigate("/inventory")} className="btn btn-warning text-white fs-5">
            Explore More
          </button>
        </div>
        <div className="banner-img w-50 w-sm-100 order-lg-2 order-1 order-md-1">
          <img className="img-fluid" src={bannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
