import React from "react";
import "../css/login.css";
import { Button, Form, Container, Row, Col, Media } from "react-bootstrap";
import image from "../images/loginimage2.jpg";

const login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h1>Prematix Login</h1>
        <Container>
          <Form>
            <Row className="mt-5">
              <Col xs={6}>
                <Media className="justify-content-md-center">
                  <img src={image} alt="Mother with baby" height={250} />
                </Media>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Correo electrónico" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="my-4">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Button variant="success" type="submit">
                  Iniciar sesión
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default login;
