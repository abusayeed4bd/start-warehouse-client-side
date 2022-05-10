import React from "react";
import useItem from "../../Hooks/useItem";

const ManageItem = () => {
  const [items, setItems] = useItem();

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
          const remaining = items.filter((itm) => itm._id !== id);
          setItems(remaining);
        });
    }
  };

  return (
    <div className="page container">
      {items.map((item) => (
        <div className="mt-2">
          <h2 className="bg-light text-center">
            {item.name}{" "}
            <button
              onClick={() => handleDelete(item._id)}
              className="btn btn-danger text-white"
            >
              Delete
            </button>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ManageItem;
