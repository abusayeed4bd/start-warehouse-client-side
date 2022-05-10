import React from "react";
import { useNavigate } from "react-router-dom";

const SingleItem = ({ item }) => {
  const { _id, name, img, price, quantitiy, supplier, description } = item;

  const navigate = useNavigate();
  const navigateToItem = () => {
    navigate(`/item/${item._id}`);
  };

  return (
    <div className="col-4">
      <div className="card p-3">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h4>Price: ${price}</h4>
        <p>Quantity: {quantitiy}</p>
        <p>{description}</p>
        <p>Supplier: {supplier}</p>
        <button onClick={() => navigateToItem(_id)} className="btn btn-warning">
          Update
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
