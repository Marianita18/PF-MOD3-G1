import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ItemHabitacion from "./habitaciones/ItemHabitacion";
import ModalHabitacion from "./habitaciones/ModalHabitacion";
import ItemUsuario from "./usuarios/ItemUsuario";

const Administrador = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  const habitacionesIniciales = [
    {
      numero: "101",
      tipo: "doble",
      precio: 120,
      disponibilidad: "2024-10-30 a 2024-11-05",
      foto: "",
    },
    {
      numero: "102",
      tipo: "Suite",
      precio: 200,
      disponibilidad: "2024-11-01 a 2024-11-10",
      foto: "",
    },
  ];

  useEffect(() => {
    obtenerHabitaciones();
    mostrarUsuarios();
  }, []);

  const obtenerHabitaciones = () => {
    setHabitaciones(habitacionesIniciales);
  };

  const [usuarios, setUsuarios] = useState([]);

  const usuariosIniciales = [
    {
      id: "11111",
      nombre: "juan",
      correo: "ppgmail",
    },
    {
      id: "111",
      nombre: "juan",
      correo: "ppgmail",
    },
  ];

  const mostrarUsuarios = () => {
    setUsuarios(usuariosIniciales);
  };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="Informacion">
      <section className="container text-start my-4 py-4">
        <h3>Administrador</h3>
      </section>
      <section className="container">
        <div className="d-flex justify-content-between my-3 py-2">
          <p className="fs-4">Tabla de Habitaciones</p>
          <Button variant="primary" onClick={handleShow}>
            Agregar Habitacion
          </Button>
        </div>
      </section>

      <Table striped responsive bordered className="container">
        <thead className="bg-primary">
          <tr>
            <th>Numero de Habitacion</th>
            <th>Tipo de Habitacion</th>
            <th>Precio</th>
            <th>Disponibilidad en Fechas</th>
            <th>Foto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {habitaciones.map((habitacion) => (
            <ItemHabitacion
              key={habitacion.numero}
              habitacion={habitacion}
              setHabitaciones={setHabitaciones}
            />
          ))}
        </tbody>
      </Table>

      <ModalHabitacion show={show} handleClose={handleClose} />

      <section className="container">
        <div className="d-flex justify-content-between my-3 py-2 mt-4 pt-4">
          <p className="fs-4">Tabla de Usuarios</p>
        </div>
      </section>

      <Table striped responsive bordered className="container">
        <thead className="bg-primary">
          <tr>
            <th>ID</th>
            <th>Nombre Completo</th>
            <th>Correo Electronico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <ItemUsuario
              key={usuario.id}
              usuario={usuario}
              setUsuarios={setUsuarios}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Administrador;
