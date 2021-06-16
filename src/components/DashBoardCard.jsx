import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/cards.css";

const DashBoardCard = (props) => {
  return (
    <Col className="col-12 my-2 col-md-6 col-lg-4">
      <Card as={Link} to={props.to} className="card">
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DashBoardCard;
