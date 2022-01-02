import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import BakedBiscuit from "./bakedBiscuit";
import Dough from "./dough";
import Biscuit from "./rawBiscuit";

const BiscuitLifecycle = ({ state }) => {
  const [stamped, setStamped] = useState(false);
  const [secondStamped, setSecondStamped] = useState(false);
  const [baked, setBaked] = useState(false);
  const [secondBaked, setSecondBaked] = useState(false);
  const [second, setSecond] = useState(false);
  const [animationState, setAnimationState] = useState("running");

  useEffect(() => {
    if (state === "Paused") setAnimationState("paused");
    else setAnimationState("running");
  }, [animationState, state]);

  setTimeout(() => {
    setSecond(true);
  }, 4500);
  
  return (
    <>
      <Col md="1">
        <Dough onAnimationEnd={setStamped} state={animationState} />
        {second && (
          <Dough onAnimationEnd={setSecondStamped} state={animationState} />
        )}
      </Col>

      <Col md="1">
        {stamped && (
          <Biscuit onAnimationEnd={setBaked} state={animationState} />
        )}
        {secondStamped && (
          <Biscuit
            onAnimationEnd={setSecondBaked}
            state={animationState}
          />
        )}
      </Col>

      <Col md={{ span: 1, offset: 2 }}>
        {baked && <BakedBiscuit state={animationState} /> }
        {secondBaked && <BakedBiscuit state={animationState} /> }
      </Col>
    </>
  );
};

export default BiscuitLifecycle;
