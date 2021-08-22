import React, { useState } from "react";
import { Card, Accordion, Button, Modal, Alert } from "react-bootstrap";
import parse from "html-react-parser";
import firebase from "firebase";

const AcordionItem = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    const db = firebase.firestore();

    db.collection("neocare")
      .doc(props.entries.id)
      .delete()
      .then(() => {
        alert("Documento eliminado exitosamente");
      })
      .catch((error) => console.error("Errror eliminando: ", error));

    handleClose();
  };

  return (
    <>
      <Card>
        <Accordion.Toggle
          className="d-flex justify-content-between"
          as={Card.Header}
          eventKey={props.entries.id}
        >
          <h5>{props.entries.title}</h5>
          {props.isAdmin && props.currentUser ? (
            <Button variant="danger" size="sm" onClick={handleShow}>
              Eliminar
            </Button>
          ) : (
            <></>
          )}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.entries.id}>
          <Card.Body>{parse(props.entries.content)}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar la entrada: {props.entries.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="danger">
            CUIDADO! Estás a punto de eliminar el registro:{" "}
            {props.entries.title}. ¿Estás seguro que deseas continuar? Esta
            acción no se puede deshacer
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar registro
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AcordionItem;
