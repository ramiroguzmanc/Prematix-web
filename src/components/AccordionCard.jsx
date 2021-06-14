import React from "react";
import { Accordion, Card } from "react-bootstrap";

const AccordionCard = (props) => {
  return (
    <>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.eventKey}>
          <h5>{props.title}</h5>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.eventKey}>
          <Card.Body>
            {props.body}
            <br />
            <small className="text-muted">
              {props.font ? "fuente: " : ""}
              {props.font}
            </small>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </>
  );
};

export default AccordionCard;
