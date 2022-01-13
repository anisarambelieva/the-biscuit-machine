import { useEffect } from "react";

const Motor = ({
  machineState,
  setMotorWorking,
  motorWorking,
  setConveyorWorking,
}) => {
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
      Motor: {machineState === "Paused" ? "paused" : motorWorking.toString()}
    </p>
  );
};

export default Motor;
