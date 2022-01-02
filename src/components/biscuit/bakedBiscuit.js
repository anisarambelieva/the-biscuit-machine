import "./styles/bakedBiscuit.css";

const BakedBiscuit = ({ state }) => (
  <div
    className="bakedBiscuit"
    style={{
      margin: 0,
      marginTop: "65px",
      position: "absolute",
      WebkitAnimationPlayState: state,
    }}
  >
    Baked
  </div>
);

export default BakedBiscuit;
