import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image';
import "../estilos/nosotros.css";
import banner1 from "../imgNosotros/banner1.jpg";
import banner2 from "../imgNosotros/banner2.jpg";
import julian from "../imgNosotros/julian.jpeg"
import facu from "../imgNosotros/facu.jpeg"
import victoria from "../imgNosotros/victoria.jpeg"
import mariana from "../imgNosotros/mariana.jpeg"
import eugenia from "../imgNosotros/eugenia.jpeg"
import isaias from "../imgNosotros/isaias.jpeg"

const SobreNosotros = () => {
  return (
    <div className="Informacion">
      <section className="container-fluid text-center bg-s1-nosotros">
        <h1 className="text-black fw-bolder">SOBRE NOSOTROS</h1>
        <div className="container">
          <p className="lead fs-3 text-black">
            El éxito de <b>Oasis Urbano</b> nace del sueño de ofrecer una
            experiencia única, donde la hospitalidad y el confort se fusionan
            con el lujo y detalle. Nuestros fundadores, comparten una pasión por
            la excelencia en el servicio y la creación de espacios que invitan a
            relajarse y disfrutar de momentos inolvidables.
          </p>
        </div>
        <div className="w-100 container">
          <img
            src={banner1}
            alt="imagen principal"
            className="w-100 img-fluid banner1-nosotros rounded"
          />
        </div>
      </section>
      <section className="container-fluid bg-s2-nosotros">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <img
              src={banner2}
              alt=""
              className="w-100 rounded banner2-nosotros"
            />
          </div>
          <div className="col-sm-12 col-lg-6  fs-3">
            Con una visión clara de redefinir la experiencia hotelera, unieron
            su amor por los viajes y su experiencia en el sector de la
            hospitalidad para crear un hotel que es mucho más que un lugar para
            hospedarse. Desde la exquisita atención al cliente hasta el diseño
            cuidado de cada rincón, su compromiso ha sido garantizar que cada
            huésped se sienta como en casa, pero rodeado de lujo y confort.
          </div>
        </div>
      </section>
      <section className='container-fluid text-center bg-s3-nosotros px-5'>
            <h2 className='fw-bold pt-1'>FUNDADORES</h2>
            <div className='row'>
               <div className='col-sm-12 col-lg-2'>
                <div><Image src={julian} roundedCircle className="w-100"/></div>
                <h5>Julian Garay</h5>
               </div>
               <div className='col-sm-12 col-lg-2'>
               <div><Image src={facu} roundedCircle className="w-100"/></div>
               <h5>Facundo Martinez</h5>
               </div>
               <div className='col-sm-12 col-lg-2'>
               <div><Image src={mariana} roundedCircle className="w-100"/></div>
               <h5>Mariana Mendoza</h5>
               </div>
               <div className='col-sm-12 col-lg-2'>
               <div><Image src={isaias} roundedCircle className="w-100"/></div>
               <h5>Isaias Vargas</h5>
               </div>
               <div className='col-sm-12 col-lg-2'>
               <div><Image src={eugenia} roundedCircle className="w-100"/></div>
               <h5>Eugenia Sansierra</h5>
               </div>
               <div className='col-sm-12 col-lg-2'>
               <div><Image src={victoria} roundedCircle className="w-100"/></div>
               <h5>Victoria Gramajo</h5>
               </div>
            </div>
        </section>
    </div>
  );
};

export default SobreNosotros;
