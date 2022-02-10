import { useState } from "react";
import "./style.css";

import * as constants from "../../../constants.js";

const useDough = (onAnimationEnd, onStamp, machineState) => {
  const [animationsCount, setAnimationsCount] = useState(1);
  const [className, setClassName] = useState("dough animatedDough");

  const handleAnimationEnd = () => {
    setAnimationsCount(animationsCount + 1);
    let timer1, timer2;

    if (animationsCount === 4) {
      if (machineState !== constants.machineState.off) {
        setClassName("dough");

        timer1 = setTimeout(() => {
          setClassName("dough animatedDough");
          setAnimationsCount(1);
        }, 100);
      }

      onAnimationEnd(true);

      timer2 = setTimeout(() => {
        onStamp(false);
      }, 1000);
    } else if (animationsCount === 2) {
      onStamp(true);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  };

  return {
    handleAnimationEnd,
    className,
  };
};

const Dough = ({ onAnimationEnd, state, onStamp, machineState }) => {
  const { handleAnimationEnd, className } = useDough(
    onAnimationEnd,
    onStamp,
    machineState
  );

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
