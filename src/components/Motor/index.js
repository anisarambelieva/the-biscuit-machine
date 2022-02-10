import { useEffect, useState } from "react";

import "./style.css";
import * as constants from "../../constants.js";

const useMotor = (
  machineState,
  setMotorWorking,
  motorWorking,
  setConveyorWorking
) => {
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

  return {
    motorLabel,
  };
};

const Motor = ({
  machineState,
  setMotorWorking,
  motorWorking,
  setConveyorWorking,
}) => {
  const { motorLabel } = useMotor(
    machineState,
    setMotorWorking,
    motorWorking,
    setConveyorWorking
  );

  return <p className="motor">Motor: {motorLabel}</p>;
};

export default Motor;
