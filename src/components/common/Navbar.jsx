import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/imgCommon/imgNavbar/Logo.png";
import LogIn from "./LogIn";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/navbar.css";
import { useState } from "react";


function NavBar() {
  const [mostrarModalLogIn, setMostrarModalLogIn] = useState(false);

  const handleMostrarModalLogIn = () => setMostrarModalLogIn(true);
  const handleCerrarModalLogIn = () => setMostrarModalLogIn(false);

  return (
    <Navbar
      expand="lg"
      className="nav mx-0 px-0 my-0 py-0"
      data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} end to="/">
          <img src={Logo} width={250} alt="Logo Hotel Oasis Urbano" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="nav" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0">
            <NavLink end to="/" className=" nav-link fw-bold">
              Inicio
            </NavLink>
            <NavLink className="nav-link fw-bold" end to="/sobreNosotros">
              ¿Quiénes somos?
            </NavLink>
            <NavLink className="nav-link fw-bold" end to="/galeriaImagenes">
              Galeria de Imágenes
            </NavLink>
            <NavDropdown
              className="fw-bold"
              title="Catálogo Habitaciones"
              data-bs-theme="light">
              <NavDropdown.Item
                as={Link}
                className=" fw-bold "
               end to="/suiteStandard">
                Suite Standard
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                className="fw-bold "
              end to="/suiteJunior">
                Suite Junior
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} className="nav-item fw-bold" end to="/suitePremiun">
                Suite Premium
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-link fw-bold" end to="/contacto">
              Contacto
            </NavLink>
            <NavLink className="btn btn-outline fw-bold text-white botonLogIn">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

