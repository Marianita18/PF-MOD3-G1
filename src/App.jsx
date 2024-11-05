import Index from "./components/pages/Index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import GaleriaImagen from "./components/pages/GaleriaImagen";
import SobreNosotros from "./components/pages/SobreNosotros";
import CatalogoHabitacion from "./components/pages/CatalogoHabitacion";
import SuiteStandard from "./components/pages/SuiteStandard";
import SuiteJunior from "./components/pages/SuiteJunior";
import SuitePremiun from "./components/pages/SuitePremiun";
import Contacto from "./components/pages/Contacto";
import Error404 from "./components/pages/Error404";
import Footer from "./components/common/Footer";
import Registro from "./components/common/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RutasProtegidas from "./routes/RutasProtegidas";
import RutasAdmin from "./routes/RutasAdmin";
import LogIn from "./components/common/LogIn";
import { useState } from "react";
import RutasProtegidasUsuario from "./routes/RutasProtegidasUsuario";
import RutasUsuario from "./routes/RutasUsuario";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("hotel")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  console.log(usuarioLogueado);

  const [mostrarModalLogIn, setMostrarModalLogIn] = useState(false);

  const handleAbrirModalLogIn = () => setMostrarModalLogIn(true);
  const handleCerrarModalLogIn = () => setMostrarModalLogIn(false);

  return (
    <BrowserRouter>
      <Navbar
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
        mostrarModalLogIn={mostrarModalLogIn}
        handleAbrirModalLogIn={handleAbrirModalLogIn}
        handleCerrarModalLogIn={handleCerrarModalLogIn}
      ></Navbar>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route
          path="/sobreNosotros"
          element={<SobreNosotros></SobreNosotros>}
        ></Route>
        <Route
          path="/galeriaImagenes"
          element={<GaleriaImagen></GaleriaImagen>}
        ></Route>
        <Route
          path="/catalogoHabitaciones"
          element={<CatalogoHabitacion></CatalogoHabitacion>}
        ></Route>
        <Route
          path="/suiteStandard/*"
          element={
            <RutasProtegidasUsuario>
              <SuiteStandard />
            </RutasProtegidasUsuario>
          }
        ></Route>
        <Route
          path="/suiteJunior/*"
          element={
            <RutasProtegidasUsuario>
              <SuiteJunior />
            </RutasProtegidasUsuario>
          }
        ></Route>
        <Route
          path="/suitePremiun/*"
          element={
            <RutasProtegidasUsuario>
              <SuitePremiun />
            </RutasProtegidasUsuario>
          }
        ></Route>
        <Route
          path="/reservas/*"
          element={
            <RutasProtegidasUsuario>
              <RutasUsuario></RutasUsuario>
            </RutasProtegidasUsuario>
          }
        ></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }
        ></Route>
        <Route
          path="/administrador/editar:id"
          element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }
        ></Route>
        <Route
          path="/administrador/editar:id"
          element={
            <RutasProtegidas>
              <RutasAdmin></RutasAdmin>
            </RutasProtegidas>
          }
        ></Route>
        <Route
          path="/registro"
          element={<Registro estoyCreando={true}></Registro>}
        ></Route>
        <Route
          path="/login"
          element={
            <LogIn
              show={mostrarModalLogIn}
              handleClose={handleCerrarModalLogIn}
              setUsuarioLogueado={setUsuarioLogueado}
            ></LogIn>
          }
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
