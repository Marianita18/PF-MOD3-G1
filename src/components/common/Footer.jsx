import {NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./styles/footer.css";
const Footer = () => {
  return (
    <footer className="text-center py-4">
      <section className="container-fluid text-center">
        <article className="row py-5">
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 py-2 py-sm-2 py-md-0 py-lg-0">
            <img
              src="/src/assets/imgCommon/imgNavbar/Logo.png"
              className="img-fluid"
              width="270"
              alt="Logo Hotel Oasis Urbano"
            />
            <h6>
              <a className="text-decoration-none titulo text-white" to="/"></a>
            </h6>
            <a
              className="px-2 itemActive"
              href="https://www.instagram.com/"
              target="_blank">
              <i className="bi bi-instagram fs-5"></i>
            </a>
            <a
              className="px-2  itemActive"
              href="https://www.facebook.com/"
              target="_blank">
              <i className="bi bi-facebook fs-5"></i>
            </a>
            <a
              className="px-2  itemActive"
              href="https://www.x.com/"
              target="_blank">
              <i className="bi bi-twitter-x fs-5"></i>
            </a>
            <a
              className="px-2 itemActive"
              href="https://www.youtube.com/"
              target="_blank">
              <i className="bi bi-youtube fs-5"></i>
            </a>
            <a
              className="px-2  itemActive"
              href="https://www.linkedin.com/"
              target="_blank">
              <i className="bi bi-linkedin fs-5"></i>
            </a>
            <a
              className="px-2  itemActive"
              href="https://discord.com/"
              target="_blank">
              <i className="bi bi-discord fs-5"></i>
            </a>
          </div>
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 text-center text-sm-center text-md-start text-lg-start py-2">
            <h6 className="itemActive fw-bold">Contacto</h6>
            <ul className="list-unstyled fz">
              <li>
                <NavLink
                  to="/Error404"
                  className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Email: info@hoteloasisurbano.com
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Error404"
                  className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Teléfono: +54 381 578-3030
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Error404"
                  className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Dirección: Av. General Paz 576, Piso 9, oficina 2 San Miguel
                  de Tucumán, Argentina
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 text-center text-sm-center text-md-start text-lg-start py-2">
            <h6 className="itemActive fw-bold">Políticas</h6>
            <ul className="list-unstyled fz">
              <li>
                <NavLink
                  to="/Error404"
                  className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Terminos y condiciones
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Error404"
                  className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Privacidad
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Error404"
                  className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Configuración de cookies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Error404"
                  className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Terminos y condiciones
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 text-sm-center text-md-start text-lg-start py-2">
            <h6 className="itemActive fw-bold">Suscríbete y recibe noticias</h6>
            <form
              className="d-flex ms-sm-0 me-md-0 me-lg-5"
              id="formSuscripcion">
              <input
                className="form-control me-2 fz"
                type="email"
                id="emailFooter"
                placeholder="Escribe tu email aqui"
              />
              <Button variant="outline-light fw-bold" type="submit">
                Unirse
              </Button>
            </form>
          </div>
        </article>
      </section>
      <p className="text-white">
        &copy; Copyright 2024 Hotel Oasis Urbano - Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
