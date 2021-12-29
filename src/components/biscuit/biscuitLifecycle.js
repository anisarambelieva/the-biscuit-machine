import { useState } from "react";
import { Col } from "react-bootstrap";
import BakedBiscuit from "./bakedBiscuit";
import Dough from "./dough";
import Biscuit from "./rawBiscuit";

const BiscuitLifecycle = () => {
  const [stamped, setStamped] = useState(false);
  const [baked, setBaked] = useState(false);

  setTimeout(() => {
    setStamped(true);
  }, 6500);

  setTimeout(() => {
    setBaked(true);
  }, 11500);

  return (
    <>
      <Col md="1">
        <Dough />
      </Col>

      <Col md="1">
        {stamped && <Biscuit />}
      </Col>

      <Col md={{ span: 1, offset: 2 }}>
        {baked && <BakedBiscuit />}
      </Col>
    </>
  );
};

export default BiscuitLifecycle;
