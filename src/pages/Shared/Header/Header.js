import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <Navbar className="sticky-top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold" as={Link} to="/">
          STAR WAREHOUSE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="outline-0" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/inventory">
              Inventory
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav className="user-nav">
              {user && (
                <Nav.Link as={Link} to="/manage">
                  Manage Item
                </Nav.Link>
              )}
              {user && (
                <Nav.Link as={Link} to="/add">
                  Add Item
                </Nav.Link>
              )}
              {user && (
                <Nav.Link as={Link} to="/myitem">
                  My Item
                </Nav.Link>
              )}
            </Nav>
            {user ? (
              <Button onClick={logout} className="btn btn-warning text-white">
                Log Out &#9094;
              </Button>
            ) : (
              <Button
                className="btn btn-warning text-white"
                as={Link}
                to="/login"
              >
                Login &#9094;
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
