import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const quantitiy = event.target.quantitiy.value;
    const supplier = event.target.supplier.value;
    const img = event.target.img.value;

    fetch("https://radiant-dusk-12584.herokuapp.com/iteams", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        description,
        quantitiy,
        supplier,
        img,
        uid: user.uid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
        console.log(data);
      });
  };

  return (
    <div className="container bg-light p-4 w-50 mx-auto form">
      <h2 className="text-center">Add item</h2>
      <Form onSubmit={handleAddItem}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Item Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" name="price" placeholder="Enter Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="text"
            name="quantitiy"
            placeholder="Enter Quantity"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter Description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="supplier">
          <Form.Label>Supplier</Form.Label>
          <Form.Control
            type="text"
            name="supplier"
            placeholder="Enter Supplier Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="img">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" name="img" placeholder="Enter Image link" />
        </Form.Group>

        <Button variant="warning" className="w-100" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
