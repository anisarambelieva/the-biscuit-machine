import "./style.css";

const useBakedBiscuit = (onBaked) => {
  let animationsCount = 0;

  const handleAnimationEnd = () => {
    animationsCount++;

    if (animationsCount % 3 === 0) {
      onBaked(false);
    }
  };

  return handleAnimationEnd;
};

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
