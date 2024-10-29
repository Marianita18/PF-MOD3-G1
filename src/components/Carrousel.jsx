import "../css/carousel.css"

import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export const Carrusel = () => {
  return (
    <>
     <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img  src="/imgindex/camino.jpg" className="d-block w-100 img-carousel"></img>
    <div class="container">
  <div className="row carousel-caption top-0">
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }} 
    className=" col-lg-8 col-md-6">
      <h1 className='carouseltitle'>
     Descubre una experiencia
    única en el corazón de la ciudad </h1>
     </motion.div>
  
     <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }} 
    className="disfruta col-lg-12 col-md-3">
      
      <h2 className="carouselsubtitle">
      Siente la comodidad que te mereces </h2><button className="explora">Explora Nuestras Habitaciones</button>
     
      
     </motion.div>

      

    
  </div>
</div>
    </div>
    <div className="carousel-item">
    <img  src="/imgindex/camino.jpg" className="d-block w-100 img-carousel" alt="img"></img>
    </div>
    <div className="carousel-item">
    <img  src="/imgindex/ciudad.jpg" className="d-block w-100 img-carousel" alt="img"></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};
