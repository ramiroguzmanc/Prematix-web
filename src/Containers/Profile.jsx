import React, { useContext } from "react";
import { AuthContext } from "../Auth";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import app from "../firebase";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const { displayName, email } = event.target.elements;
    const user = app.auth().currentUser;

    try {
      await user.updateProfile({
        displayName: displayName.value,
      });
      alert("Nombre actualizado correctamente");
    } catch (error) {
      alert(error);
    }

    console.log(user);
  };

  return (
    <>
      <Card className="col-10 offset-1 my-5 col-lg-6 offset-lg-3">
        <Card.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Uid
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={currentUser.uid}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Nombre
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  defaultValue={currentUser.displayName}
                  name="displayName"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  disabled
                  defaultValue={currentUser.email}
                  name="email"
                />
                {/* {!currentUser.emailVerified ? (
                  <Button block={true}>Verificar</Button>
                ) : null} */}
              </Col>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="offset-5 offset-lg-6"
            >
              Guardar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Profile;
