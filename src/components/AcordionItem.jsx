import React, { useState } from "react";
import { Card, Accordion, Button, Modal, Alert } from "react-bootstrap";
import parse from "html-react-parser";
import firebase from "firebase";
import TextEditor from "./TextEditor";

const AcordionItem = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showEditor, setShowEditor] = useState(false);
  const handleCloseEditor = () => setShowEditor(false);
  const handleShowEditor = () => setShowEditor(true);

  const handleDelete = () => {
    const db = firebase.firestore();

    db.collection(props.qa ? "qa" : "neocare")
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
            <div className="buttonsContainer">
              <Button
                variant="primary"
                size="sm"
                className="mr-2"
                onClick={handleShowEditor}
              >
                Editar
              </Button>
              <Button variant="danger" size="sm" onClick={handleShow}>
                Eliminar
              </Button>
            </div>
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
      <TextEditor
        show={showEditor}
        setShow={setShowEditor}
        handleClose={handleCloseEditor}
        edit={true}
        textToEdit={props.entries.content}
        titleToEdit={props.entries.title}
        entryID={props.entries.id}
        {...props}
      />
    </>
  );
};

export default AcordionItem;
