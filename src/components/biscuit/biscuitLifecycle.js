import { useState } from "react";
import { Col } from "react-bootstrap";
import BakedBiscuit from "./bakedBiscuit";
import Dough from "./dough";
import Biscuit from "./rawBiscuit";

const BiscuitLifecycle = ({ animationState, onStamp }) => {
  const [stamped, setStamped] = useState(false);
  const [baked, setBaked] = useState(false);

  return (
    <>
      <Col md="1">
        <Dough onAnimationEnd={setStamped} onStamp={onStamp} state={animationState} />
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
