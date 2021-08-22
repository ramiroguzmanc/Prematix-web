import React from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import firebase from "firebase";

const TextEditor = (props) => {
  const [text, setText] = useState("");

  const handleAddText = () => {
    const db = firebase.firestore();
    const title = document.getElementById("titleInput").value;

    db.collection("neocare")
      .add({
        title: title,
        content: text,
      })
      .then((docRef) => console.log("Document saved with ref: ", docRef.id))
      .catch((error) => console.error(error));

    props.handleClose();
    setText("");
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
            <Form.Control type="text" placeholder="Título" id="titleInput" />
          </Form.Group>
          <div className="editor">
            <Form.Label>Contenido</Form.Label>
            <CKEditor
              editor={ClassicEditor}
              data={text}
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
          <Button variant="primary" onClick={handleAddText}>
            Añadir nueva entrada
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TextEditor;
