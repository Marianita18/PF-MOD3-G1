import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const FormularioFooter = () => {
  const {
    register,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <form className="d-flex ms-sm-0 me-md-0 me-lg-5">
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
           <NavLink className="btn btn-outline-light" to="*">
        Unirse
      </NavLink>
      {errors.email && (
        <p className="text-danger ms-2">{errors.email.message}</p>
      )}
    </form>
  );
};

export default FormularioFooter;
