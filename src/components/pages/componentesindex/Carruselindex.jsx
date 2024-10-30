import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export const Carruselindex=()=>{
    return(
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img  src="https://tse3.mm.bing.net/th?id=OIP.fzBLuNsfIZv3oJLplry-vAHaET&pid=Api&P=0&h=180" className="img-carousel d-block w-100 "></img>
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
   
  </div>
 
</div>
        </>
    )
}