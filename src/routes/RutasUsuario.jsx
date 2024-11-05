import { Routes, Route } from "react-router-dom";
import { MisReservas } from "../components/pages/MisReservas";
import SuiteJunior from "../components/pages/SuiteJunior";
import SuitePremiun from "../components/pages/SuitePremiun";
import SuiteStandard from "../components/pages/SuiteStandard";

const RutasUsuario = () => {
  return (
    <Routes>
      <Route path="/" element={<MisReservas></MisReservas>}></Route>
      <Route path="/" element={<SuiteJunior></SuiteJunior>}></Route>
      <Route path="/" element={<SuitePremiun></SuitePremiun>}></Route>
      <Route path="/" element={<SuiteStandard></SuiteStandard>}></Route>
    </Routes>
  );
};

export default RutasUsuario;
