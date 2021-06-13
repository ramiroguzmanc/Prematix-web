import React, { useState, useEffect } from "react";
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
import fireConfig from "../fireConfig";
import image from "../images/loginimage.png";

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fireConfig.auth().onAuthStateChanged((user) => {
      user ? console.log("User loggeado") : console.log("User no loggeado");
    });
  }, []);

  const handlePress = async () => {
    try {
      setIsLoading(true);
      await fireConfig
        .auth()
        .signInWithEmailAndPassword(userInput.email, userInput.password)
        .then((userCredential) => {
          setIsLoading(false);
          let user = userCredential.user;
          console.log("Usuario Logueado: " + user);
        });
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
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Prematix Login</h1>
        <Container>
          <Form>
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
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="my-4">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button
                  variant="success"
                  onClick={handlePress}
                  disabled={isLoading}
                >
                  {isLoading ? "Cargando..." : "Iniciar sesión"}
                </Button>
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

export default Login;
