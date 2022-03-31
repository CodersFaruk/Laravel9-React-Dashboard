import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="#">
            Ecom-Dashboard
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="#">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/addProduct">
              Add Product
            </Nav.Link>
            <Nav.Link as={Link} to="/updatePorduct">
              Update Product
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
