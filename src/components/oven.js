import { useEffect, useState } from "react";

const Oven = ({ machineState, setMotorWorking }) => {
  const [ovenDegrees, setOvenDegrees] = useState(0);
  const [heatingElement, setHeatingElement] = useState(false);
  const [color, setColor] = useState("");

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
      setMotorWorking(true);
    }
  }, [ovenDegrees, machineState, setMotorWorking]);

  useEffect(() => {
    if (ovenDegrees < 100) setColor("#f2f2f2");
    else if (ovenDegrees < 150) setColor("#f3dcd3");
    else if (ovenDegrees < 200) setColor("#f0a78b");
    else if (ovenDegrees < 219) setColor("#f3946c");
    else if (ovenDegrees < 240) setColor("#f0703e");
  }, [ovenDegrees]);

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        padding: "5px",
        borderBottom: `15px solid ${color}`,
        borderRadius: "5px",
      }}
    >
      <p style={{ margin: 0 }}>{ovenDegrees}</p>
    </div>
  );
};

export default Oven;
