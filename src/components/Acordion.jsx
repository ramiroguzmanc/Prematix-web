import React, { useEffect } from "react";
import { Accordion, Card, Table } from "react-bootstrap";
import firebase from "firebase";
import { useState } from "react";
import parse from "html-react-parser";

const Acordion = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    db.collection("neocare").onSnapshot((qsp) => {
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
      <Accordion defaultActiveKey="0">
        {entries.map((ent) => {
          return (
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={ent.id}>
                <h5>{ent.title}</h5>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={ent.id}>
                <Card.Body>{parse(ent.content)}</Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </>
  );
};

export default Acordion;
