import "./stamper.css";

const Stamper = ({ stamp, animationState }) => (
  <div
    className={stamp ? "stamper" : ""}
    style={{
      WebkitAnimationPlayState: animationState,
    }}
  >
    Stamper
  </div>
);
export default Stamper;
