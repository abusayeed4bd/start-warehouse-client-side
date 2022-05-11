import React from "react";
import { Link } from "react-router-dom";
import useItem from "../../Hooks/useItem";
import Item from "../Home/Item/Item";
import SingleItem from "../Shared/SingleItem/SingleItem";

const Inventory = () => {
  const [items, setItems] = useItem();
  return (
    <div className="container text-center">
      <h2 className=" my-4 text-warning fs-1 fw-bold">Inventory</h2>
      <div className="row">
        {items.map((item) => (
          <SingleItem key={item._id} item={item}></SingleItem>
        ))}
      </div>
      <Link
        className="btn btn-warning text-white text-center my-5"
        to="/manage"
      >
        Manage items
      </Link>
    </div>
  );
};

export default Inventory;
