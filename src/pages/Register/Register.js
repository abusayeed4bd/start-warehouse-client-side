import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailOnBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordOnBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleCreateAccount = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <div className="w-50 mx-auto bg-light p-4 my-3">
        <h2 className="text-center">Create account</h2>
        <Form onSubmit={handleCreateAccount}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailOnBlur}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordOnBlur}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>

          <Button className="w-100 text-white" variant="warning" type="submit">
            {loading ? "Loading..." : "Create Account"}
          </Button>
          {error && (
            <p className="text-danger text-center my-2">{error.message}</p>
          )}
          {user && (
            <p className="text-success text-center my-2">
              Account Created Successfully
            </p>
          )}
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
