const Oven = ({ ovenDegrees, heatingElement }) => (
  <div style={{ backgroundColor: "#ebbb86", padding: "5px" }}>
    <p style={{ margin: 0 }}>Heating element on: {heatingElement}</p>
    <p style={{ margin: 0 }}>Oven degrees: {ovenDegrees}</p>
  </div>
);

export default Oven;
