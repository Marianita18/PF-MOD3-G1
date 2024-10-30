import { Button } from "react-bootstrap";
import error404 from "../../assets/imgPages/imgError404/error404.png";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="text-center">
      <img
        src={error404}
        alt="Error 404"
        width={2000}
        className="img-fluid mb-4"
      />
      <Button variant="warning" className="mb-4">
        <NavLink className="nav-link" to="/">
          Volver al inicio
        </NavLink>
      </Button>
    </section>
  );
};

export default Error404;
