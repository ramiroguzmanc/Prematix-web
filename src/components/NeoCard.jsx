import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NeoCard = (props) => {
  return (
    <>
      <Col md="auto">
        <Card
          style={{ width: "18rem" }}
          className="mb-2"
          as={Link}
          to={props.to}
        >
          <Card.Header>
            <Card.Title>
              {props.name} {props.lastname}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <small className="text-muted">Peso: {props.weight}</small>
            </Card.Text>
            <Card.Text>
              <small className="text-muted">IMC: {props.IMC}</small>
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Altura: {props.height}</small>
            </Card.Text>
            <Card.Text>
              <small className="text-muted">
                F. Nacimiento: {props.neo.born}
              </small>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default NeoCard;
