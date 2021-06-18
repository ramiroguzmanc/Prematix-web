import React, { useEffect, useContext, useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import firebase from "firebase";
import { AuthContext } from "../Auth";
import Loader from "../components/Loader";

const NeonatalInfo = (props) => {
  const { currentUser } = useContext(AuthContext);
  const neoId = props.match.params.neoId;
  const [neonato, setNeonato] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const db = firebase.firestore();
    try {
      db.collection("users")
        .doc(currentUser.email)
        .collection("neonatos")
        .doc(neoId)
        .get()
        .then((doc) => {
          doc.exists
            ? setNeonato(doc.data())
            : alert("No se ha encontrado información");
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Container className="my-5">
      {isLoading ? (
        <Loader />
      ) : (
        <Row>
          <Col>
            <Card>
              <Row>
                <Col className="col-md-6 offset-md-3">
                  <img
                    src="https://picsum.photos/200"
                    class="img-thumbnail rounded-circle mx-auto my-5 d-block"
                    alt="..."
                  />
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 col-md-6 offset-md-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      <b>Nombres:</b> {neonato.name}
                    </li>
                    <li class="list-group-item">
                      <b>Apellidos:</b> {neonato.lastname}
                    </li>
                    <li class="list-group-item">
                      <b>Fecha nacimiento:</b> {neonato.born}
                    </li>
                    <li class="list-group-item">
                      <b>Peso:</b> {neonato.weight} lbs.
                    </li>
                    <li class="list-group-item">
                      <b>Estatura:</b> {neonato.height} cm
                    </li>
                    <li class="list-group-item">
                      <b>Perímetro craneal:</b> {neonato.PC} cm
                    </li>
                    <li class="list-group-item">
                      <b>IMC:</b> {neonato.IMC}
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default NeonatalInfo;
