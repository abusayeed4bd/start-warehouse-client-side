import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [user] = useAuthState(auth);
  const [sendPasswordResetEmail, sending] =
    useSendPasswordResetEmail(auth);
  
    const [
      signInWithEmailAndPassword,
      user1,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
  const [errorMessage, setErrorMessage] =  useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailOnBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordOnBlur = (event) => {
    setPassword(event.target.value);
  };
  
  

  // require auth redirect
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  
  const handleSingin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    
  };
  
  
  if (user) {
    navigate(from, { replace: true });
  }
  if (sending) {
    toast("reset email send successfully");
  }

  const restPassword = () => {
    if (!email) {
      toast("enter email");
      return;
    }

    sendPasswordResetEmail(email);
  };
  

  return (
    <div className="w-50 mx-auto bg-light p-4 my-5 form">
      <h2 className="text-center">Login</h2>
      <Form onSubmit={handleSingin}>
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

        <Button className="w-100" variant="warning" type="submit">
          Login
        </Button>
        
      </Form>
      <p className="text-danger text-center my-3"> {error && error.message}</p>
      <div>
        <p className="text-center my-4">
          New to this website?
          <Link className="text-decoration-none text-warning" to="/register">
            Create a New Account
          </Link>
        </p>
      </div>
      <div>
        <p className="text-center my-4">
          forgot password ?
          <button
            onClick={restPassword}
            className="btn btn-link text-decoration-none text-warning"
          >
            reset password
          </button>
          <ToastContainer />
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
