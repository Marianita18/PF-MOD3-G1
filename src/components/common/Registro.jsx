import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { crearUsuario, obtenerUsuarios } from "../../helpers/queries";
import Swal from "sweetalert2";
import "./styles/navbar.css";

const Registro = ({ estoyCreando, id }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (estoyCreando && id) {
      cargarDatosEnTabla();
    }
  }, [estoyCreando, id]); // Asegúrate de agregar id como dependencia

  const cargarDatosEnTabla = async () => {
    reset(); // Limpia el formulario antes de cargar los datos
    const respuesta = await obtenerUsuarios(id);
    if (respuesta && respuesta.status === 200) { // Verifica que la respuesta sea válida
      const datosUser = await respuesta.json();
      setValue("nombreCompleto", datosUser.nombreCompleto);
      setValue("correoUsuario", datosUser.correoUsuario);
    } else {
      Swal.fire("Error", "No se pudo obtener el usuario.", "error"); // Muestra un error si no se encuentra el usuario
    }
  };


  const usuarioCreado = async (usuario) => {
    if (estoyCreando) {
      // Crear usuario
      const respuesta = await crearUsuario(usuario);
      console.log(respuesta);
      if (respuesta.status === 201) {
        reset();
        Swal.fire({
          title: "Usuario creado",
          text: `El usuario ${usuario.nombreCompleto} fue creado correctamente`,
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `El usuario ${usuario.nombreCompleto} no pudo ser creado, intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    }
  };

  return (
    <>
    <section className="container-fluid fondoNosotros">
    <h3 className="fs-2 text-center text-white container mt-5 pt-5">Registrate</h3>
   </section>

    <section className="container-fluid d-flex justify-content-center Informacion my-4 py4">
      <Form
        onSubmit={handleSubmit(usuarioCreado)}
        className="w-50 border px-3 py-3 my-5 border-primary rounded shadow mb-4"
      >
        <Form.Group className="mb-3" controlId="emailUsuario">
          <Form.Label className="fw-bolder">Correo Electronico</Form.Label>
          <Form.Control
            type="email"
            placeholder="juan123@hotmail.com"
            className="lead shadow"
            {...register("correoUsuario", {
              required: "el correo es un dato obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Ingrese una dirección de correo electrónico válida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.correoUsuario?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="nombreUsuario">
          <Form.Label className="fw-bolder">Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="juan"
            className="lead shadow"
            {...register("nombreCompleto", {
              required: "El nombre completo del usuario es un dato obligatorio",
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bolder">Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Juan123"
            className="lead shadow"
            {...register("contraseña", {
              required: "la contraseña es un campo obligatorio",
              minLength: 8,
              maxLength: 50,
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.contraseña?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrarme
        </Button>
      </Form>
    </section>
    </>
  );
};

export default Registro;
