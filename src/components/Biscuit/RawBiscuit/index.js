import "./style.css";

import useBiscuit from "./hook.js";

const Biscuit = ({ onAnimationEnd, state, onStamp }) => {
  const { handleAnimationEnd } = useBiscuit(onAnimationEnd, onStamp);

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className="biscuit"
      style={{
        WebkitAnimationPlayState: state,
      }}
    >
      Biscuit
    </div>
  );
};

export default Biscuit;
