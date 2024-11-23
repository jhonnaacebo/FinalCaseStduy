import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to E-Commerce App</h1>
      <p>Your one-stop shop for managing and browsing products!</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/register">
          <Button variant="primary" style={{ marginRight: "10px" }}>
            Register
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="secondary">Login</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
