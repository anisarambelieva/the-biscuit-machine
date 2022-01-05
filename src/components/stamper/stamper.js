import "./stamper.css";

const Stamper = ({ stamp, animationState }) => {
  return (
    <div
      className={stamp ? "stamper" : ""}
      style={{
        backgroundColor: "lightgray",
        position: "absolute",
        textAlign: "center",
        height: "50px",
        width: "100px",
        WebkitAnimationPlayState: animationState,
      }}
    >
      Stamper
    </div>
  );
};
export default Stamper;
