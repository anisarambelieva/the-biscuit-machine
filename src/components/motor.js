const Motor = ({ state }) => (
  <p style={{ backgroundColor: "lightblue", padding: "5px" }}>
    Motor: {state === "On" ? "working" : "not working"}
  </p>
);

export default Motor;