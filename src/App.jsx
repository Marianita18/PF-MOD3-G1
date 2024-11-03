import Index from "./components/pages";
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
import { MisReservas } from "./components/pages/MisReservas";
import "./App.css";
import Administrador from "./components/pages/Administrador";
import ModalUsuarios from "./components/pages/usuarios/ModalUsuarios";
import ModalHabitacion from "./components/pages/habitaciones/ModalHabitacion";
import RutasProtegidas from "./routes/RutasProtegidas";
import RutasAdmin from "./routes/RutasAdmin";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
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
          path="/suiteStandard"
          element={<SuiteStandard></SuiteStandard>}
        ></Route>
        <Route
          path="/suiteJunior"
          element={<SuiteJunior></SuiteJunior>}
        ></Route>
        <Route path="/reservas" element={<MisReservas></MisReservas>}></Route>
        <Route
          path="/suitePremiun"
          element={<SuitePremiun></SuitePremiun>}
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
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
