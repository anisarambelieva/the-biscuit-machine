import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Biscuit from "./biscuit/biscuit";
import Dough from "./biscuit/dough";
import Conveyor from "./conveyor";
import Oven from "./oven";
import Switch from "./switch";

const Machine = () => {
  const [state, setState] = useState("Off");
  const [ovenDegrees, setOvenDegrees] = useState(0);
  const [heatingElement, setHeatingElement] = useState(false);

  useEffect(() => {
    if (heatingElement) {
      setTimeout(() => {
        if (ovenDegrees < 240) setOvenDegrees(ovenDegrees + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        if (ovenDegrees > 0) setOvenDegrees(ovenDegrees - 1);
      }, 1000);
    }
  }, [heatingElement, ovenDegrees]);

  useEffect(() => {
    if (state === "On") {
      if (ovenDegrees < 220 && !heatingElement) setHeatingElement(true);
      else if (ovenDegrees > 239) setHeatingElement(false);
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
          <Oven
            ovenDegrees={ovenDegrees}
            heatingElement={heatingElement.toString()}
          />
        </Col>
      </Row>

      <Row style={{ position: "relative" }}>
        <Col md="1" style={{ backgroundColor: "yellow" }}>
          <Dough />
        </Col>
        <Col md="1" >
          <Biscuit/>
        </Col>
      </Row>

      <Row style={{ height: "75px" }}></Row>

      <Row style={{ marginTop: "10px" }}>
        <Col md="6" style={{ backgroundColor: "lightGray" }}>
          <Conveyor state={state} />
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
