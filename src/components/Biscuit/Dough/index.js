import "./style.css";

import useDough from "./hook.js";

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
