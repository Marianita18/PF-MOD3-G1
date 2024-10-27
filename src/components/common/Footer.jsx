import "./styles/footer.css";
import Button from "react-bootstrap/Button";
import Logo from "../../assets/imgCommon/imgFooter/Logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <section className="container-fluid text-center">
        <article className="row py-5">
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 py-2 py-sm-2 py-md-0 py-lg-0">
            <img
              src={Logo}
              className="img-fluid"
              width="250"
              alt="Logo Hotel Oasis Urbano"
            />
            <h6>
              <a
                className="text-decoration-none titulo text-white"
                href="../index.html"></a>
            </h6>
            <a
              className="fz itemActive px-2"
              href="https://www.instagram.com/"
              target="_blank">
              <i className="bi bi-instagram fs-5"></i>
            </a>
            <a
              className="fz itemActive px-2"
              href="https://www.facebook.com/"
              target="_blank">
              <i className="bi bi-facebook fs-5"></i>
            </a>
            <a
              className="fz itemActive px-2"
              href="https://www.x.com/"
              target="_blank">
              <i className="bi bi-twitter-x fs-5"></i>
            </a>
            <a
              className="fz itemActive px-2"
              href="https://www.youtube.com/"
              target="_blank">
              <i className="bi bi-youtube fs-5"></i>
            </a>
            <a
              className=" fz itemActive px-2"
              href="https://www.linkedin.com/"
              target="_blank">
              <i className="bi bi-linkedin fs-5"></i>
            </a>
            <a
              className="fz itemActive px-2"
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
                  to="*"
                  className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Email: info@magneto.com
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="*"
                  className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Teléfono: +123 456 7890
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="*"
                  className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Dirección: Calle Ficticia 123, Ciudad, País
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 text-center text-sm-center text-md-start text-lg-start py-2">
            <h6 className="itemActive fw-bold">Políticas</h6>
            <ul className="list-unstyled fz">
              <li>
                <NavLink
                  to="*"
                  className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Terminos y condiciones
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="*"
                  className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Privacidad
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="*"
                  className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                  Configuración de cookies
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
              <Button variant="outline-light" type="submit">
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
