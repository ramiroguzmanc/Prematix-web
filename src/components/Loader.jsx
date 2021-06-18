import React from "react";
import { Row, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Row className="justify-content-md-center my-5">
      <Spinner animation="border" role="status" variant="light">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Row>
  );
};

export default Loader;
