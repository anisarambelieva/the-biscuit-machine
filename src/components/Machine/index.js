import { Container, Row, Col } from "react-bootstrap";

import BiscuitLifecycle from "../Biscuit/BiscuitLifecycle";
import BiscuitContainer from "../Container";
import Conveyor from "../Conveyor";
import Extruder from "../Extruder";
import Motor from "../Motor";
import Oven from "../Oven";
import Stamper from "../Stamper";
import Switch from "../Switch";
import BoostSwitch from "../boostSwitch.js";

import useMachine from "./hook.js";

const Machine = () => {
  const {
    animationState,
    stamping,
    setStamping,
    state,
    setState,
    fasterHeating,
    setFasterHeating,
    conveyorWorking,
    setConveyorWorking,
    motorWorking,
    setMotorWorking,
    bakedBiscuitsCount,
    setBakedBiscuitsCount,
  } = useMachine();

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
            machineState={state}
            setMotorWorking={setMotorWorking}
            fasterHeating={fasterHeating}
          />
        </Col>
      </Row>

      <Row style={{ position: "relative" }}>
        {conveyorWorking && (
          <BiscuitLifecycle
            animationState={animationState}
            onStamp={setStamping}
            machineState={state}
            setBakedBiscuitsCount={setBakedBiscuitsCount}
            bakedBiscuitsCount={bakedBiscuitsCount}
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

      <Row>
        <BoostSwitch onChange={() => setFasterHeating(!fasterHeating)} />
      </Row>

      <Row>
        <div>{bakedBiscuitsCount} baked biscuits</div>
      </Row>
    </Container>
  );
};

export default Machine;
