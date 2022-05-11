import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1>STAR WAREHOUSE</h1>
            <p>
              Warehousing services for importers who distribute throughout North
              America.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-md-6">
                <h2>Pages</h2>
                <ul>
                  <li><Link className="text-decoration-none text-white"to="/">Home</Link></li>
                  <li><Link className="text-decoration-none text-white"to="/blog">Blog</Link></li>
                  <li><Link className="text-decoration-none text-white"to="/inventory">Inventory</Link></li>
                  <li><Link className="text-decoration-none text-white"to="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-6">
                <h2>User's control</h2>
                <ul>
                  <li><Link className="text-decoration-none text-white" to="/login">Login</Link></li>
                  <li><Link className="text-decoration-none text-white"to="/register">Register</Link></li>
                  <li><Link className="text-decoration-none text-white"to="/myitem">My Item</Link></li>
                  <li><Link className="text-decoration-none text-white"to="/manage">Manage Item</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
