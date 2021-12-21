import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Biscuit from "./biscuit/biscuit.js";
import Conveyor from "./conveyor";
import Oven from "./oven";
import Switch from "./switch";

const Machine = () => {
  const [switchState, setSwitchState] = useState("OFF");
  const [ovenDegrees, setOvenDegrees] = useState(0);
  const [conveyorWorking, setConveyorWorking] = useState(false);
  const [secondBiscuit, setSecondBiscuit] = useState(false);
  const [thirdBiscuit, setThirdBiscuit] = useState(false);

  // if the switch is turned on, preheat oven to 240 degrees and then stop
  // if the switch is off, start decreasing the degrees
  useEffect(() => {
    if (switchState === "ON" && ovenDegrees < 240) {
      setTimeout(() => {
        setOvenDegrees(ovenDegrees + 1);
      }, 100);
    } else if (switchState === "OFF" && ovenDegrees > 0) {
      setTimeout(() => {
        setOvenDegrees(ovenDegrees - 1);
      }, 100);
    }

    if (ovenDegrees >= 220 && !conveyorWorking) setConveyorWorking(true);

    if (switchState !== "ON") {
      setConveyorWorking(false);
    }
  }, [switchState, ovenDegrees, conveyorWorking]);

  const createBiscuit = () => setSecondBiscuit(true);
  const createThirdBiscuit = () => setThirdBiscuit(true);

  return (
    <>
      <Oven ovenDegrees={ovenDegrees}></Oven>
      <Switch onChange={setSwitchState} />
      <Button onClick={() => console.log(switchState)}>Check state</Button>
      <Button onClick={() => console.log(ovenDegrees)}>
        Check oven degrees
      </Button>
      <Button onClick={createBiscuit}>Create second Biscuit</Button>
      <Button onClick={createThirdBiscuit}>Create third Biscuit</Button>
      <Conveyor conveyorWorking={conveyorWorking.toString()}></Conveyor>

      <div
        className="biscuits"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          position: "relative",
        }}
      >
        <Biscuit />
        {secondBiscuit && <Biscuit />}
        {thirdBiscuit && <Biscuit />}
      </div>
    </>
  );
};

export default Machine;
