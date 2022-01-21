import { useEffect, useState } from "react";

const Motor = ({
  machineState,
  setMotorWorking,
  motorWorking,
  setConveyorWorking,
}) => {
  const [motorLabel, setMotorLabel] = useState("turned off");

  useEffect(() => {
    if (machineState === "Paused") {
      setMotorLabel("paused");
    } else if (motorWorking) {
      setMotorLabel("working");
    } else {
      setMotorLabel("turned off");
    }
  }, [machineState, motorWorking]);

  useEffect(() => {
    setConveyorWorking(motorWorking);
  }, [motorWorking, setConveyorWorking]);

  useEffect(() => {
    if (motorWorking && machineState === "Off") {
      setTimeout(() => {
        setMotorWorking(false);
      }, 17000);
    }
  }, [machineState, motorWorking, setMotorWorking]);

  return (
    <p style={{ backgroundColor: "lightblue", padding: "5px" }}>
      Motor: {motorLabel}
    </p>
  );
};

export default Motor;
