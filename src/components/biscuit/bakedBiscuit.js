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
      className="bakedBiscuit"
      style={{
        margin: 0,
        marginTop: "65px",
        position: "absolute",
        WebkitAnimationPlayState: state,
        paddingLeft: "25px",
        zIndex: "-1"
      }}
    >
      Baked
    </div>
  );
};

export default BakedBiscuit;
