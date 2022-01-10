const Motor = ({ conveyorWorking }) => (
  <p style={{ backgroundColor: "lightblue", padding: "5px" }}>
    Motor: {conveyorWorking ? "working" : "not working"}
  </p>
);

export default Motor;
