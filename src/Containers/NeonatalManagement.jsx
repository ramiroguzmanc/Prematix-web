import React, { useState, useContext } from "react";
import { Col, InputGroup, Button, FormControl, Row } from "react-bootstrap";
import BadgeListItem from "../components/BadgeListItem";
import firebase from "firebase";

const NeonatalManagement = () => {
  const [neonatos, setNeonatos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    const email = document.getElementById("emailInput").value;
    if (email == "") {
      alert("El correo correo ingresado no es válido");
    } else {
      setLoading(true);
      const db = firebase.firestore();
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
            if (neonatos.length === 0)
              alert("El email ingresado no registra neonatos");
          });
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
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
          <Button variant="success">Añadir nuevo neonato</Button>
        </Col>
      </Row>
    </>
  );
};

export default NeonatalManagement;
