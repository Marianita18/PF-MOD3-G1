import starJunior from "../../assets/imgPages/imgCatalogoHabitaciones/imgSuiteJunior/starJunior.png";
import vistaPiscina from "../../assets/imgPages/imgCatalogoHabitaciones/imgSuiteJunior/vistaPiscina.jpeg";
import piscina from "../../assets/imgPages/imgCatalogoHabitaciones/imgSuiteJunior/ventanaPiscina.jpeg";
import suiteJunior from '../../assets/imgPages/imgCatalogoHabitaciones/imgSuiteJunior/suiteJunior2.png'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "../pages/styles/seccionContacto.css";

export default function SuiteJunior (){
  return (
    <div className="Informacion">
    <body className="container Informacion">
      <div className="d-flex justify-content-around align-items-center mt-3 bg-info-subtle text-center py-3">
        <h3 className="fs-1 text-center">Suite Junior</h3>
      </div>
      <Container className="mt-4 container-fluid">
        <Row>
          <Col>
            <img className="img-fluid rounded" src={starJunior} alt="star junior" />
          </Col>
          <Col>
            <img className="img-fluid rounded" src={vistaPiscina} alt="Piscina" />
          </Col>
          <Col>
            <img className="img-fluid rounded" src={piscina} alt="Piscina" />
          </Col>
          <Col>
            <img className="img-fluid rounded" src={suiteJunior} alt="Dormitorio" />
          </Col>
        </Row>
      </Container>
      <p className="fs-4 fw-medium text-center my-3 py-3">
        Nuestra habitación es el paraíso para los adolescentes. ¡Desconéctate y
        diviértete con nuestra consola de videojuegos, navega por internet a
        toda velocidad y disfruta de tus películas favoritas en la pantalla
        gigante! La mini nevera siempre estará llena de tus snacks favoritos y
        el baño privado te ofrece todo lo que necesitas para relajarte.
        ¡Prepárate para vivir una experiencia inolvidable!
      </p>
      <hr className="border border-info border-3 opacity-75"></hr>
      <Container>
      <div className="d-flex justify-content-around align-items-center mt-3 bg-info-subtle text-center py-3">
          <h3 className="fs-1 text-center">Servicios</h3>
        </div>
      </Container>
      <ListGroup className="mt-4">
        <ListGroup.Item>
          Juegos de mesa y consolas de videojuegos para que no te aburras nunca
        </ListGroup.Item>
        <ListGroup.Item>
          Un balcón con vistas increíbles para relajarte y disfrutar del aire
          fresco
        </ListGroup.Item>
        <ListGroup.Item>
          Decoración moderna y colorida para crear un ambiente divertido y
          juvenil
        </ListGroup.Item>
        <ListGroup.Item>Conexión de Wifi</ListGroup.Item>
      </ListGroup>
      <div className="text-center">
        <Button type="submit" className="my-3" variant="success">
          Reserva ahora
        </Button>
      </div>
    </body>
    </div>
  );
};



