export const Huespedes = ({ precio, fecha, nombre, tipo }) => {
  return (
    <>
      <tr>
        <td>{tipo}</td>
        <td>{nombre}</td>
        <td>{precio}</td>
        <td>{fecha}</td>
      </tr>
    </>
  );
};
