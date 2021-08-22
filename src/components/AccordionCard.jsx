import React, { useState, useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import firebase from "firebase";

const AccordionCard = (props) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    db.collection("qa").onSnapshot((qsp) => {
      const ent = [];
      qsp.forEach((doc) => {
        const { title, content } = doc.data();
        ent.push({
          id: doc.id,
          title: title,
          content: content,
        });
      });
      setEntries(ent);
    });
  }, []);

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
