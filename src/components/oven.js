import { useEffect, useState } from "react";

import * as constants from "../constants.js";

const Oven = ({ machineState, setMotorWorking, fasterHeating }) => {
  const [ovenDegrees, setOvenDegrees] = useState(0);
  const [heatingElement, setHeatingElement] = useState(false);
  const [color, setColor] = useState("");
  const [heatingTimeout, setHeatingTimeout] = useState(1000);

  useEffect(() => {
    if (fasterHeating) {
      setHeatingTimeout(100);
    } else {
      setHeatingTimeout(1000);
    }
  }, [fasterHeating]);

  useEffect(() => {
    if (
      machineState === "On" ||
      (machineState === constants.machineState.paused && ovenDegrees !== 0)
    ) {
      if (ovenDegrees < 220 && !heatingElement) setHeatingElement(true);
      else if (ovenDegrees > 239) setHeatingElement(false);
    } else if (machineState === constants.machineState.off) {
      setHeatingElement(false);
    }
  }, [machineState, ovenDegrees, heatingElement]);

  useEffect(() => {
    let timer;

    if (heatingElement) {
      timer = setTimeout(() => {
        if (ovenDegrees < 240) setOvenDegrees((ovenDegrees) => ovenDegrees + 1);
      }, heatingTimeout);
    } else {
      timer = setTimeout(() => {
        if (ovenDegrees > 0) setOvenDegrees((ovenDegrees) => ovenDegrees - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [heatingElement, ovenDegrees, heatingTimeout]);

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
