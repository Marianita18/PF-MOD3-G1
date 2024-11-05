import { Info } from "./componentesindex/Info";
import { Restaurante } from "./componentesindex/Restaurante";
import { Comentarios } from "./componentesindex/Comentarios";
import { Carruselindex } from "./componentesindex/Carruselindex";
import "./componentesindex/cssindex/Info.css";

export default function Index() {
  return (
    <>
      <main className="main">
        <Carruselindex></Carruselindex>
        <Info></Info>
        <Restaurante></Restaurante>
        <Comentarios></Comentarios>
      </main>
    </>
  );
}
