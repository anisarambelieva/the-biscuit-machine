import { useEffect, useState } from "react";

import * as constants from "../../constants.js";

const useMachine = () => {
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

  return {
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
  };
};

export default useMachine;
