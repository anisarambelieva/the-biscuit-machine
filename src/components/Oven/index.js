import "./style.css";
import useOven from "./hook.js";

const Oven = ({ machineState, setMotorWorking, fasterHeating }) => {
  const { color, ovenDegrees } = useOven(
    machineState,
    setMotorWorking,
    fasterHeating
  );

  return (
    <div
      className="oven"
      style={{
        borderBottom: `15px solid ${color}`,
      }}
    >
      <p style={{ margin: 0 }}>{ovenDegrees}</p>
    </div>
  );
};

export default Oven;
