import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { crearReserva } from "../../../helpers/queries";
import "react-datepicker/dist/react-datepicker.css";

export const ModalReserva = ({
  show,
  handleClose,
  setreservado,
  actualizarFechas,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await crearReserva(data);
      console.log(response);
      if (response.status === 201) {
        const datos = await response.json();
        console.log(datos);
        reset();
        handleClose();
        setreservado(true);
        setTipo(datos);

        alert("reserva Creada");
      } else {
        alert("Error al crear la reserva");
      }
    } catch (error) {}
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="Informacion">
        <Modal.Header closeButton>
          <Modal.Title>Solicitar Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="my-4" controlId="nombreCompleto">
              <Form.Label for="name">Nombre y Apellido</Form.Label>
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
              <Form.Group className="mt-3" controlId="precioHabitacion">
                <Form.Label for="Precio">Monto</Form.Label>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="$"
                    {...register("precio", {
                      required:
                        "El precio de la habitacion es un dato obligatorio",

                      pattern: {
                        value: /^(?!0)[0-9]+$/,
                        message:
                          "Por favor, ingrese un precio válido (solo números)",
                      },
                    })}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Text className="mb-3 text-danger">
                {errors.precio?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="my-4" controlId="fechaHabitacion">
              <Form.Label for="Fecha">Disponibilidad en Fechas</Form.Label>
              <div className="d-flex justify-content-between">
                <DatePicker
                  placeholderText="Fecha Inicio"
                  dateFormat="dd-MM-yyyy"
                />
                <DatePicker
                  placeholderText="Fecha Fin"
                  dateFormat="dd-MM-yyyy"
                />
              </div>
              {fechaInicio && fechaFin && (
                <Form.Control
                  className="my-2"
                  type="Fecha"
                  placeholder="30-10-2024 a 05-11-2024"
                  value={`${fechaInicio.toLocaleDateString(
                    "es-ES"
                  )} a ${fechaFin.toLocaleDateString("es-ES")}`}
                  {...register("fecha", {
                    required:
                      "La fecha de la habitacion es un dato obligatorio",
                  })}
                />
              )}
            </Form.Group>
            <Form.Text className="mb-3 text-danger">
              {errors.fecha?.message}
            </Form.Text>

            <Button
              className="my-3 d-flex justify-content-start"
              variant="primary"
              type="submit"
            >
              Reservar Habitacion
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
