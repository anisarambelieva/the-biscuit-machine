import "./oven.css";

const Oven = ({ ovenDegrees, heatingElement }) => (
  <div className={
    heatingElement ? "heating" : "cooling"
  } style={{ backgroundColor: "#f2f2f2", padding: "5px" }}>
    <p style={{ margin: 0 }}>{ovenDegrees}</p>
  </div>
);

export default Oven;
