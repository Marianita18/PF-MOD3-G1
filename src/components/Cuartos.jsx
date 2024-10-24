import "../css/Comida.css"
import "../css/Infoindex.css"
import "../css/testimonios.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; 
import { delay, motion } from "framer-motion";
export const Cuartos=()=>{
    return(
        <>
       
   
    <section className="Comida container-fluid">
       
        
          
          
          <Swiper 
         modules={[Navigation, Autoplay]}
         slidesPerView={3}
         autoplay={{ 
             delay: 1000, 
             disableOnInteraction: true
         }}
         loop={true}>
            
            <SwiperSlide>
              <div className="plato-dormitorio">
               <motion.img  whileHover={{ scale: 1.2,zIndex:10}}  src="/Dormitorios/00591813-dormitorio-cuadro-beige-ocre-silla-cuadro_ac8bd2b6_00591813_241023105458_600x600.webp" alt="plato" className="img-dormitorio"
                 />
                </div> 
            </SwiperSlide>
            <SwiperSlide>
               <div className="plato-dormitorio">
             <motion.img  whileHover={{ scale: 1.2,zIndex:10}} 
                        transition={{ duration: 2.0 }} src="/Dormitorios/west-76th-st-residence-alexander-butler-design-services-llc-img~4c219b8002e04f78_5660-1-120a959-w360-h360-b0-p0.webp" alt="plato" className="img-dormitorio"  />
               </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="plato-dormitorio">
                  <motion.img   whileHover={{ scale: 1.2,zIndex:10}} 
                        transition={{ duration: 0.3 }} src="/Dormitorios/a19173ef039b33f4_6479-w360-h360-b0-p0--.webp" alt="plato" className="img-dormitorio"  />
                   </div>
      
            </SwiperSlide>
            <SwiperSlide>
              <div className="plato-dormitorio">
                       <motion.img  whileHover={{ scale: 1.2,zIndex:10}} 
                        transition={{ duration: 0.3}}src="/Dormitorios/42b15c1602bd0248_2092-w360-h360-b0-p0--.webp" alt="plato" className="img-dormitorio" />
                   </div> 
            </SwiperSlide>
            <SwiperSlide>
              <div className="plato-dormitorio">
                    <motion.img   whileHover={{ scale: 1.2,zIndex:10}} 
                        transition={{ duration: 0.3 }}   src="/Dormitorios/prestige-lakeside-habitat-villa-5bhk-devasthanagalu-de-panache-img~28114e990ea67b96_5421-1-4c79c9a-w360-h360-b0-p0.webp" alt="plato" className="img-dormitorio" />
                   </div>
            
            </SwiperSlide>
            <SwiperSlide>
              <div className="plato-dormitorio">
                   <motion.img   whileHover={{ scale: 1.2,zIndex:10}} 
                        transition={{ duration: 0.3 }}src="/Dormitorios/pax-i-house-pax-domus-inc-img~0a418e5b0a0ca736_0872-1-1744f54-w360-h360-b0-p0.webp" alt="plato"  className="img-dormitorio"/>

                    </div>                            
            </SwiperSlide>

          </Swiper>
     </section>
        </>
    )
}