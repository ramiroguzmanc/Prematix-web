import React, { useState, useEffect, useContext } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Acordion from "../components/Acordion";
import TextEditor from "../components/TextEditor";
import { AuthContext } from "../Auth";
import firebase from "firebase";

const NeonatalCare = () => {
  const { currentUser } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const db = firebase.firestore();
      try {
        db.collection("users")
          .doc(currentUser.email)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setIsAdmin(doc.data().adminUser);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          });
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <Container className="my-5">
      {currentUser && isAdmin ? (
        <Button
          variant="primary"
          className="mb-4"
          onClick={() => setShow(true)}
        >
          Añadir nuevo
        </Button>
      ) : (
        <></>
      )}
      <Row>
        <Col>
          <Acordion isAdmin={isAdmin} currentUser={currentUser} />
        </Col>
      </Row>
      <TextEditor show={show} setShow={setShow} handleClose={handleClose} />
    </Container>
  );
};

export default NeonatalCare;
