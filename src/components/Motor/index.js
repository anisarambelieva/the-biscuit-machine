import { useEffect, useState } from "react";

import * as constants from "../../constants.js";

const Motor = ({
  machineState,
  setMotorWorking,
  motorWorking,
  setConveyorWorking,
}) => {
  const [motorLabel, setMotorLabel] = useState(constants.motorState.off);

  useEffect(() => {
    if (machineState === constants.machineState.paused) {
      setMotorLabel(constants.motorState.paused);
    } else if (motorWorking) {
      setMotorLabel(constants.motorState.working);
    } else {
      setMotorLabel(constants.motorState.off);
    }
  }, [machineState, motorWorking]);

  useEffect(() => {
    setConveyorWorking(motorWorking);
  }, [motorWorking, setConveyorWorking]);

  useEffect(() => {
    let timer;

    if (motorWorking && machineState === constants.machineState.off) {
      timer = setTimeout(() => {
        setMotorWorking(false);
      }, 17000);
    }

    return () => clearTimeout(timer);
  }, [machineState, motorWorking, setMotorWorking]);

  return (
    <p
      style={{
        backgroundColor: "#ABDEE0",
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      Motor: {motorLabel}
    </p>
  );
};

export default Motor;
