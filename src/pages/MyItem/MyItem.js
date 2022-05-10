import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItem = () => {
  const [item, setItem] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch("https://radiant-dusk-12584.herokuapp.com/iteams")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const userItem = item.filter((myItem) => user.uid === myItem.uid);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete this item");
    if (proceed) {
      const url = `https://radiant-dusk-12584.herokuapp.com/iteam/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = item.filter((itm) => itm._id !== id);
          setItem(remaining);
        });
    }
  };

  return (
    <div className="container w-50 mx-auto bg-light mt-3 page">
      <h2 className="text-center text-warning ">My Item</h2>
      {userItem.map((item) => (
        <div className="text-center">
          <h2>
            {item.name}{" "}
            <button
              onClick={() => handleDelete(item._id)}
              className="btn btn-danger text-center"
            >
              X
            </button>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default MyItem;
