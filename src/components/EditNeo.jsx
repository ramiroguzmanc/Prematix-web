import React, { useState } from "react";
import {
  Button,
  Form,
  Modal,
  Row,
  Col,
  Image,
  ProgressBar,
} from "react-bootstrap";
import firebase from "firebase";

const EditNeo = (props) => {
  let [isProgressBarVisible, setProgressBarVisible] = useState(false);
  let [uploadPercentage, setUploadPercentage] = useState(0);

  const NeoUpdate = async (ImageURL) => {
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
      await db
        .collection("users")
        .doc(email)
        .collection("neonatos")
        .doc(props.neo.id)
        .update(neo);
      props.handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    let fileInput = document.getElementById("formFile");
    let file = fileInput.files[0];
    let ImageURL = "";

    if (!file) {
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
      };
      try {
        await db
          .collection("users")
          .doc(email)
          .collection("neonatos")
          .doc(props.neo.id)
          .update(neo);
        props.handleClose();
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        let storageRef = firebase.storage().ref();
        let uploadTask = storageRef.child("/NeoImages/" + file.name).put(file);

        uploadTask.on(
          "state_changed",
          function (snapshot) {
            setProgressBarVisible(true);
            var progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadPercentage(progress);
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
                NeoUpdate(downloadURL);
                setUploadPercentage(0);
                setProgressBarVisible(0);
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
          <Modal.Title>Actualizar neonato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Image
              src={props.neo.ImageURL}
              className="mx-auto d-block"
              alt="Neonato"
              width="200px"
              thumbnail
              roundedCircle
            />

            <Form.Group className="mb-3">
              <Form.Label>Nombres</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombres"
                id="neoNameInput"
                defaultValue={props.neo.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellidos"
                id="neoLastNameInput"
                defaultValue={props.neo.lastname}
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
                    defaultChecked={props.neo.sex == "Masculino" ? true : false}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Femenino"
                    name="sexGroup"
                    id="inline-radio-2"
                    value="Femenino"
                    defaultChecked={props.neo.sex == "Femenino" ? true : false}
                  />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>Fecha Nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="DD/MM/AAAA"
                  id="neoBornInput"
                  defaultValue={props.neo.born}
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
                  defaultValue={props.neo.weight}
                />
              </Form.Group>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>Altura</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Altura"
                  id="neoHeightInput"
                  defaultValue={props.neo.height}
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
                  defaultValue={props.neo.IMC}
                />
              </Form.Group>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>PC</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Perímetro Craneal"
                  id="neoPCInput"
                  defaultValue={props.neo.PC}
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
          <Button variant="success" onClick={handleUpdate}>
            Actualizar
          </Button>
        </Modal.Footer>
        <ProgressBar
          animated
          now={uploadPercentage}
          className={isProgressBarVisible ? "" : "d-none"}
        />
      </Modal>
    </>
  );
};

export default EditNeo;
