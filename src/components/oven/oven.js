import { useEffect, useState } from "react";
import "./oven.css";

const Oven = ({ machineState, setConveyorWorking }) => {
  const [ovenDegrees, setOvenDegrees] = useState(0);
  const [heatingElement, setHeatingElement] = useState(false);

  useEffect(() => {
    if (machineState === "On") {
      if (ovenDegrees < 220 && !heatingElement) setHeatingElement(true);
      else if (ovenDegrees > 239) setHeatingElement(false);
    } else if (machineState === "Off") {
      setHeatingElement(false);
    }
  }, [machineState, ovenDegrees, heatingElement]);

  useEffect(() => {
    if (heatingElement) {
      setTimeout(() => {
        if (ovenDegrees < 240) setOvenDegrees(ovenDegrees + 1);
      }, 1000);
    } else {
      setTimeout(() => {
        if (ovenDegrees > 0) setOvenDegrees(ovenDegrees - 1);
      }, 1000);
    }
  }, [heatingElement, ovenDegrees]);

  useEffect(() => {
    if (ovenDegrees >= 220 && machineState === "On") {
      setConveyorWorking(true);
    }
  }, [ovenDegrees, machineState, setConveyorWorking])

  return (
    <div className={
      heatingElement ? "heating" : "cooling"
    } style={{ backgroundColor: "#f2f2f2", padding: "5px" }}>
      <p style={{ margin: 0 }}>{ovenDegrees}</p>
    </div>
  );
}

export default Oven;
