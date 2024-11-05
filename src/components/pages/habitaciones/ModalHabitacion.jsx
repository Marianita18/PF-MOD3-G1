import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import {
  obtenerHabitacion,
  editarHabitacion,
  crearHabitacion,
} from "../../../helpers/queries";
import "react-datepicker/dist/react-datepicker.css";

const ModalHabitacion = ({ id, show, handleClose, estoyCreandoHabitacion }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (!estoyCreandoHabitacion) {
      cargarDatosDeHabitacion();
    }
  }, []);

  const cargarDatosDeHabitacion = async () => {
    const respuesta = await obtenerHabitacion(id);
    if (respuesta.status === 200) {
      const datosHabitacion = await respuesta.json();
      setValue("numero", datosHabitacion.numero);
      setValue("tipo", datosHabitacion.tipo);
      setValue("precio", datosHabitacion.precio);
      setValue("fecha", datosHabitacion.fecha);
      setValue("imagen", datosHabitacion.imagen);
    }
  };

  const [tipo, setTipo] = useState("");
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  const seleccionarTipo = (key) => {
    setTipo(key);
  };

  const habitacionValidada = async (habitacion) => {
    if (estoyCreandoHabitacion) {
      const respuesta = await crearHabitacion(habitacion);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Habitacion creada",
          text: `La habitacion ${habitacion.numero}, fue creada correctamente`,
          icon: "success",
        });
        handleClose();
      } else {
        Swal.fire({
          title: "Ocurrió un error",
          text: `La habitacion ${habitacion.numero}, no fue creada correctamente, intente nuevamente más tarde.`,
          icon: "error",
        });
      }
    } else {
      const respuesta = await editarHabitacion(habitacion, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Habitacion editado",
          text: `La habitacion ${habitacion.numero}, fue editado correctamente`,
          icon: "success",
        });
        handleClose();
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `La habitacion ${habitacion.numero} no pudo ser editado, intente esta operación en unos minutos.`,
          icon: "error",
        });
      }
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="Informacion">
        <Modal.Header closeButton>
          <Modal.Title>
            {estoyCreandoHabitacion ? "Nueva Habitación" : "Editar Habitación"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(habitacionValidada)}>
            <Form.Group className="mb-1" controlId="numeroHabitacion">
              <Form.Label for="Name">Numero de Habitacion</Form.Label>
              <Form.Control
                type="number"
                placeholder="20"
                {...register("numero", {
                  required: "El numero de la habitacion es un dato obligatorio",
                  min: {
                    value: 1,
                    message: "el numero de habitaciones comienza desde uno",
                  },
                  max: {
                    value: 1000,
                    message: "el numero de habitaciones como maximo es mil",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="mb-3 text-danger">
              {errors.numero?.message}
            </Form.Text>

            <Form.Group className="mt-3" controlId="tipoHabitacion">
              <Form.Label for="tipo">Tipo de Habitacion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Seleccione el tipo de habitacion"
                value={tipo}
                {...register("tipo", {
                  required: "El tipo de habitacion es un dato obligatorio",
                })}
              />
              <Dropdown className="mt-2" onSelect={seleccionarTipo}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {"Seleccionar tipo"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Suite Standard">
                    Suite Standard
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Suite Junior">
                    Suite Junior
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Suite Premium">
                    Suite Premium
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Text className="mb-3 text-danger">
              {errors.tipo?.message}
            </Form.Text>

            <Form.Group className="mt-3" controlId="precioHabitacion">
              <Form.Label for="Precio">Precio</Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="150"
                  {...register("precio", {
                    required:
                      "El precio de la habitacion es un dato obligatorio",
                    min: {
                      value: 150,
                      message: "El precio minimo es 150",
                    },
                    max: {
                      value: 200000,
                      message: "El precio maximo es 2000$",
                    },
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

            <Form.Group className="my-4" controlId="fechaHabitacion">
              <Form.Label for="Fecha">Disponibilidad en Fechas</Form.Label>
              <div className="d-flex justify-content-between">
                <DatePicker
                  selected={fechaInicio}
                  onChange={setFechaInicio}
                  startDate={fechaInicio}
                  endDate={fechaFin}
                  placeholderText="Fecha Inicio"
                  dateFormat="dd-MM-yyyy"
                />
                <DatePicker
                  selected={fechaFin}
                  onChange={setFechaFin}
                  startDate={fechaInicio}
                  endDate={fechaFin}
                  placeholderText="Fecha Fin"
                  dateFormat="dd-MM-yyyy"
                  minDate={fechaInicio}
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

            <Form.Group className="" controlId="imagenHabitacion">
              <Form.Label for="imagen">Foto de la Habitacion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https:"
                {...register("imagen", {
                  required: "La imagen es obligatoria",
                  pattern: {
                    value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                    message: "Debe ingresar una URL válida (jpg|jpeg|gif|png)",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger">
              {errors.imagen?.message}
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
    </>
  );
};

export default ModalHabitacion;
