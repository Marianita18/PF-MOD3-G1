import premiun from "../../assets/imgPages/imgCatalogoHabitaciones/imgSuitePremium/premiun.jpeg";
import starPremiun from "../../assets/imgPages/imgCatalogoHabitaciones/imgSuitePremium/starPremiun.png";
import bañoPremiun from "../../assets/imgPages/imgCatalogoHabitaciones/imgSuitePremium/bañoPremiun.jpeg";
import starPremiun2 from "../../assets/imgPages/imgCatalogoHabitaciones/imgSuitePremium/starPremiun2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { leerHabitaciones } from "../../helpers/queries";
import { useState, useEffect } from "react";
import { Reservas } from "./reserva/Reservas";

export default function SuitePremiun() {
  const [habitacion, sethabitacion] = useState([]);

  useEffect(() => {
    mostrarHabitacionSuitPremiun();
  }, []);

  const mostrarHabitacionSuitPremiun = async () => {
    try {
      const respuesta = await leerHabitaciones();
      if (respuesta.status === 200) {
        const reserva = await respuesta.json();
        const habitacionPremiuhn = reserva.filter(
          (el) => el.tipo === "Suite Premium"
        );
        sethabitacion(habitacionPremiuhn);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Informacion">
      <body className="container mainSectionContacto Informacion">
        <div className="d-flex justify-content-around align-items-center mt-3 bg-info-subtle text-center py-3">
          <h3 className="fs-1 text-center">Suite Premium</h3>
        </div>
        <Container className="mt-4 container-fluid">
          <Row>
            <Col>
              <img
                className="img-fluid rounded"
                src={premiun}
                alt="Dormitorio"
              />
            </Col>
            <Col>
              <img
                className="img-fluid rounded"
                src={starPremiun}
                alt="Star Premium"
              />
            </Col>
            <Col>
              <img
                className="img-fluid rounded"
                src={bañoPremiun}
                alt="Baño Premium"
              />
            </Col>
            <Col>
              <img
                className="img-fluid rounded"
                src={starPremiun2}
                alt="Star"
              />
            </Col>
          </Row>
        </Container>
        <p className="fs-4 fw-medium text-center my-3 py-3">
          Nuestra habitación deluxe te invita a un descanso inolvidable.
          Relájate en nuestra cama king size con sábanas de algodón egipcio,
          disfruta de un baño revitalizante con amenities exclusivos y comienza
          tu día con un desayuno gourmet servido en la comodidad de tu
          habitación. La mini nevera te permite mantener tus bebidas y snacks
          frescos en todo momento, mientras que el ambiente acogedor y la vista
          panorámica completan esta experiencia única
        </p>
        <hr className="border border-info border-3 opacity-75"></hr>
        {habitacion.map((el) => (
          <Reservas
            reserva={el.reserva}
            key={el.id}
            id={el.id}
            precio={el.precio}
            fecha={el.fecha}
            img={el.imagen}
            tipo={el.tipo}
            numero={el.numero}
            info={
              "La Habitación Premium King está diseñada para proporcionar la máxima comodidad y una experiencia de lujo. Cuenta con una cama King Size de alta calidad, ideal para un descanso perfecto. La decoración moderna y los toques elegantes la convierten en un espacio único y relajante."
            }
            infoHabitacion={"Smart TV de 55 pulgadas ,Conexión Wi-Fi"}
          ></Reservas>
        ))}
        <Container>
          <div className="d-flex justify-content-around align-items-center mt-3 bg-info-subtle text-center py-3">
            <h3 className="fs-1 text-center">Servicios</h3>
          </div>
        </Container>
        <ListGroup className="mt-4">
          <ListGroup.Item>
            Baño privado con amenities de alta calidad para tu máximo confort
          </ListGroup.Item>
          <ListGroup.Item>
            Iluminación ambiental para crear un ambiente relajante y romántico
          </ListGroup.Item>
          <ListGroup.Item>
            Amplio placard y caja de seguridad para que guardes tus pertenencias
          </ListGroup.Item>
          <ListGroup.Item>
            Conexión de Wifi, confortable living en un ambiente climatizado
          </ListGroup.Item>
        </ListGroup>
      </body>
    </div>
  );
}
