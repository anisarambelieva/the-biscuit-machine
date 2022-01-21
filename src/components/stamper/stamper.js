import "./stamper.css";

const Stamper = ({ stamp, animationState }) => (
  <div
    className={stamp ? "stamper" : ""}
    style={{
      backgroundColor: "#DCD2CC",
      position: "absolute",
      textAlign: "center",
      height: "50px",
      width: "100px",
      WebkitAnimationPlayState: animationState,
      zIndex: "1",
      borderRadius: "5px",
    }}
  >
    Stamper
  </div>
);
export default Stamper;
