import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const ModalHabitacion = ({ show, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    console.log(datos);
  };

  const [tipo, setTipo] = useState("");
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  const seleccionarTipo = (key) => {
    setTipo(key);
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        onSubmit={handleSubmit(onSubmit)}
        className="Informacion"
      >
        <Modal.Header closeButton>
          <Modal.Title>Agregar Habitacion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
                  required: "El precio de la habitacion es un dato obligatorio",
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
                    message: "Por favor, ingrese un precio válido (solo números)",
                  },
                })}
              />
             </InputGroup>
            </Form.Group>
            <Form.Text className="mb-3 text-danger">
              {errors.precio?.message}
            </Form.Text>


            <Form.Group className="my-4" controlId="fechaoHabitacion">
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
                    value: /^(https?:\/\/)([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}([\/|\w|.|-]*)(\.(jpg|jpeg|gif|png))$/i,
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
    </div>
  );
};

export default ModalHabitacion;
