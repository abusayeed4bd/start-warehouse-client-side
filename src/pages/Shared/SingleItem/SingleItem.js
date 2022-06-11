import React from "react";
import { useNavigate } from "react-router-dom";

const SingleItem = ({ item }) => {
  const { _id, name, img, price, quantitiy, supplier, description } = item;

  const navigate = useNavigate();
  const navigateToItem = () => {
    navigate(`/item/${item._id}`);
  };

  return (
    <div class="card text-center col-lg-4 gx-4 g-1 pt-2  border-box ">
      <img src={img} class="card-img-top img-fluid" alt="..." />
      <div class="card-body">
        <h3 class="card-title text-warning">{name}</h3>
        <h5>Price: ${price}</h5>
        <h6>Spplier: {supplier}</h6>
        <strong>Available: {quantitiy} pcs</strong>
        <p class="card-text">{description}</p>
      </div>
      <div class="card-footer bg-white border-0">
        <button onClick={() => navigateToItem(_id)} className="btn btn-warning w-100 ">Manage Product</button>
      </div>
    </div>
  );
};

export default SingleItem;
