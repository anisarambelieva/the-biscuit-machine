import { Container, Row, Col } from "react-bootstrap";

const Machine = () => (
  <Container>
    <Row style={{ marginTop: "10px" }}>
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

    <Row style={{ marginTop: "10px" }}>
      <Col md="1" style={{ backgroundColor: "yellow" }}>
        Biscuit
      </Col>

      <Col md="1" style={{ backgroundColor: "lightGray" }}>
        Biscuit
      </Col>

      <Col md="1" style={{ backgroundColor: "yellow" }}>
        Biscuit
      </Col>

      <Col md="1" style={{ backgroundColor: "lightGray" }}>
        Biscuit
      </Col>

      <Col md="1" style={{ backgroundColor: "yellow" }}>
        Biscuit
      </Col>

      <Col md="1" style={{ backgroundColor: "lightGray" }}>
        Biscuit
      </Col>
    </Row>

    <Row style={{ marginTop: "10px" }}>
      <Col md="6" style={{ backgroundColor: "lightGray" }}>Conveyor</Col>
    </Row>

    <Row style={{ marginTop: "20px" }}>
      <Col md={{ span: 1, offset: 6 }} style={{ backgroundColor: "lightGray" }}>Container</Col>
    </Row>

    <Row>
      <Col md="1" style={{ backgroundColor: "lightGray" }}>Motor</Col>
      <Col md={{ span: 1, offset: 3 }} style={{ backgroundColor: "lightGray" }}>Switch</Col>
    </Row>
  </Container>
);

export default Machine;
