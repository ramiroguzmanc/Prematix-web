import React from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import firebase from "firebase";

const TextEditor = (props) => {
  const [text, setText] = useState("");
  const db = firebase.firestore();

  const handleAddText = () => {
    const title = document.getElementById("titleInput").value;

    db.collection(props.qa ? "qa" : "neocare")
      .add({
        title: title,
        content: text,
      })
      .then((docRef) => console.log("Document saved with ref: ", docRef.id))
      .catch((error) => console.error(error));

    props.handleClose();
    setText("");
  };

  const handleEditText = () => {
    const docRef = db
      .collection(props.qa ? "qa" : "neocare")
      .doc(props.entryID);
    const title = document.getElementById("titleInput").value;

    docRef
      .update({
        title: title,
        content: text,
      })
      .then(() => console.log("Document successfully updated!"))
      .catch((error) => console.error("Error updating document: ", error));

    props.handleClose();
  };

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={() => props.setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Añadir nueva entrada
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título"
              id="titleInput"
              defaultValue={props.edit ? props.titleToEdit : ""}
            />
          </Form.Group>
          <div className="editor">
            <Form.Label>Contenido</Form.Label>
            <CKEditor
              editor={ClassicEditor}
              data={props.edit ? props.textToEdit : text}
              onChange={(event, editor) => {
                const data = editor.getData();
                setText(data);
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={props.edit ? handleEditText : handleAddText}
          >
            {props.edit ? "Editar entrada" : "Añadir nueva entrada"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TextEditor;
