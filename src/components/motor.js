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
    let timer;

    if (motorWorking && machineState === "Off") {
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
