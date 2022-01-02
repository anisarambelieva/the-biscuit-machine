import "./styles/dough.css";

let animationsCount = 0;
const Dough = ({ onAnimationEnd, state }) => {
  const handleAnimationEnd = () => {
    animationsCount++;

    if (animationsCount % 3 === 0) {
      onAnimationEnd(true);
    }
  };

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className="dough"
      style={{ margin: 0, position: "absolute", WebkitAnimationPlayState: state }}
    >
      Dough
    </div>
  );
};

export default Dough;
