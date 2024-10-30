import "../css/Infoindex.css"
import { motion } from "framer-motion"
import { Cuartos } from "./Cuartos"
export const Infoindex=()=>{
    return(
       <>
     <main className="Informacion">
       <section >
          <div className="container">
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f8f8' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
       
      >
     <h1 className="text-center title"><strong>HOTEL OASIS HURBANO </strong> Tu Refugio en la Ciudad</h1>
      </motion.div>
    </div>
            
            <br />
            <br />
            
            <p className="parrafo-index text-center" >Situado en el corazón de la ciudad, el Hotel Oasis Urbano ofrece la combinación perfecta entre comodidad y accesibilidad. Con una ubicación céntrica, estarás a solo minutos de las principales atracciones turísticas, centros de negocios, restaurantes, y tiendas. Ya sea que viajes por placer o negocios, estarás conectado a todo lo que la ciudad tiene para ofrecer.</p>
          
           
       

          </div>



      <hr />
      <section>
    
      </section>
      </section> 
           <section className="container-fluid ">
        <div className="padre">
           <div className="div">
           <i class="bi bi-fingerprint icon"></i>
           <h4 className="subtitle text-center">Medidas de Seguridad </h4>
           <p className="text-center roboto-thin ">Para garantizar la privacidad y seguridad de nuestros huéspedes, hemos implementado sistemas de control de acceso mediante tarjetas electrónicas en todas las habitaciones.</p>
         </div> 
        <div className="div ">
            
            <i class="bi bi-cake icon"></i>
            <h4 className="subtitle text-center">Servicios de Eventos </h4>
            
            <p className="text-center roboto-thin ">Contamos con varios salones para eventos de diferentes tamaños, desde pequeñas reuniones hasta grandes celebraciones. Los espacios están equipados con tecnología de vanguardia, como pantallas, proyectores, sistemas de sonido, y conexión Wi-Fi de alta velocidad.</p>
            </div>
        <div className="div">
        <i class="bi bi-hospital icon"></i>
        <h4 className="subtitle text-center">Servicios de Asistencia en Salud</h4>
        <p className="text-center roboto-thin ">Contamos con un sistema de asistencia médica disponible las 24 horas del día. En caso de cualquier emergencia, el personal del hotel está capacitado para coordinar una respuesta inmediata, contactando a profesionales de la salud o servicios de ambulancia según sea necesario.</p>
            </div> 
        </div>
        
       </section>
         <Cuartos></Cuartos>
      </main>  

       </> 
    )
}