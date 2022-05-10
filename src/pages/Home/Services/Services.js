import React from "react";
import guy from "../../../image/guy-with-boxes.png";
import { Link } from "react-router-dom";
import "./Service.css";

const Services = () => {
  return (
    <div className="container py-5">
      <div className="d-flex align-items-center service-container">
        <div className="w-50">
          <img className="service-img" src={guy} alt="" />
        </div>
        <div className="w-50 w-sm-100 mt-5">
          <h2 className="display-6 fw-bold text-warning">
            We offer a wide variety of warehousing services
          </h2>
          <ul>
            <li>Pick-n-Pack</li>
            <li>E-commerce Fulfillment</li>
            <li>Retail Fulfillment</li>
            <li>Online Inventory Reporting</li>
            <li>Ticketing</li>
            <li>Assembly (POP Display)</li>
            <li>Small Parcel (UPS, FedEx, DHL, USPS)</li>
          </ul>
          <Link to="/inventory" className="btn btn-warning text-white">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
