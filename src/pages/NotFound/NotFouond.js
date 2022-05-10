import React from "react";
import notFound from "../../image/404.png";

const NotFouond = () => {
  return (
    <div className="container text-center">
      <img className="img-fluid  w-50 " src={notFound} alt="" />
    </div>
  );
};

export default NotFouond;
