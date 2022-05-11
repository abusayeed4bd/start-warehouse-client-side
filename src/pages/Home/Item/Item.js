import React, { useEffect, useState } from "react";
import useItem from "../../../Hooks/useItem";
import SingleItem from "../../Shared/SingleItem/SingleItem";

const Item = () => {
  const [items] = useItem();
  const homeItem = items.slice(0, 6);

  return (
    <div className="container">
      <h2 className="text-center my-4 text-warning fs-1 fw-bold">Inventory</h2>
      <div className="row">
        {homeItem.map((item) => (
          <SingleItem key={item._id} item={item}></SingleItem>
        ))}
      </div>
    </div>
  );
};

export default Item;
