import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Conveyor from "./conveyor";
import Oven from "./oven";
import Switch from "./switch";
import BiscuitLifecycle from "./biscuit/biscuitLifecycle";
import Stamper from "./stamper/stamper";
import Extruder from "./extruder";
import Motor from "./motor";

const Machine = () => {
  const [state, setState] = useState("Off");
  const [ovenDegrees, setOvenDegrees] = useState(0);
  const [heatingElement, setHeatingElement] = useState(false);
  const [conveyorWorking, setConveyorWorking] = useState(false);
  const [stamping, setStamping] = useState(false);
  const [animationState, setAnimationState] = useState("running");

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

  useEffect(() => {
    if (ovenDegrees >= 220 && state === "On") {
      setConveyorWorking(true);
    }
  }, [ovenDegrees, state])

  useEffect(() => {
    if (state === "Paused") setAnimationState("paused");
    else setAnimationState("running");
  }, [animationState, state]);

  return (
    <Container>
      <Row style={{ marginTop: "10px" }}>
        <Col md="1">
          <Extruder />
        </Col>

        <Col md="1" style={{ position: "relative" }}>
          <Stamper animationState={animationState} stamp={stamping} />
        </Col>

        <Col md={{ span: 2, offset: 1 }}>
          <Oven
            ovenDegrees={ovenDegrees}
            heatingElement={heatingElement.toString()}
          />
        </Col>
      </Row>

      <Row style={{ position: "relative" }}>
        {conveyorWorking && <BiscuitLifecycle animationState={animationState} onStamp={setStamping} />}
      </Row>

      <Row style={{ height: "75px" }}></Row>

      <Row style={{ marginTop: "10px" }}>
        <Col md="6" >
          <Conveyor conveyorWorking={conveyorWorking} />
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
        <Col md="1" >
          <Motor state={state}/>
        </Col>

        <Col md={{ span: 2, offset: 2 }}>
          <Switch onChange={setState} />
        </Col>
      </Row>
    </Container>
  );
};

export default Machine;
