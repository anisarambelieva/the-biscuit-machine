import "./styles/bakedBiscuit.css";

let animationsCount = 0;
const BakedBiscuit = ({ state, onBaked }) => {
  const handleAnimationEnd = () => {
    animationsCount++;

    if (animationsCount % 3 === 0) {
      onBaked(false);
    }
  };
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
