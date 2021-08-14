import React, { useState } from "react";
import { Figure, Button, Modal, Alert } from "react-bootstrap";
import "../css/BadgeList.css";

const BadgeListItem = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="item" sm={6}>
      <div className="Container">
        <Figure className="figureclass">
          <Figure.Image
            src={"https://picsum.photos/100/100"}
            width={100}
            height={100}
          />
        </Figure>
        <div className="item__infoContainer">
          <span className="item__infoContainer--name">
            <p>
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
        </div>
      </div>
      <div className="item__buttonsContainer">
        <Button variant="primary" className="d-block mx-1">
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
            CUIDADO! Estás a punto de eliminar el registro de {props.name}{" "}
            {props.lastname}. ¿Estás seguro que deseas continuar? Esta acción no
            se puede deshacer
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => alert("Registro eliminado")}>
            Eliminar registro
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BadgeListItem;
