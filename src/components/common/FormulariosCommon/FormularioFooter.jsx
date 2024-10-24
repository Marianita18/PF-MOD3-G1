import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

const ValidacionFormularioFooter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      title: "Suscripción exitosa",
      text: "Gracias por suscribirte",
      icon: "success",
    });
    reset();
  };

  return (
    <form
      className="d-flex ms-sm-0 me-md-0 me-lg-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="form-control me-2 fz"
        type="email"
        id="emailFooter"
        placeholder="Escribe tu email aquí"
        {...register("email", {
          required: "El email es obligatorio",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Debes ingresar un email válido",
          },
        })}
      />
      <Button variant="outline-light fw-bold" type="submit">
        Unirse
      </Button>
      {errors.email && (
        <p className="text-danger ms-2">{errors.email.message}</p>
      )}
    </form>
  );
};

export default ValidacionFormularioFooter;