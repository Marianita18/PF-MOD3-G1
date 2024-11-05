import { ReservaCancelada } from "../../../helpers/queries";
import "./reservas.css";
export const SusReservas = ({
  id,
  tipo,
  infoHabitacion,
  precio,
  img,
  setreservas,
  fecha,
}) => {
  const canselar = async (id) => {
    const respuesta = await ReservaCancelada(id);
    if (respuesta.status === 200) {
      console.log(respuesta);
    } else {
      console.log(error);
    }
  };

  const cancelarReserva = (id) => {
    let datos = JSON.parse(localStorage.getItem("reserva")) || [];
    Swal.fire({
      title: "Esta Seguro de Canselar su Reserva",
      showCancelButton: true,
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isDismissed) {
        return;
      } else if (result.isConfirmed) {
        Swal.fire("Reserva Cancelada");
        let actualizar = datos.filter((el) => el.id !== id);
        setreservas(actualizar);
        canselar(id);
      }
    });
  };

  return (
    <>
      <div className="susReservas" key={id}>
        <div className="box-reserva">
          <img src={img} alt="img-reserva" className="imgsureserva" />
        </div>
        <div className="text-center box-reserva">
          <h3 className="title-reserva">{tipo}</h3>
          <p className="pc">{infoHabitacion}</p>
          <p className=" precio">${precio}</p>
          <p className="fecha">{fecha}</p>
          <button
            className="canselar btn btn-danger"
            onClick={() => cancelarReserva(id)}
          >
            Cancelar Reserva
          </button>
        </div>
      </div>
    </>
  );
};
