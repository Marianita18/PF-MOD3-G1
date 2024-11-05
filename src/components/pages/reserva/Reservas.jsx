import { Reserva } from "../../../helpers/queries";
import { ModalReserva } from "./ModalReservas";
import { useEffect, useState } from "react";
import "./reservas.css";

export const Reservas = ({
  reserva,
  precio,
  img,
  tipo,
  info,
  infoHabitacion,
  id,
  fecha,
}) => {
  const [reservado, setReservado] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    setReservado(reserva === true);
  }, [reserva]);

  const Reservar = async (id) => {
    try {
      const respuesta = await Reserva(id);
      if (respuesta.status === 200) {
        console.log("Reserva exitosa:", respuesta);
      } else {
        alert("Error en la reserva.");
      }
    } catch (error) {
      console.error("Error al hacer la reserva:", error);
      alert("Ocurrió un error al intentar hacer la reserva.");
    }
  };

  const estaenReservas = (id) => {
    if (reserva === false) {
      handleShow();

      Reservar(id);
      const reserva = {
        tipo,
        precio,
        info,
        img,
        id,
        fecha,
      };

      const reservasExistentes =
        JSON.parse(localStorage.getItem("reserva")) || [];
      const nuevasReservas = [...reservasExistentes, reserva];
      localStorage.setItem("reserva", JSON.stringify(nuevasReservas));
    } else {
      Swal.fire({
        title: `Habitación Reservada del día ${fecha}`,
        showClass: {
          popup: "animate__animated animate__fadeInUp animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown animate__faster",
        },
      });
    }
  };

  return (
    <>
      <ModalReserva
        show={show}
        handleClose={handleClose}
        id={id}
        setReservadopadre={setReservado}
      ></ModalReserva>

      <section className="container-fluid">
        <div className="habitacion" key={id}>
          <div className="box1">
            <img src={img} alt="ff" className="img-reserva" />
          </div>
          <div className=" text-center box">
            <h3 className="title">{tipo}</h3>
            <p className="pc">{infoHabitacion}</p>
            <p className="precio">${precio}</p>
          </div>
          <div className="text-start box">
            <p className="no-reservado">No Reservado</p>

            <p className="ph">{info}</p>
            <button
              className="solicitar btn btn-primary"
              onClick={() => estaenReservas(id)}
            >
              Solicitar Reservas
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
