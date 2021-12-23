import { Container, Row, Col } from "react-bootstrap";

const Machine = () => (
  <Container>
    <Row>
      <Col md="1" style={{ backgroundColor: "lightGray" }}>
        Extruder
      </Col>

      <Col md="1" style={{ backgroundColor: "yellow" }}>
        Stamper
      </Col>

      <Col md={{ span: 2, offset: 1 }} style={{ backgroundColor: "lightGray" }}>
        Oven
      </Col>
    </Row>
  </Container>
);

export default Machine;
