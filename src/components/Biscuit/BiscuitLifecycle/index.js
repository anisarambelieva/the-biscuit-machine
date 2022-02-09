import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

import BakedBiscuit from "../BakedBiscuit";
import Dough from "../Dough";
import Biscuit from "../RawBiscuit";

const BiscuitLifecycle = ({
  animationState,
  onStamp,
  machineState,
  setBakedBiscuitsCount,
  bakedBiscuitsCount,
}) => {
  const [stamped, setStamped] = useState(false);
  const [baked, setBaked] = useState(false);

  useEffect(() => {
    if (baked) {
      setBakedBiscuitsCount((bakedBiscuitsCount) => bakedBiscuitsCount + 1);
    }
  }, [baked, setBakedBiscuitsCount]);

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
