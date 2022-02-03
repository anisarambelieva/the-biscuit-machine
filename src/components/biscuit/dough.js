import { useState } from "react";
import "./styles/dough.css";

const Dough = ({ onAnimationEnd, state, onStamp, machineState }) => {
  const [animationsCount, setAnimationsCount] = useState(1);
  const [className, setClassName] = useState("dough animatedDough");

  const handleAnimationEnd = () => {
    setAnimationsCount(animationsCount + 1);

    if (animationsCount === 4) {
      if (machineState !== "Off") {
        setClassName("dough");

        setTimeout(() => {
          setClassName("dough animatedDough");
          setAnimationsCount(1);
        }, 100);
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
        WebkitAnimationPlayState: state,
      }}
    >
      Dough
    </div>
  );
};

export default Dough;
