import React, { useEffect, useContext, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import NeoCard from "../components/NeoCard";
import firebase from "firebase";
import { AuthContext } from "../Auth";

const NeonatalList = () => {
  const { currentUser } = useContext(AuthContext);
  const displayName = currentUser.displayName;
  const [neonatos, setNeonatos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = firebase.firestore();
    try {
      db.collection("users")
        .doc(currentUser.email)
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
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Container className="my-4">
      {isLoading ? (
        <Row className="justify-content-md-center my-5">
          <Spinner animation="border" role="status" variant="light">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Row>
      ) : (
        <>
          <h1 className="text-center" style={{ color: "whitesmoke" }}>
            Neonatos de {displayName}
          </h1>
          <Row className="justify-content-md-center my-5">
            {neonatos.map((neo) => (
              <NeoCard
                key={neo.id}
                name={neo.name}
                lastname={neo.lastname}
                weight={neo.weight}
                height={neo.height}
                IMC={neo.IMC}
              />
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default NeonatalList;
