import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Index from "./components/pages/Index";
import QuienesSomos from "./components/pages/QuienesSomos";
import GaleriaImagen from "./components/pages/GaleriaImagen";
import CatalogoHabitacion from "./components/pages/CatalogoHabitacion";
import SuiteStandard from "./components/pages/SuiteStandard";
import SuiteJunior from "./components/pages/SuiteJunior";
import Contacto from "./components/pages/Contacto";
import Error404 from "./components/pages/Error404";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
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
          path="/SuiteJunior"
          element={<SuiteJunior></SuiteJunior>}></Route>
        <Route path="/Contacto" element={<Contacto></Contacto>}></Route>
        <Route path="/Error404" element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
