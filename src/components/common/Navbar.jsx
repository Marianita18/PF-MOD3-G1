import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogIn from "./LogIn"; 
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/imgCommon/imgNavbar/Logo.png";
import "./styles/navbar.css";

function NavBar({usuarioLogueado, setUsuarioLogueado, mostrarModalLogIn, handleAbrirModalLogIn, handleCerrarModalLogIn}) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const navegacion = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("hotel");
    setUsuarioLogueado({});
    navegacion("/");
  };

  useEffect(() => {}, [usuarioLogueado]);

  return (
    <>
      <Navbar expand="lg" className="nav mx-0 px-0 my-0 py-0" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} width={250} alt="Logo Hotel Oasis Urbano" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="nav" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <NavLink to="/" end className="nav-link fw-bold">Inicio</NavLink>
              <NavLink to="/sobreNosotros" className="nav-link fw-bold">¿Quiénes somos?</NavLink>
              <NavLink to="/galeriaImagenes" className="nav-link fw-bold">Galeria de Imágenes</NavLink>   
              {(!usuarioLogueado || usuarioLogueado.role !== "admin") && (
                <NavDropdown className="fw-bold" title="Catálogo Habitaciones" data-bs-theme="light">
                  <NavDropdown.Item as={Link} className="fw-bold" to="/suiteStandard">
                    Suite Standard
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} className="fw-bold" to="/suiteJunior">
                    Suite Junior
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} className="nav-item fw-bold" to="/suitePremiun">
                    Suite Premium
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {(!usuarioLogueado || usuarioLogueado.role !== "admin") && (
                <NavLink to="/reservas" className="nav-link fw-bold">Sus Reservas</NavLink>
              )}
              <NavLink to="/contacto" className="nav-link fw-bold">Contacto</NavLink>
              {usuarioLogueado && usuarioLogueado.role === "admin" ? (
                <>
                  <NavLink to="/administrador" className="nav-link fw-bold">administrador</NavLink>
                  <Button className="my-1 py-1" onClick={logout}>Cerrar sesion</Button>
                </>
              ) : (
                <NavLink onClick={handleAbrirModalLogIn} className="nav-link fw-bold">login</NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LogIn show={mostrarModalLogIn} handleClose={handleCerrarModalLogIn} setUsuarioLogueado={setUsuarioLogueado} />
    </>
  );
}

export default NavBar;