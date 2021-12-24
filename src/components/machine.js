import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Oven from "./oven";
import Switch from "./switch";

const Machine = () => {
  const [state, setState] = useState("Off");
  const [ovenDegrees, setOvenDegrees] = useState(0);
  const [heatingElement, setHeatingElement] = useState(false);

  useEffect(() => {
    if (state === "On" && ovenDegrees < 240) {
      if (!heatingElement) setHeatingElement(true);

      setTimeout(() => {
        setOvenDegrees(ovenDegrees + 1);
      }, 1000);
    }
  }, [state, ovenDegrees, heatingElement]);

  return (
    <Container>
      <Row style={{ marginTop: "10px" }}>
        <Col md="1" style={{ backgroundColor: "lightGray" }}>
          Extruder
        </Col>

        <Col md="1" style={{ backgroundColor: "yellow" }}>
          Stamper
        </Col>

        <Col
          md={{ span: 2, offset: 1 }}
          style={{ backgroundColor: "lightGray" }}
        >
          <Oven ovenDegrees={ovenDegrees} heatingElement={heatingElement.toString()}/>
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
        <Col md="6" style={{ backgroundColor: "lightGray" }}>
          Conveyor
        </Col>
      </Row>

      <Row style={{ marginTop: "20px" }}>
        <Col
          md={{ span: 1, offset: 6 }}
          style={{ backgroundColor: "lightGray" }}
        >
          Container
        </Col>
      </Row>

      <Row>
        <Col md="1" style={{ backgroundColor: "lightGray" }}>
          Motor: {state === "On" ? "working" : "not working"}
        </Col>
        <Col
          md={{ span: 2, offset: 2 }}
          style={{ backgroundColor: "lightGray" }}
        >
          <Switch onChange={setState} />
        </Col>
      </Row>
    </Container>
  );
};

export default Machine;
