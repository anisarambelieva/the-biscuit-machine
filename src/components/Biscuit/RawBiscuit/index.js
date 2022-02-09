import "./style.css";

let animationsCount = 0;
const Biscuit = ({ onAnimationEnd, state, onStamp }) => {
  const handleAnimationEnd = () => {
    animationsCount++;

    if (animationsCount % 2 === 0) {
      onAnimationEnd(true);
      onStamp(false);
    }
  };

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
