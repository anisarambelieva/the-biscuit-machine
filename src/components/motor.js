import { useEffect, useState } from "react";

const Motor = ({ conveyorWorking, machineState }) => {
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if (conveyorWorking) setWorking(true);
  }, [conveyorWorking]);

  useEffect(() => {
    if (working && machineState === "Off") {
      setTimeout(() => {
        setWorking(false);
      }, 15000);
    }
  }, [working, machineState]);

  return (
    <p style={{ backgroundColor: "lightblue", padding: "5px" }}>
      Motor: {working.toString()}
    </p>
  );
}

export default Motor;
