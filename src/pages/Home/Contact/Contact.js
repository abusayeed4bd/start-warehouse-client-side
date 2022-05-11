import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div  className=" page w-50 mx-auto bg-light p-4 my-5 form">
<h2 className="text-center">Contact us</h2>
            <form>
            <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            
            type="text"
            placeholder="Your Name"
            required
          />
        </Form.Group>
            <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            
            type="email"
            placeholder="Your email"
            required
          />
        </Form.Group>
            <Form.Group className="mb-3" controlId="name">
          <Form.Label>Message</Form.Label>
          <textarea value="Hi," className="form-control" cols="30" rows="10">

          </textarea>
        </Form.Group>
        <Button type="submit" variant="warning" className="w-100" value="Send Message" >Send Message</Button>
            </form>
        </div>
    );
};

export default Contact;