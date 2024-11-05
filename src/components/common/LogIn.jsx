import "./styles/navbar.css";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from "../../helpers/queries";
import { useNavigate } from 'react-router-dom';

const LogIn = ({ show, handleClose, setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();
  
  const onSubmit = (data) => {
    console.log(data);
    if(login(data)){
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso administrador",
        text: "¡Bienvenido!",
        confirmButtonText: "Cerrar",
      });
      setUsuarioLogueado(data.email)
      navegacion('/administrador');
      handleClose();
    }else {
      Swal.fire({
        title: "Ocurrió un error",
        text: `La contraseña o el correo no es valido`,
        icon: "error"
      });
    }
  };

  const irRegistro = () => {
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="modalTitleTipografia">
          Iniciar Sesión
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="modalLogIn">
        <Row>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src="https://images.pexels.com/photos/2227829/pexels-photo-2227829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hotel vista a ciudad"
              className="img-fluid imagenModalLogIn"
            />
          </Col>

          <Col md={6}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="correoElectronico">
                <Form.Label className="fw-bold">Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="juanperez@gmail.com"
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Formato de correo no válido",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="contraseña">
                <Form.Label className="fw-bold">Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Holamund0"
                  {...register("password", {
                    required: "La contraseña es obligatoria",
                    minLength: {
                      value: 6,
                      message: "La contraseña debe tener al menos 6 caracteres",
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                      message:
                        "La contraseña debe contener al menos una letra y un número",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
                <Button className="botonModalLogIn w-100 mt-3" type="submit">
                  Iniciar Sesión
                </Button>

                <hr />
                <p className="d-2 text-center small fw-light italic text-primary mt-2">
                  ¿Quieres realizar una reserva?
                </p>
              </Form.Group>
              <NavLink
                className="btn btn-secondary w-100"
                to="/registro"
                onClick={irRegistro}
              >
                ¡Regístrate!
              </NavLink>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default LogIn;
