import React from "react";

const SingleItem = ({ item }) => {
  const { name, img, price, quantity, supplier, description } = item;
  return (
    <div className="col-4">
      <div className="card p-3">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h4>Price: {price}</h4>
        <p>{description}</p>
        <p>Supplier: {supplier}</p>
        <button className="btn btn-warning">Update</button>
      </div>
    </div>
  );
};

export default SingleItem;
