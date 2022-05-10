import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1>STAR WAREHOUSE</h1>
            <p>
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
              amet, consectetur adip
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-md-6">
                <h2>Pages</h2>
                <ul>
                  <li>Home</li>
                  <li>Blog</li>
                  <li>Inventory</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-6">
                <h2>Pages</h2>
                <ul>
                  <li>Login</li>
                  <li>Register</li>
                  <li>My Item</li>
                  <li>Manage Item</li>
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
