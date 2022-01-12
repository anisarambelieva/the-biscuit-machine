import { useState } from "react";
import "./styles/dough.css";

const Dough = ({ onAnimationEnd, state, onStamp, machineState }) => {
  const [animationsCount, setAnimationsCount] = useState(1);
  const [className, setClassName] = useState("dough");

  const handleAnimationEnd = () => {
    setAnimationsCount(animationsCount + 1);

    if (animationsCount === 4) {
      if (machineState !== "Off") {
        setClassName("");

        setTimeout(() => {
          setClassName("dough");
          setAnimationsCount(1)
        }, 100)
      }
      
      onAnimationEnd(true);
      
      setTimeout(() => {
        onStamp(false);
      }, 1000);
    } else if (animationsCount === 2) {
      onStamp(true);
    }
  };

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className={className}
      style={{
        margin: 0,
        position: "absolute",
        WebkitAnimationPlayState: state,
        paddingLeft: "20px",
      }}
    >
      Dough
    </div>
  );
};

export default Dough;
