import { useEffect, useState } from "react";

const Motor = ({ conveyorWorking, machineState }) => {
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if (conveyorWorking) setWorking(true);
  }, [conveyorWorking]);

  return (
    <p style={{ backgroundColor: "lightblue", padding: "5px" }}>
      Motor: {working.toString()}
    </p>
  );
}

export default Motor;
