import React from "react";
import notFoundImage from "../images/404.png";
import { Media } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <Media className="justify-content-center mt-5">
        <img src={notFoundImage} alt="404" width={500} />
      </Media>
    </>
  );
};

export default NotFound;
