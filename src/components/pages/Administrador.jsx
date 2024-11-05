import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ItemHabitacion from "./habitaciones/ItemHabitacion";
import ModalHabitacion from "./habitaciones/ModalHabitacion";
import ItemUsuario from "./usuarios/ItemUsuario";
import { Huespedes } from "../Huespedes/Huespedes";
import {
  leerUsuarios,
  leerHabitaciones,
  mostrarReserva,
} from "../../helpers/queries";
import Swal from "sweetalert2";

const Administrador = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [reserva, setReserva] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    obtenerHabitaciones();
    tablaUsuarios();
    tablaUsuariosReservas();
  }, []);

  const tablaUsuariosReservas = async () => {
    try {
      const respuesta = await mostrarReserva();
      if (respuesta.status === 200) {
        const datosreserva = await respuesta.json();
        setReserva(datosreserva);
      }
    } catch (error) {
      Swal.fire({
        title: "Ocurrio un error",
        text: `No se pudo obtener el listado de Huespedes.`,
        icon: "error",
      });
    }
  };

  const tablaUsuarios = async () => {
    try {
      const respuesta = await leerUsuarios();
      if (respuesta.status === 200) {
        const datosUser = await respuesta.json();
        setUsuarios(datosUser);
      } else {
        throw new Error("Error fetching users");
      }
    } catch (error) {
      Swal.fire({
        title: "Ocurrio un error",
        text: `No se pudo obtener el listado de usuarios, intente esta operación en unos minutos.`,
        icon: "error",
      });
    }
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const obtenerHabitaciones = async () => {
    const respuesta = await leerHabitaciones();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setHabitaciones(datos);
    } else {
      Swal.fire({
        title: "Ocurrió un error",
        text: "No se pudo obtener las habitaciones",
        icon: "error",
      });
    }
  };

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
              id={habitacion._id}
              habitacion={habitacion}
              setHabitaciones={setHabitaciones}
            />
          ))}
        </tbody>
      </Table>

      <ModalHabitacion
        show={show}
        handleClose={handleClose}
        setHabitaciones={setHabitaciones}
        estoyCreandoHabitacion={true}
      />

      <section className="container">
        <div className="d-flex justify-content-between my-3 py-2 mt-4 pt-4">
          <p className="fs-4">Tabla de Usuarios</p>
        </div>
      </section>

      <Table striped responsive bordered className="container">
        <thead className="bg-primary">
          <tr>
            <th>id</th>
            <th>Nombre Completo</th>
            <th>Correo Electronico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, posicion) => (
            <ItemUsuario
              id={usuario._id}
              usuario={usuario}
              posicion={posicion + 1}
              setUsuarios={setUsuarios}
            />
          ))}
        </tbody>
      </Table>
      <section className="container">
        <div className="d-flex justify-content-between my-3 py-2 mt-4 pt-4">
          <p className="fs-4">Tabla de Huéspedes</p>
        </div>
      </section>
      <Table striped responsive bordered className="container">
        <thead className="bg-primary">
          <tr>
            <th>Habitacion</th>
            <th>Nombre</th>
            <th>Pagos</th>
            <th>Fechas Reservadas</th>
          </tr>
        </thead>
        <tbody>
          {reserva.map((el) => (
            <Huespedes
              id={el.id}
              precio={el.precio}
              nombre={el.nombreCompleto}
              fecha={el.fecha}
              tipo={el.tipo}
            ></Huespedes>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Administrador;
