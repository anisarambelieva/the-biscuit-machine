import { useState } from "react";
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

  setTimeout(() => {
    setSecond(true);
  }, 4500);
  
  return (
    <>
      <Col md="1">
        <Dough
          onAnimationEnd={setStamped}
          state={state === "Paused" ? "paused" : "running"}
        />
        {second && (
          <Dough
            onAnimationEnd={setSecondStamped}
            state={state === "Paused" ? "paused" : "running"}
          />
        )}
      </Col>

      <Col md="1">
        {stamped && (
          <Biscuit
            onAnimationEnd={setBaked}
            state={state === "Paused" ? "paused" : "running"}
          />
        )}
        {secondStamped && (
          <Biscuit
            onAnimationEnd={setSecondBaked}
            state={state === "Paused" ? "paused" : "running"}
          />
        )}
      </Col>

      <Col md={{ span: 1, offset: 2 }}>
        {baked && <BakedBiscuit state={state === "Paused" ? "paused" : "running"} />}
        {secondBaked && <BakedBiscuit state={state === "Paused" ? "paused" : "running"} />}
      </Col>
    </>
  );
};

export default BiscuitLifecycle;
