import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Acordion from "../components/Acordion";

const NeonatalCare = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Acordion />
        </Col>
      </Row>
    </Container>
  );
};

export default NeonatalCare;
