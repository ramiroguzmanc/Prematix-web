import React, { useState, useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import app from "../firebase";
import { AuthContext } from "../Auth";
import "../css/login.css";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Media,
  Alert,
} from "react-bootstrap";
import image from "../images/loginimage.png";

const Login = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handlelogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        setIsLoading(true);
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        switch (error.code) {
          case "auth/invalid-email":
            setError("El correo ingresado no es válido");
            break;
          case "auth/user-disabled":
            setError("El correo ingresado ha sido inhabilitado");
            break;
          case "auth/user-not-found":
            setError("El correo ingresado no se encuentra registrado");
            break;
          case "auth/wrong-password":
            setError("La contraseña ingresada es incorrecta");
            break;
          default:
            setError(error.message);
            break;
        }
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login">
      <div className="login__container">
        <h1>Prematix Login</h1>
        <Container>
          <Form onSubmit={handlelogin}>
            <Row className="mt-5">
              <Col xs={6} className="d-none d-md-block">
                <Media className="justify-content-md-center">
                  <img src={image} alt="Mother with baby" height={250} />
                </Media>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Correo electrónico"
                    name="email"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="my-4">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                  />
                </Form.Group>
                <Button type="submit" variant="success" disabled={isLoading}>
                  {isLoading ? "Cargando..." : "Iniciar sesión"}
                </Button>
                <Link to="/register" className="ml-3">
                  Regístrate
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                {error ? (
                  <Alert variant="danger" className="mt-3">
                    {error}
                  </Alert>
                ) : (
                  <></>
                )}
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default withRouter(Login);
