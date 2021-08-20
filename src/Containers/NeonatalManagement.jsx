import React, { useState } from "react";
import { Col, InputGroup, Button, FormControl, Row } from "react-bootstrap";
import BadgeListItem from "../components/BadgeListItem";
import firebase from "firebase";
import AddNewNeo from "../components/AddNewNeo";

const NeonatalManagement = () => {
  const [neonatos, setNeonatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (e) => {
    setNeonatos([]);
    const email = document.getElementById("emailInput").value;
    if (email == "") {
      alert("El correo correo ingresado no es válido");
      setValidEmail(false);
    } else {
      setLoading(true);
      const db = firebase.firestore();
      db.collection("users")
        .doc(email)
        .get()
        .then((doc) => {
          if (doc.exists) {
            try {
              db.collection("users")
                .doc(email)
                .collection("neonatos")
                .onSnapshot((qsp) => {
                  const neonatos = [];
                  qsp.docs.forEach((doc) => {
                    const { IMC, PC, born, height, lastname, name, weight } =
                      doc.data();
                    neonatos.push({
                      id: doc.id,
                      IMC,
                      PC,
                      born,
                      height,
                      lastname,
                      name,
                      weight,
                    });
                  });
                  setNeonatos(neonatos);
                  setLoading(false);
                  setValidEmail(true);
                  if (neonatos.length === 0)
                    alert("El email ingresado no registra neonatos");
                });
            } catch (error) {
              setLoading(false);
              setValidEmail(false);
              console.error(error);
            }
          } else {
            alert("Correo no válido o usuario no registrado");
            setValidEmail(false);
            setLoading(false);
          }
        });
    }
  };

  return (
    <>
      <Row>
        <Col sm={{ span: 6, offset: 3 }} className="mt-5">
          <h1 className="text-center text-light">Administración de neonato</h1>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Correo electrónico responsable"
              aria-label="Correo electrónico responsable"
              aria-describedby="basic-addon2"
              id="emailInput"
              type="email"
            />
            <Button
              variant="primary"
              id="button-addon2"
              onClick={handleClick}
              disabled={loading}
            >
              {loading ? "Cargando" : "Cargar neonatos"}
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 6, offset: 3 }}>
          {neonatos.map((neo) => {
            return (
              <BadgeListItem
                name={neo.name}
                lastname={neo.lastname}
                weight={neo.weight}
                imc={neo.IMC}
                height={neo.height}
              />
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col sm={{ offset: 5 }}>
          <Button variant="success" onClick={handleShow} disabled={!validEmail}>
            Añadir nuevo neonato
          </Button>
        </Col>
      </Row>
      <AddNewNeo
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        onClick={handleShow}
      />
    </>
  );
};

export default NeonatalManagement;
