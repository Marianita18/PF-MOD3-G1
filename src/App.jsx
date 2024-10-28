import Index from "./components/pages/Index";
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
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Servicios from "./components/pages/Servicios";
import Administrador from "./components/pages/Administrador";

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
        <Route path="/suitePremiun" element={<SuitePremiun></SuitePremiun>}></Route>
        <Route path="/apart" element={<Error404></Error404>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
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
