import { useState } from "react";
import "./styles/dough.css";

const Dough = ({ onAnimationEnd, state, onStamp }) => {
  const [animationsCount, setAnimationsCount] = useState(1);

  const handleAnimationEnd = () => {
    setAnimationsCount(animationsCount + 1);

    if (animationsCount === 4) {
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
      className="dough"
      style={{
        margin: 0,
        position: "absolute",
        WebkitAnimationPlayState: state,
      }}
    >
      Dough
    </div>
  );
};

export default Dough;
