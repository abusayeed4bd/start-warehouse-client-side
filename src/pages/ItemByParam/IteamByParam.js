import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const IteamByParam = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isReload, setIsRelode] = useState(true);
  const { _id, name, img, price, quantitiy, supplier, description } = item;
  useEffect(() => {
    const url = `http://localhost:5000/iteam/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [isReload]);

  const handleUpdateQuantity = (event) => {
    event.preventDefault();
    const insertedQuantity = event.target.insertedQuantity.value;
    if (insertedQuantity > 0) {
      const newQuantity = parseInt(insertedQuantity) + parseInt(quantitiy);
      console.log("new quantity", newQuantity);
      const url = `http://localhost:5000/iteam/${id}`;
      fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          name: name,
          img: img,
          price: price,
          quantitiy: newQuantity,
          supplier: supplier,
          description: description,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setIsRelode(!isReload);
        });
    }
  };
  const handleDelivered = () => {
    if (quantitiy > 0) {
      const newQuantity = parseInt(quantitiy) - 1;
      const url = `http://localhost:5000/iteam/${id}`;
      fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          name: name,
          img: img,
          price: price,
          quantitiy: newQuantity,
          supplier: supplier,
          description: description,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setIsRelode(!isReload);
        });
    }
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img className="w-100" src={img} alt="" />
        </div>
        <div className="col-md-6">
          <h2>{name}</h2>
          <h4>Supplier: {supplier}</h4>
          <h3>Price: {price}</h3>
          <h5>Quantity: {quantitiy}</h5>
          <p>{description}</p>
          <button onClick={handleDelivered} className="btn btn-success">
            Delivered
          </button>
          <form onSubmit={handleUpdateQuantity}>
            <input
              className="form-control w-25 mt-4"
              type="number"
              placeholder="Add Quanity"
              name="insertedQuantity"
            />
            <input
              className="btn btn-warning w-25 mb-4"
              type="submit"
              value="Add Quanity"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default IteamByParam;
