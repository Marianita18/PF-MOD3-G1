import "../css/Comida.css"
import "../css/Infoindex.css"
import "../css/testimonios.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; 
import { delay, motion } from "framer-motion";
export const Comentarios=()=>{
    return(
        <>
       
        <section className="container-fluid testimonio">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f8f8' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
       
      >
          <h1 className="text-center source-code-pro ">Opiniones de nuestros huéspedes</h1>
      </motion.div>
         </div>
          
            <Swiper 
            modules={[Navigation,Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{
                delay:1000
            }}
            loop={true}>

                <SwiperSlide className="swiper">
                    <div className="testimoniodiv">
                        <img src="https://th.bing.com/th/id/OIP.KepY6B4vlRy1x0yhU4-MsgHaHb?rs=1&pid=ImgDetMain"alt="persona" className="avatar" />
                        <p className="testimoniotexto">Mi estancia en el Hotel Oasis Urbano fue excelente. Las habitaciones eran modernas y cómodas, y el restaurante 'White Terrace' fue una grata sorpresa. Cada plato estaba bien presentado y los sabores eran increíbles."</p>
                        <p className=" roboto-thin">Carlos G.</p>
                        <p className=" roboto-thin">  Marzo 2024</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper">
                    <div className="testimoniodiv">
                    <img src="https://economia3.com/wp-content/uploads/2019/12/Natalia-Juarranz-EQUIPO-HUMANO.jpg"alt="persona" className="avatar" />
                        <p className="testimoniotexto">La ubicación del hotel es excelente para explorar la ciudad. El restaurante es elegante, y la comida deliciosa, aunque el servicio fue un poco lento en la cena. Las habitaciones son limpias y cómodas, pero algunos servicios, como el gimnasio, podrían estar mejor equipados. A pesar de eso, fue una buena elección para mi viaje de negocios.</p>
                        <p className=" roboto-thin">Luis Rodriguez.</p>
                        <p className=" roboto-thin">  Marzo 2024</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper">
                    <div className="testimoniodiv">
                    <img src="http://cdn3.upsocl.com/wp-content/uploads/2014/03/268.jpg"alt="persona" className="avatar" />
                        <p className="testimoniotexto">"El hotel es increíble. Las instalaciones son modernas y limpias. Me gustó mucho el servicio en el restaurante, aunque noté que algunos platos tardaban un poco en salir. Sin embargo, la comida valió la pena la espera. Volveré seguro."</p>
                        <p className=" roboto-thin">Pepe.LG</p>
                        <p className=" roboto-thin">  Diciembre 2023</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper">
                    <div className="testimoniodiv">
                    <img src="https://th.bing.com/th/id/R.4871a2ed00640fe233fc86f3508a468c?rik=lEvaeIpOs6w8yQ&riu=http%3a%2f%2flavozdelmuro.net%2fwp-content%2fuploads%2f2015%2f06%2fpersonas_con_talento_10.jpg&ehk=bwFuv4ADoJr7C%2fUjr5YccBxrkkQuSnWhqqXU8O%2fb2so%3d&risl=&pid=ImgRaw&r=0"alt="persona" className="avatar" />
                        <p className="testimoniotexto">"El ambiente del hotel es vibrante y juvenil, lo cual me encantó. La ubicación es ideal para explorar la ciudad, y la comida del restaurante es deliciosa. Me gustaría que tuvieran más opciones de entretenimiento nocturno, pero en general fue una gran experiencia"</p>
                        <p className=" roboto-thin">Ana.LCastillo</p>
                        <p className=" roboto-thin">  Diciembre 2023</p>

                    </div>
                </SwiperSlide>
            </Swiper>
              

        </section>
        </>
    )
}