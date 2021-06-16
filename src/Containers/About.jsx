import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Row className="my-5 mx-0">
        <Col className="col-10 offset-1 col-md-8 offset-md-2">
          <Card className="p-4">
            <h1>Prematix Web (Beta)</h1>
            <p>
              La presente aplicación web es el resultado del proyecto de tesis:
              DISEÑO Y DESARROLLO DE UNA APLICACIÓN MULTIPLATAFORMA PARA LA
              ATENCIÓN EN SALUD EN RECIÉN NACIDOS PREMATUROS EN LOS SERVICIOS DE
              UTIN, NEONATOS Y LACTANTES DE UNA INSTITUCIÓN DE SALUD DE
              MONTERÍA. Proyecto interdisciplinario realizado por los semilleros
              de investigación GNOXIS y -- de la Universidad del Sinú sede
              Montería.
            </p>
            <h3>Integrantes grupo GNOXIS</h3>
            <ul>
              <li>Ramiro Guzmán Cabrera</li>
              <li>Cristian Castillo Álvarez</li>
              <li>Sergio Pérez Arrieta</li>
              <li>Juan Torres Tovio (Asesor)</li>
            </ul>
            <h3>Integrantes grupo --</h3>
            <ul>
              <li>Jemima Cassares Guarnizo</li>
              <li>Carolina Castellanos (Asesora)</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default About;
