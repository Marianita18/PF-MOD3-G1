import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/imgCommon/Logo.png";
import "./styles/navbar.css";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="nav mx-0 px-0 my-0 py-0"
      data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            width={250}
            alt="Logo Hotel Oasis Urbano"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="nav" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0">
            <NavLink end to="/" className=" nav-link fw-bold">
              Inicio
            </NavLink>
            <NavLink className="nav-link fw-bold" end to="/quienesSomos">
              ¿Quiénes somos?
            </NavLink>
            <NavLink className="nav-link fw-bold" end to="/galeriaImagenes">
              Galeria de Imágenes
            </NavLink>
            <NavDropdown
              className="fw-bold"
              title="Catálogo Habitaciones"
              id="navbarScrollingDropdown"
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
              <NavDropdown.Item as={Link} className="nav-item fw-bold ">
                Suite Premium
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} className="nav-item fw-bold ">
                Apart
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavLink className="nav-link fw-bold" end to="/contacto">
              Contacto
            </NavLink>
            <Button className="fw-bold buttonLogin" variant="outline-light">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
