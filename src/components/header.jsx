import React from "react";
import "../css/header.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Navbar.Brand as={Link} to="/dashboard">
          Prematix Web
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Cuidado neonatal
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Acerca de mi neonato
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Ver mi neonato
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Preguntas frecuentes
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Contactar pediatra
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Acerca de
            </Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <Nav.Link eventKey={2} as={Link} to="/login">
              Iniciar Sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default header;
