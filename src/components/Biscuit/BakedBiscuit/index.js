import "./style.css";
import useBakedBiscuit from "./hook.js";

const BakedBiscuit = ({ state, onBaked }) => {
  const handleAnimationEnd = useBakedBiscuit(onBaked);

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className="animatedBakedBiscuit"
      style={{
        WebkitAnimationPlayState: state,
      }}
    >
      Baked
    </div>
  );
};

export default BakedBiscuit;
