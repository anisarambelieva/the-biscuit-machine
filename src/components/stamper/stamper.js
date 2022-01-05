import { useEffect, useState } from "react";
import "./stamper.css";

const Stamper = ({ stamp, state }) => {
  const [animationState, setAnimationState] = useState("running");

  useEffect(() => {
    if (state === "Paused") setAnimationState("paused");
    else setAnimationState("running");
  }, [animationState, state]);

  return (
    <div
      className={stamp ? "stamper" : ""}
      style={{
        backgroundColor: "lightgray",
        position: "absolute",
        textAlign: "center",
        height: "50px",
        width: "100px",
        WebkitAnimationPlayState: animationState,
      }}
    >
      Stamper
    </div>
  );
};
export default Stamper;
