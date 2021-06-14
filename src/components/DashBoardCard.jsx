import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/cards.css";

const DashBoardCard = () => {
  return (
    <Container>
      <Row className="px-1 p-lg-4 mt-5">
        <Col className="col-12 my-2 col-md-6 col-lg-4">
          <Card as={Link} to="/neonatalcare" className="card">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Cuidado neonatal</Card.Title>
              <Card.Text>
                Mira los cuidados especiales que debes tener con tu recién
                nacido y la información más relevante que debes saber sobre
                ellos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 my-2 col-md-6 col-lg-4">
          <Card as={Link} to="/">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Acerca de mi neonato</Card.Title>
              <Card.Text>
                Mira la información básica más reciente de tu neonato
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 my-2 col-md-6 col-lg-4">
          <Card as={Link} to="/">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Ver mi neonato</Card.Title>
              <Card.Text>
                Mira a tu neonato en vivo desde la incubadora!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 my-2 col-md-6 col-lg-4">
          <Card as={Link} to="/frequentquestions">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Preguntas frecuentes</Card.Title>
              <Card.Text>
                Resuelve tus dudas apoyándote en las preguntas más comunes que
                tienen los padres de recién nacidos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 my-2 col-md-6 col-lg-4">
          <Card as={Link} to="/">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Contactar pediatra</Card.Title>
              <Card.Text>
                Realiza una consulta médica con el pediatra encargado por medio
                de una videollamada
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-12 my-2 col-md-6 col-lg-4">
          <Card as={Link} to="/">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Acerca de</Card.Title>
              <Card.Text>Mira información sobre esta app</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoardCard;
