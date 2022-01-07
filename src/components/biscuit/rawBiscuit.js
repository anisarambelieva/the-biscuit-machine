import "./styles/biscuit.css";

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
        margin: 0,
        marginTop: "65px",
        position: "absolute",
        WebkitAnimationPlayState: state,
        paddingLeft: "25px"
      }}
    >
      Biscuit
    </div>
  );
};

export default Biscuit;
