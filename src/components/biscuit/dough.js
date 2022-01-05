import { useState } from "react";
import "./styles/dough.css";

const Dough = ({ onAnimationEnd, state }) => {
  const [animationsCount, setAnimationsCount] = useState(1);

  const handleAnimationEnd = () => {
    setAnimationsCount(animationsCount + 1);

    if (animationsCount % 3 === 0) {
      onAnimationEnd(true);
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
