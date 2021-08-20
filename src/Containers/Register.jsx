import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Card, Form, Button } from "react-bootstrap";
import app from "../firebase";

const Register = ({ history }) => {
  const handleRegister = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        await app
          .firestore()
          .collection("users")
          .doc(email.value)
          .set({ adminUser: false });
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <>
      <Card className="mt-5 mx-sm-5">
        <Card.Body>
          <h2 className="text-center mb-4">Registrarse</h2>
          <Form onSubmit={handleRegister}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" name="password" required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Registrarse
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default withRouter(Register);
