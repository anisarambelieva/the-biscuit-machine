import { useState } from "react";
import { Col } from "react-bootstrap";

import BakedBiscuit from "./bakedBiscuit.js";
import Dough from "./dough.js";
import Biscuit from "./rawBiscuit.js";

const BiscuitLifecycle = ({ animationState, onStamp, machineState }) => {
  const [stamped, setStamped] = useState(false);
  const [baked, setBaked] = useState(false);

  return (
    <>
      <Col md="1">
        <Dough
          onAnimationEnd={setStamped}
          onStamp={onStamp}
          state={animationState}
          machineState={machineState}
        />
      </Col>

      <Col md="1">
        {stamped && (
          <Biscuit
            onAnimationEnd={setBaked}
            state={animationState}
            onStamp={setStamped}
          />
        )}
      </Col>

      <Col md={{ span: 1, offset: 2 }}>
        {baked && <BakedBiscuit state={animationState} onBaked={setBaked} />}
      </Col>
    </>
  );
};

export default BiscuitLifecycle;
