import { useEffect } from "react";

const Motor = ({ machineState, setMotorWorking, motorWorking }) => {
  useEffect(() => {
    if (motorWorking && machineState === "Off") {
      setTimeout(() => {
        setMotorWorking(false);
      }, 15000);
    }
  }, [machineState, motorWorking, setMotorWorking]);

  return (
    <p style={{ backgroundColor: "lightblue", padding: "5px" }}>
      Motor: {motorWorking.toString()}
    </p>
  );
}

export default Motor;
