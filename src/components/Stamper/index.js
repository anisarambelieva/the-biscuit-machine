import "./style.css";

const Stamper = ({ stamp, animationState }) => (
  <div
    className={stamp ? "stamper animatedStamper" : "stamper"}
    style={{
      WebkitAnimationPlayState: animationState,
    }}
  >
    Stamper
  </div>
);
export default Stamper;
