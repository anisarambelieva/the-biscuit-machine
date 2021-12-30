import { useState } from "react";
import { Col } from "react-bootstrap";
import BakedBiscuit from "./bakedBiscuit";
import Dough from "./dough";
import Biscuit from "./rawBiscuit";

const BiscuitLifecycle = () => {
  const [stamped, setStamped] = useState(false);
  const [secondStamped, setSecondStamped] = useState(false);
  const [baked, setBaked] = useState(false);
  const [secondBaked, setSecondBaked] = useState(false);
  const [second, setSecond] = useState(false);

  setTimeout(() => {
    setBaked(true);
  }, 11500);

  setTimeout(() => {
    setSecond(true);
  }, 4500);

  setTimeout(() => {
    setSecondBaked(true);
  }, 16000);

  return (
    <>
      <Col md="1">
        <Dough onAnimationEnd={setStamped}/>
        {second && <Dough onAnimationEnd={setSecondStamped}/>}
      </Col>

      <Col md="1">
        {stamped && <Biscuit />}
        {secondStamped && <Biscuit />}
      </Col>

      <Col md={{ span: 1, offset: 2 }}>
        {baked && <BakedBiscuit />}
        {secondBaked && <BakedBiscuit />}
      </Col>
    </>
  );
};

export default BiscuitLifecycle;
