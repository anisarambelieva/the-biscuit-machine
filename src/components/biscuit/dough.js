import "./styles/dough.css";

let animationsCount = 0;
const Dough = ({ onAnimationEnd }) => {

  const handleAnimationEnd = () => {
    animationsCount++;

    if (animationsCount % 3 === 0) {
      onAnimationEnd(true);
    }
  };

  return (
    <div onAnimationEnd={handleAnimationEnd} className="dough" style={{ margin: 0, position: "absolute" }}>
      Dough
    </div>
  );
};

export default Dough;
