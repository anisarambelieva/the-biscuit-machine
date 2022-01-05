const Motor = ({ state }) => (
  <p style={{ backgroundColor: "lightgray", padding: "5px" }}>
    Motor: {state === "On" ? "working" : "not working"}
  </p>
);

export default Motor;
