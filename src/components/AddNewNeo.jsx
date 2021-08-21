import React from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import firebase from "firebase";

const AddNewNeo = (props) => {
  const NeoRegister = async (ImageURL) => {
    const db = firebase.firestore();
    const email = document.getElementById("emailInput").value;
    let neo = {
      IMC: document.getElementById("neoIMCInput").value,
      PC: document.getElementById("neoPCInput").value,
      born: document.getElementById("neoBornInput").value,
      sex: document.querySelector('input[name="sexGroup"]:checked').value,
      height: document.getElementById("neoHeightInput").value,
      lastname: document.getElementById("neoLastNameInput").value,
      name: document.getElementById("neoNameInput").value,
      weight: document.getElementById("neoWeightInput").value,
      ImageURL: ImageURL,
    };
    try {
      await db.collection("users").doc(email).collection("neonatos").add(neo);
      props.handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async () => {
    let fileInput = document.getElementById("formFile");
    let file = fileInput.files[0];
    let ImageURL = "";

    if (!file) {
      ImageURL =
        "https://firebasestorage.googleapis.com/v0/b/prematix-cbe3a.appspot.com/o/NeoImages%2Fdefaultuser.png?alt=media&token=08157cc1-fa1b-44af-bd61-2ab570b48415";
      NeoRegister(ImageURL);
    } else {
      try {
        let storageRef = firebase.storage().ref();
        let uploadTask = storageRef.child("/NeoImages/" + file.name).put(file);

        uploadTask.on(
          "state_changed",
          function (snapshot) {
            var progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log("Upload is paused");
                break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log("Upload is running");
                break;
            }
          },
          function (error) {
            console.error(error);
          },
          function () {
            uploadTask.snapshot.ref
              .getDownloadURL()
              .then(function (downloadURL) {
                console.log("File available at", downloadURL);
                NeoRegister(downloadURL);
              });
          }
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Agregar nuevo neonato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombres"
                id="neoNameInput"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellidos"
                id="neoLastNameInput"
              />
            </Form.Group>
            <Row>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>Sexo</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Masculino"
                    name="sexGroup"
                    id="inline-radio-1"
                    value="Masculino"
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Femenino"
                    name="sexGroup"
                    id="inline-radio-2"
                    value="Femenino"
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>Fecha Nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="DD/MM/AAAA"
                  id="neoBornInput"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>Peso</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Peso"
                  id="neoWeightInput"
                />
              </Form.Group>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>Altura</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Altura"
                  id="neoHeightInput"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>IMC</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Índice Masa Corporal"
                  id="neoIMCInput"
                />
              </Form.Group>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>PC</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Perímetro Craneal"
                  id="neoPCInput"
                />
              </Form.Group>
            </Row>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Fotografía</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleRegister}>
            Añadir neonato
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewNeo;
