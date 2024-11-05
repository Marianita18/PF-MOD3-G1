import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { obtenerUsuarios, editarUsuario } from "../../../helpers/queries";
import Swal from "sweetalert2";

const ModalUsuarios = ({ show, handleClose, estoyCreando, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (!estoyCreando) {
      cargarDatosDelUsuario();
    }
  }, []);

  const cargarDatosDelUsuario = async () => {
    const respuesta = await obtenerUsuarios(id);
    if (respuesta.status === 200) {
      const datosUser = await respuesta.json();
      setValue("nombreCompleto", datosUser.nombreCompleto);
      setValue("correoUsuario", datosUser.correoUsuario);
    }
  };

  const usuarioValidado = async (usuario) => {
    if (!estoyCreando) {
      // Editar usuario
      const respuesta = await editarUsuario(usuario, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Usuario editado",
          text: `El usuario ${usuario.nombreCompleto} fue editado correctamente`,
          icon: "success",
        });
        handleClose();
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `No se pudo editar el usuario ${usuario.nombreCompleto}. Intente nuevamente más tarde.`,
          icon: "error",
        });
      }
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className="Informacion">
      <Modal.Header closeButton>
        <Modal.Title>
          {estoyCreando ? "Nueva Habitación" : "Editar Usuario"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(usuarioValidado)}>
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
                  message: "La cantidad de caracteres mínimos es de 5",
                },
                maxLength: {
                  value: 25,
                  message: "La cantidad de caracteres máximos es de 25",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/i,
                  message: "El nombre solo puede contener letras y espacios",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreCompleto?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mt-3" controlId="correo">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: juan@gmail.com"
              {...register("correoUsuario", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Debe ingresar un correo electrónico válido",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.correoUsuario?.message}
            </Form.Text>
          </Form.Group>

          <Button className="my-3" variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalUsuarios;
