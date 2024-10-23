import { Infoindex } from "../components/Infoindex"
import { Comida } from "../components/Comida"
import { Comentarios } from "../components/Comentarios"
import { Carrusel } from "../components/Carrousel"




export const Index=()=>{
    return(
         <>
    
        
         <main className="Informacion">
         <Carrusel></Carrusel>
         <Infoindex></Infoindex>
         <Comida></Comida>
         <Comentarios></Comentarios>
         </main>
         
    
        
         
         
         </>
    )
}