import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import * as constants from "../../constants.js";
import BiscuitLifecycle from "../Biscuit/BiscuitLifecycle";
import BiscuitContainer from "../Container";
import Extruder from "../Extruder";
import Stamper from "../Stamper";
import Switch from "../Switch";
import BoostSwitch from "../boostSwitch.js";
import Conveyor from "../conveyor.js";
import Motor from "../motor.js";
import Oven from "../oven.js";

const Machine = () => {
  const [state, setState] = useState(constants.machineState.off);
  const [conveyorWorking, setConveyorWorking] = useState(false);
  const [motorWorking, setMotorWorking] = useState(false);
  const [stamping, setStamping] = useState(false);
  const [animationState, setAnimationState] = useState(
    constants.animationState.running
  );
  const [fasterHeating, setFasterHeating] = useState(false);
  const [bakedBiscuitsCount, setBakedBiscuitsCount] = useState(0);

  useEffect(() => {
    if (state === constants.machineState.paused)
      setAnimationState(constants.animationState.paused);
    else setAnimationState(constants.animationState.running);
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
