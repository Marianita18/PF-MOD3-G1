import { Carrusel } from "../pages/componentesIndex/Carrusel"
import { Infoindex } from "../pages/componentesIndex/Infoindex"
import { Restaurantee } from "../pages/componentesIndex/Restaurantee"
import { Testimonios } from "../pages/componentesIndex/Testimonios"
import "./componentesIndex/styleIndex/Infoindex.css"
export default function Index() {
  return(
    <>
    <main className="main">
      <h1>este es un index</h1>
    <Carrusel></Carrusel>
    <Infoindex></Infoindex>
    <Restaurantee></Restaurantee>
    <Testimonios></Testimonios>
    </main>
  
    
  </>
  ) 

}

