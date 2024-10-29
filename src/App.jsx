import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/Navbar";

import { Index } from "./page/Index";
import QuienesSomos from "./components/pages/QuienesSomos";
import GaleriaImagen from "./components/pages/GaleriaImagen";
import CatalogoHabitacion from "./components/pages/CatalogoHabitacion";
import SuiteStandard from "./components/pages/SuiteStandard";
import SuiteJunior from "./components/pages/SuiteJunior";
import Contacto from "./components/pages/Contacto";
import Footer from "./components/common/Footer";
import Error404 from "./components/pages/Error404";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Servicios from "./components/pages/Servicios";
import Administrador from "./components/pages/Administrador";

function App() {
  return (
    <BrowserRouter>
   <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route
          path="/QuienesSomos"
          element={<QuienesSomos></QuienesSomos>}></Route>
        <Route
          path="/GaleriaImagen"
          element={<GaleriaImagen></GaleriaImagen>}></Route>
        <Route
          path="/CatalogoHabitacion"
          element={<CatalogoHabitacion></CatalogoHabitacion>}></Route>
        <Route
          path="/SuiteStandard"
          element={<SuiteStandard></SuiteStandard>}></Route>
        <Route
          path="/suiteJunior"
          element={<SuiteJunior></SuiteJunior>}
        ></Route>
        <Route path="/suitePremiun" element={<SuitePremiun></SuitePremiun>}></Route>
        
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>

        <Route path="/*" element={<Error404></Error404>}></Route>
        <Route
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
      </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;