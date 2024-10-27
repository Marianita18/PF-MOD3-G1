import { Carrusel } from "../Carrusel"
import { Infoindex } from "../Infoindex"
import { Restaurantee } from "../Restaurantee"
import { Testimonios } from "../Testimonios"

export const Index=()=>{
    return(
         <>
      <main className="Informacion">
        <Carrusel></Carrusel>
        <Infoindex></Infoindex>
         <Restaurantee></Restaurantee>
         <Testimonios></Testimonios>
         </main>
         
           
        
         
         </>
    )
}

export default Index;