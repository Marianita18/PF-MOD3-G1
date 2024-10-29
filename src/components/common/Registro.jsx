import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section  className="container-fluid d-flex justify-content-center">
      <Form onSubmit={handleSubmit(onSubmit)} className="w-50 border px-3 py-3 mt-5 border-primary rounded shadow mb-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bolder">Correo Electronico</Form.Label>
          <Form.Control
            type="email"
            placeholder="juan123@hotmail.com"
            className="lead shadow"
            {...register("correo", {
              required: "el correo es un dato obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Ingrese una dirección de correo electrónico válida",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bolder">Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="juan123"
            className="lead shadow"
            {...register("usuario", {
              required: "el nombre de usuario es un campo obligatorio",
              minLength: 6,
              maxLength: 20,
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message:
                  "el nombre de usuario debe tener al menos un numero y caracter especial",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.text?.message}</Form.Text>
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
          <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrarme
        </Button>
      </Form>
    </section>
  );
};

export default Registro;
