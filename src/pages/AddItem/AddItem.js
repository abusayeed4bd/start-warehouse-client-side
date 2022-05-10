import React from "react";
import { Button, Form } from "react-bootstrap";

const AddItem = () => {
  return (
    <div className="container bg-light p-4 w-50 mx-auto">
      <Form>
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
          <Form.Control
            type="text"
            name="img"
            placeholder="Enter Supplier Name"
          />
        </Form.Group>

        <Button variant="warning" className="w-100" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
