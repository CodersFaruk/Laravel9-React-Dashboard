import React, { useState } from "react";
import { Form, Button, Container, Row, Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Registraion = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=new useNavigate();

  async function handleSubmit() {
    const inputData = { name, email, password };
    let result = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });
    result = await result.json(inputData);
    console.log("result", result);
    localStorage.setItem('userData',JSON.stringify(result));
    history('/');
  }

  return (
    <>
      <Container>
        <Row>
          <div className="col-md-4">
            <Card className="mt-5">
              <Card.Body>
                <Card.Title className="text-center text-danger fw-bold m-2">
                  Customer Registraion Form
                </Card.Title>
                <hr />
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button variant="dark" type="submit" onClick={handleSubmit}>
                  Register Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-8"></div>
        </Row>
      </Container>
    </>
  );
};

export default Registraion;
