import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./cssindex/Carrusel.css";
export const Carruselindex = () => {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/imgindex/camino.jpg"
              className="img-carousel d-block w-100 "
            ></img>
            <div class="container">
              <div className="row carousel-caption top-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                  className=" col-lg-8 col-md-6"
                >
                  <h2 className="carouseltitle">
                    Descubre una experiencia única en el corazón de la ciudad{" "}
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                  className="disfruta col-lg-12 col-md-3"
                >
                  <h3 className="carouselsubtitle">
                    Siente la comodidad que te mereces{" "}
                  </h3>{" "}
                  <NavLink className="nav-link fw-bold" end to="/suitePremiun">
                    <button className="explora">
                      Explora Nuestras Habitaciones
                    </button>{" "}
                  </NavLink>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
