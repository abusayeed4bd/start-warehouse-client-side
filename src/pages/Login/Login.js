import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="w-50 mx-auto bg-light p-4 my-5">
      <h2 className="text-center">Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>

        <Button className="w-100" variant="warning" type="submit">
          Login
        </Button>
      </Form>
      <div>
        <p className="text-center my-4">
          New to this website?
          <Link className="text-decoration-none text-warning" to="/register">
            Create a New Account
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
  );
};

export default Login;
