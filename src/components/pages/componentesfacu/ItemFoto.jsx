import React from "react";

const ItemFoto = ({ categoria, fotos, setCategoriaSeleccionada }) => {
  return (
    <div>
      <section className="my-2 py-2 text-center bg-primary-subtle container">
        <h4>Fotos de {categoria}</h4>
      </section>

      <section className="container my-3 py-2">
        <div className="row justify-content-around align-items-center">
          {fotos.map((foto) => {
            return (
              <div className="col-10 col-md-6 col-lg-4 my-2 py-2">
                <img src={foto.src} className="img-fluid rounded" />
              </div>
            );
          })}
        </div>
        <button
          className="btn btn-primary my-2 py-2"
          onClick={() => setCategoriaSeleccionada(null)}
        >
          Volver
        </button>
      </section>
    </div>
  );
};

export default ItemFoto;
