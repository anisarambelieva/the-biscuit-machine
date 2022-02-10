import "./style.css";
import useMotor from "./hook.js";

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
