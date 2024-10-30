import { Card, Col, Button } from "react-bootstrap";
import standar from '../../assets/imgPages/imgCatalogoHabitaciones/imgSuiteStandard/standar.jpeg'

const CatalogoHabitacion = () => {
    return (
        <Col md={4} lg={3} className="mb-5">
        <Card className="h-100">
          <div>
            <img
              src={standar}
              alt="Suite Standar"
              className="w-100"
            />
          </div>
          <Card.Body>
            <Card.Title className="primary-font text-center">Suite Standar</Card.Title>
            <Card.Text>
              <b>Descripción:</b> Nuestra Suite Standar es el lugar perfecto para
              aquellos que buscan un ambiente minimalista y funcional. Con
              líneas limpias y una paleta de colores neutros, esta habitación
              crea un espacio tranquilo y acogedor. Disfruta de un sueño
              reparador en nuestra cama de última generación y relájate en el
              cómodo sofá. 
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <Button className="btn btn-success" to="/detalleProducto">
              Ver más
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default CatalogoHabitacion;

