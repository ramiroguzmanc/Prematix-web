import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import TextEditor from "../components/TextEditor";
import Acordion from "../components/Acordion";
import { AuthContext } from "../Auth";
import firebase from "firebase";

const QA = () => {
  const { currentUser } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

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

  return (
    <Container className="my-5">
      {currentUser && isAdmin ? (
        <Button
          variant="primary"
          className="mb-4"
          onClick={() => setShow(true)}
        >
          Añadir nueva entrada
        </Button>
      ) : (
        <></>
      )}
      <Row>
        <Col>
          <Acordion isAdmin={isAdmin} currentUser={currentUser} qa={true} />
        </Col>
      </Row>
      <TextEditor
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        qa={true}
      />
    </Container>
  );
};

export default QA;
