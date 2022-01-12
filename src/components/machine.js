import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import BiscuitLifecycle from "./biscuit/biscuitLifecycle.js";
import BiscuitContainer from "./container.js";
import Conveyor from "./conveyor.js";
import Extruder from "./extruder.js";
import Motor from "./motor.js";
import Oven from "./oven/oven.js";
import Stamper from "./stamper/stamper.js";
import Switch from "./switch.js";

const Machine = () => {
  const [state, setState] = useState("Off");
  const [conveyorWorking, setConveyorWorking] = useState(false);
  const [motorWorking, setMotorWorking] = useState(false);
  const [stamping, setStamping] = useState(false);
  const [animationState, setAnimationState] = useState("running");

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
          <Oven machineState={state} setMotorWorking={setMotorWorking} />
        </Col>
      </Row>

      <Row style={{ position: "relative" }}>
        {conveyorWorking && (
          <BiscuitLifecycle
            animationState={animationState}
            onStamp={setStamping}
            machineState={state}
          />
        )}
      </Row>

      <Row style={{ height: "75px" }}></Row>

      <Row style={{ marginTop: "10px" }}>
        <Col md="6">
          <Conveyor conveyorWorking={conveyorWorking} />
        </Col>
      </Row>

      <Row style={{ marginTop: "20px" }}>
        <Col md={{ span: 2, offset: 5 }}>
          <BiscuitContainer />
        </Col>
      </Row>

      <Row>
        <Col md="1">
          <Motor
            machineState={state}
            setMotorWorking={setMotorWorking}
            motorWorking={motorWorking}
            setConveyorWorking={setConveyorWorking}
          />
        </Col>

        <Col md={{ span: 2, offset: 2 }}>
          <Switch onChange={setState} />
        </Col>
      </Row>
    </Container>
  );
};

export default Machine;
