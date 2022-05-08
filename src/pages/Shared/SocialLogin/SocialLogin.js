import React from "react";
import google from "../../../image/google.png";

const SocialLogin = () => {
  return (
    <div>
      <button className="btn btn-warning w-100 text-white">
        <img height="25" src={google} alt="" /> Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
