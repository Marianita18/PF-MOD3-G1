import { Button } from "react-bootstrap";
import ModalUsuarios from "./ModalUsuarios";
import { useState } from "react";
import { borrarusuario, leerUsuarios } from "../../../helpers/queries";
import Swal from "sweetalert2";

const ItemUsuario = ({ usuario, posicion, id, setUsuarios }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Borrarusuario = async () => {
    const respuesta = await borrarusuario(id);
    if (respuesta.status === 200) {
      Swal.fire({
        title: "El usuario eliminado",
        text: `El Usuario ${usuario.nombreCompleto}, fue Borrado correctamente`,
        icon: "success",
      });
      //actualizar tabla
      const respuestaActualizada = await leerUsuarios();
      if (respuestaActualizada.status === 200) {
        let actualizarUsuarios = await respuestaActualizada.json();
        setUsuarios(actualizarUsuarios);
      }
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `Ocurrio un error al Borrar usuario ${usuario.nombreCompleto} intente en unos minutos`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <tr>
        <td>{posicion}</td>
        <td>{usuario.nombreCompleto}</td>
        <td>{usuario.correoUsuario}</td>
        <td className="text-center">
          <Button className="mx-3 my-2" variant="warning" onClick={handleShow}>
            <i className="bi bi-pencil-square">Editar</i>
          </Button>
          <Button
            className="mx-3 my-2"
            variant="danger"
            onClick={Borrarusuario}
          >
            <i className="bi bi-trash">Borrar</i>
          </Button>
        </td>
      </tr>
      <ModalUsuarios
        show={show}
        handleClose={handleClose}
        estoyCreando={false}
        id={usuario._id}
        usuario={usuario}
        setUsuarios={setUsuarios}
      />
    </>
  );
};

export default ItemUsuario;
