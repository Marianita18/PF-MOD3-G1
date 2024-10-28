import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const ModalUsuarios = ({ show, handleClose}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    console.log(datos);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} className="Informacion">
      <Modal.Header closeButton>
        <Modal.Title>Datos del Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mt-2" controlId="nombreUsuario">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: juan gomez"
              {...register("nombreCompleto", {
                required:
                  "El nombre completo del usuario es un dato obligatorio",
                minLength: {
                  value: 5,
                  message: "la cantidad de caracteres minimos es de 5",
                },
                maxLength: {
                  value: 25,
                  message: "la cantidad de caracteres maximos es de 25",
                },
              })}
            />
          </Form.Group>
          <Form.Text className="mb-3 mt-1 text-danger">
            {errors.nombreCompleto?.message}
          </Form.Text>

          <Form.Group className="mt-3" controlId="correoUsuario">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: juan@gmail.com"
              {...register("correo", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Debe ingresar un correo electrónico válido",
                },
              })}
            />
          </Form.Group>
          <Form.Text className="mb-3 text-danger">
            {errors.correo?.message}
          </Form.Text>

          <Button
            className="my-3 d-flex justify-content-start"
            variant="primary"
            type="submit"
          >
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalUsuarios;
