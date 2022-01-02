import "./styles/biscuit.css";

let animationsCount = 0;
const Biscuit = ({ onAnimationEnd, state }) => {
  const handleAnimationEnd = () => {
    animationsCount++;

    if (animationsCount % 2 === 0) {
      onAnimationEnd(true);
    }
  };

  return (
    <div
      onAnimationEnd={handleAnimationEnd}
      className="biscuit"
      style={{
        margin: 0,
        marginTop: "65px",
        position: "absolute",
        WebkitAnimationPlayState: state,
      }}
    >
      Biscuit
    </div>
  );
};

export default Biscuit;
