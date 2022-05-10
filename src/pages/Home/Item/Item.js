import React, { useEffect, useState } from "react";
import SingleItem from "../../Shared/SingleItem/SingleItem";

const Item = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/iteams")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <SingleItem key={item._id} item={item}></SingleItem>
        ))}
      </div>
    </div>
  );
};

export default Item;
