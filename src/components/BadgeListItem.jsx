import React from "react";
import { Figure } from "react-bootstrap";
import "../css/BadgeList.css";

const BadgeListItem = () => {
  return (
    <div className="item" sm={6}>
      <Figure className="figureclass">
        <Figure.Image
          src={"https://picsum.photos/100/100"}
          width={100}
          height={100}
        />
      </Figure>
      <div className="item__infoContainer">
        <span className="item__infoContainer--name">
          <p>Nombre Apellido</p>
        </span>
        <span>
          <small className="text-muted">
            <p className="item__infoContainer--subtitle">Peso:</p>
          </small>
        </span>
        <span>
          <small className="text-muted">
            <p className="item__infoContainer--subtitle">IMC:</p>
          </small>
        </span>
        <span>
          <small className="text-muted">
            <p className="item__infoContainer--subtitle">Altura:</p>
          </small>
        </span>
      </div>
    </div>
  );
};

export default BadgeListItem;
