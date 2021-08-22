import React, { useEffect } from "react";
import { Accordion, Button, Modal, Alert } from "react-bootstrap";
import firebase from "firebase";
import { useState } from "react";
import AcordionItem from "./AcordionItem";

const Acordion = (props) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    db.collection(props.qa ? "qa" : "neocare").onSnapshot((qsp) => {
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
          return <AcordionItem entries={ent} {...props} />;
        })}
      </Accordion>
    </>
  );
};

export default Acordion;
