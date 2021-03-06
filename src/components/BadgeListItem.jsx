import React, { useState } from "react";
import { Figure, Button, Modal, Alert } from "react-bootstrap";
import "../css/BadgeList.css";
import EditNeo from "../components/EditNeo";
import firebase from "../firebase";

const BadgeListItem = (props) => {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    const db = firebase.firestore();
    const email = document.getElementById("emailInput").value;

    db.collection("users")
      .doc(email)
      .collection("neonatos")
      .doc(props.neo.id)
      .delete()
      .then(() => {
        alert("Documento eliminado exitosamente");
      })
      .catch((error) => console.error("Errror eliminando: ", error));

    handleClose();
  };

  return (
    <div className="item" sm={6}>
      <div className="Container">
        <Figure className="figureclass">
          <Figure.Image src={props.neo.ImageURL} width={100} height={100} />
        </Figure>
        <div className="item__infoContainer">
          <span className="item__infoContainer--name">
            <p className="mb-0">
              {props.name} {props.lastname}
            </p>
          </span>
          <span>
            <small className="text-muted">
              <p className="item__infoContainer--subtitle">
                Peso: {props.weight}
              </p>
            </small>
          </span>
          <span>
            <small className="text-muted">
              <p className="item__infoContainer--subtitle">IMC: {props.imc}</p>
            </small>
          </span>
          <span>
            <small className="text-muted">
              <p className="item__infoContainer--subtitle">
                Altura: {props.height}
              </p>
            </small>
          </span>
          <span>
            <small className="text-muted">
              <p className="item__infoContainer--subtitle">
                Nacimiento: {props.neo.born}
              </p>
            </small>
          </span>
        </div>
      </div>
      <div className="item__buttonsContainer">
        <Button
          variant="primary"
          className="d-block mx-1"
          onClick={handleShowEdit}
        >
          Editar
        </Button>
        <Button variant="danger" className="d-block mx-1" onClick={handleShow}>
          Eliminar
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Eliminar el neonato: {props.name} {props.lastname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="danger">
            CUIDADO! Est??s a punto de eliminar el registro de {props.name}{" "}
            {props.lastname}. ??Est??s seguro que deseas continuar? Esta acci??n no
            se puede deshacer
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
      <EditNeo
        show={showEdit}
        handleClose={handleCloseEdit}
        handleShow={handleShowEdit}
        neo={props.neo}
      />
    </div>
  );
};

export default BadgeListItem;
