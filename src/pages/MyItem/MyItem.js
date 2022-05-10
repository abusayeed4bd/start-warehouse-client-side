import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItem = () => {
  const [item, setItem] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch("http://localhost:5000/iteams")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const userItem = item.filter((myItem) => user.uid === myItem.uid);
  return (
    <div className="container w-50 mx-auto bg-light mt-3">
      <h2 className="text-center text-warning ">My Item</h2>
      {userItem.map((item) => (
        <div className="text-center">
          <h2>
            {item.name}{" "}
            <button className="btn btn-danger text-center">X</button>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default MyItem;
