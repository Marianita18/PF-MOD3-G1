
import { Button } from 'react-bootstrap';
import ModalUsuarios from "./ModalUsuarios";
import React, { useState } from 'react';

const ItemUsuario = ({ usuario, setUsuarios }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <tr>
      <td>{usuario.id}</td>
      <td>{usuario.nombre}</td>
      <td>{usuario.correo}</td>
      <td className="text-center">
        <Button className="btn btn-warning me-lg-2" onClick={handleShow}>
          <i className="bi bi-pencil-square">Editar</i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash">Borrar</i>
        </Button>
      </td>
      <ModalUsuarios show={show} handleClose={handleClose} />
    </tr>
  );
};

export default ItemUsuario;
