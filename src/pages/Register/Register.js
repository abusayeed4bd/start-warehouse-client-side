import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const handleCreateAccount = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="w-50 mx-auto bg-light p-4 my-3">
        <h2 className="text-center">Create account</h2>
        <Form onSubmit={handleCreateAccount}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>

          <Button className="w-100 text-white" variant="warning" type="submit">
            Create Account
          </Button>
        </Form>
        <div>
          <p className="text-center my-4">
            Already have an account?
            <Link className="text-decoration-none text-warning" to="/login">
              Log in here
            </Link>
          </p>
        </div>
        <div className="devider d-flex align-items-center justify-content-between">
          <div className="line bg-warning w-100"></div>
          <p className="mt-3 mx-4">or</p>
          <div className="line bg-warning w-100"></div>
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
