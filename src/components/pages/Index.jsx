import CatalogoHabitacion from "./CatalogoHabitacion";
import { Container, Row } from "react-bootstrap";



const Index = () => {
    return (
        <section>
      <section className="container-fluid bg-success-subtle text-center py-5">
        <h2 className="display-3 text-center">Hotel Oasis Urbano</h2>
        <p className="display-5 text-center">Nuestras Habitaciones</p>
      </section>
      <Container className="mainSection mt-5">
        <Row>
          <CatalogoHabitacion></CatalogoHabitacion>
          <CatalogoHabitacion></CatalogoHabitacion>
          <CatalogoHabitacion></CatalogoHabitacion>
          <CatalogoHabitacion></CatalogoHabitacion>
        </Row>
      </Container>
      
    </section>
    );
};

export default Index;