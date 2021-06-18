import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../components/DashBoardCard";

const Dashboard = () => {
  return (
    <Container>
      <Row className="px-1 p-lg-4 mt-5">
        <Card
          to="/neonatalcare"
          title="Cuidado neonatal"
          description="Mira los cuidados especiales que debes tener con tu recién
                nacido y la información más relevante que debes saber sobre
                ellos."
        />
        <Card
          to="/neonatallist"
          title="Acerca de mi neonato"
          description="Mira la información básica más reciente de tu neonato"
        />
        <Card
          to="/"
          title="Ver mi neonato"
          description="Mira a tu neonato en vivo desde la incubadora!"
        />
        <Card
          to="/frequentquestions"
          title="Preguntas frecuentes"
          description="Resuelve tus dudas apoyándote en las preguntas más comunes que
                tienen los padres de recién nacidos."
        />
        <Card
          to="/"
          title="Contactar pediatra"
          description="Realiza una consulta médica con el pediatra encargado por medio
                de una videollamada"
        />
        <Card
          to="/profile"
          title="Mi cuenta"
          description="Mira información relacionada con tu perfil"
        />
      </Row>
    </Container>
  );
};

export default Dashboard;
