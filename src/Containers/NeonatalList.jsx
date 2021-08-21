import React, { useEffect, useContext, useState } from "react";
import { Container, Row } from "react-bootstrap";
import NeoCard from "../components/NeoCard";
import firebase from "firebase";
import { AuthContext } from "../Auth";
import Loader from "../components/Loader";

const NeonatalList = () => {
  const { currentUser } = useContext(AuthContext);
  const displayName = currentUser.displayName;
  const [neonatos, setNeonatos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
            const {
              IMC,
              ImageURL,
              PC,
              born,
              height,
              lastname,
              name,
              sex,
              weight,
            } = doc.data();
            neonatos.push({
              id: doc.id,
              IMC,
              ImageURL,
              PC,
              born,
              height,
              lastname,
              name,
              sex,
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
        <Loader />
      ) : (
        <>
          <h1 className="text-center text-light">Neonatos de {displayName}</h1>
          <Row className="justify-content-md-center my-5">
            {neonatos.map((neo) => (
              <NeoCard
                key={neo.id}
                name={neo.name}
                lastname={neo.lastname}
                weight={neo.weight}
                height={neo.height}
                IMC={neo.IMC}
                neo={neo}
                to={`/neonatallist/${neo.id}`}
              />
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default NeonatalList;
