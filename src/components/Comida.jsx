import "../css/Comida.css"
import "../css/Infoindex.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; //

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; 
import{ motion}from'framer-motion'

export const Comida = () => {
    return (
        <>
      
        <section className="container">
        
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f8f8' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
       
      >
          <h1 className="text-center titlesazon">Disfruta del Restaurante <strong>Sazón Urbano </strong></h1>
      </motion.div>
         </div>
          
            <br />
            <p className="text-center parrafo-restaurante">En Sazón Urbano creemos que la comida es una expresión de la cultura urbana, donde cada plato cuenta una historia. Nos especializamos en crear fusiones de sabores inspiradas en las calles y mercados más dinámicos del mundo, llevándolos a tu mesa con ingredientes frescos y locales.</p>
           <p className="text-center parrafo-restaurante">Sazón Urbano es más que un restaurante, es un homenaje al alma vibrante de la ciudad. ¡Te esperamos para que descubras el verdadero sabor urbano en cada bocado!</p>
        </section>
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
                  <div className="plato">
                   <motion.img  whileHover={{ scale: 1.2,zIndex:10}}  src="/imgindex/steak-3766548_640.jpg" alt="plato" className="img"
                     />
                    </div> 
                </SwiperSlide>
                <SwiperSlide>
                   <div className="plato">
                 <motion.img  whileHover={{ scale: 1.2,zIndex:10}} 
                            transition={{ duration: 2.0 }} src="/imgindex/steak-2272464_640.jpg" alt="plato" className="img"  />
                   </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="plato">
                      <motion.img   whileHover={{ scale: 1.2,zIndex:10}} 
                            transition={{ duration: 0.3 }} src="/imgindex/curry-7249247_640.jpg" alt="plato" className="img"  />
                       </div>
          
                </SwiperSlide>
                <SwiperSlide>
                  <div className="plato">
                           <motion.img  whileHover={{ scale: 1.2,zIndex:10}} 
                            transition={{ duration: 0.3}}src="/imgindex/meat-1155132_640.jpg" alt="plato" className="img" />
                       </div> 
                </SwiperSlide>
                <SwiperSlide>
                  <div className="plato">
                        <motion.img   whileHover={{ scale: 1.2,zIndex:10}} 
                            transition={{ duration: 0.3 }}   src="/imgindex/platter-2009590_640.jpg" alt="plato" className="img" />
                       </div>
                
                </SwiperSlide>
                <SwiperSlide>
                  <div className="plato">
                       <motion.img   whileHover={{ scale: 1.2,zIndex:10}} 
                            transition={{ duration: 0.3 }}src="/imgindex/salmon-518032_640.jpg" alt="plato"  className="img"/>

                        </div>                            
                </SwiperSlide>

              </Swiper>
         </section>
         <section class="container-fluid sectionrestaurante">
   
  <div class=" row ">
    <div class="col-lg-6 col-md-10">
    <h1 className="text-center source-code-pro">Visita Nuestro Restaurante</h1>
    <img src="https://th.bing.com/th/id/R.106c12ba05530e3cf8b935a03b1007ef?rik=rA5BOFl%2bx9MSRg&pid=ImgRaw&r=0" alt="restaurante"className="imgrestaurante"  /> 
      </div>
      
    <div class="col-lg-6 col-md-6">
    <h3 className="titulo-restaurante">Calidad de la Comida</h3>
            <li>Ingredientes frescos y de alta calidad.</li>
            <li>Menús que ofrezcan opciones diversas para todos los gustos, incluyendo alternativas vegetarianas, veganas o sin gluten.</li>
            <li>Platos bien preparados y presentados de forma creativa y apetecible.</li>
             <h3 className="titulo-restaurante">Ambiente Agradable</h3>
             <li>Decoración atractiva y coherente con el tema del restaurante.</li>
             <li>Iluminación apropiada (cálida, relajante, adecuada para la ocasión).</li>
             <li>Limpieza impecable, especialmente en las áreas públicas como los baños</li>
             <h3 className="titulo-restaurante">. Servicio al Cliente Excepcional</h3>
             <li>Personal amable, atento y bien informado sobre el menú.</li>
             <li>Atención a los detalles, como recordar las preferencias de los clientes regulares</li>
             <li>Servicio rápido, pero sin apresurar a los clientes.</li>

    </div>

   
              </div>
         
         </section>
     
         
               </>
           )}