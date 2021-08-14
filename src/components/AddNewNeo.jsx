import React from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";

const AddNewNeo = (props) => {
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
              <Form.Control type="text" placeholder="Nombres" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control type="text" placeholder="Apellidos" />
            </Form.Group>

            <Row>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>Peso</Form.Label>
                <Form.Control type="number" placeholder="Peso" />
              </Form.Group>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>Altura</Form.Label>
                <Form.Control type="number" placeholder="Altura" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>IMC</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Índice Masa Corporal"
                />
              </Form.Group>
              <Form.Group className="mb-3" as={Col}>
                <Form.Label>PC</Form.Label>
                <Form.Control type="number" placeholder="Perímetro Craneal" />
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
          <Button variant="success" onClick={props.handleClose}>
            Añadir neonato
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewNeo;
