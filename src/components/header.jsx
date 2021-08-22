import React, { useContext } from "react";
import "../css/header.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../firebase";
import { AuthContext } from "../Auth";

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  const handleLogOut = async () => {
    try {
      await app.auth().signOut();
    } catch (error) {
      alert("Ha ocurrido un error, inténtalo de nuevo");
    }
  };

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
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/neonatalcare">
              Cuidado neonatal
            </Nav.Link>
            <Nav.Link as={Link} to="/neonatallist">
              Acerca de mi neonato
            </Nav.Link>
            <Nav.Link as={Link} to="/neonatalview">
              Ver mi neonato
            </Nav.Link>
            <Nav.Link as={Link} to="/frequentquestions">
              Preguntas frecuentes
            </Nav.Link>
            <Nav.Link as={Link} to="/contactpediatrician">
              Contactar pediatra
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Acerca de
            </Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}

            {currentUser ? (
              <Button variant="danger" onClick={handleLogOut}>
                Cerrar sesión
              </Button>
            ) : (
              <Nav.Link eventKey={2} as={Link} to="/login">
                Iniciar Sesión
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
