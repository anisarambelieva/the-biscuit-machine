import { Button } from "react-bootstrap";
import styled from "styled-components";

const SwitchButton = styled(Button)`
  padding: 0 3px;
`;

const Switch = ({ onChange }) => (
  <div
    style={{
      padding: "5px",
      backgroundColor: "#FADCD9",
      borderRadius: "5px",
    }}
  >
    <p>Switch</p>
    <SwitchButton
      onClick={() => onChange("On")}
      style={{ marginRight: "5px", backgroundColor: "#AB8281", border: "gray" }}
    >
      On
    </SwitchButton>

    <SwitchButton
      onClick={() => onChange("Paused")}
      style={{ marginRight: "5px", backgroundColor: "#AB8281", border: "gray" }}
    >
      Paused
    </SwitchButton>

    <SwitchButton
      onClick={() => onChange("Off")}
      style={{ backgroundColor: "#AB8281", border: "gray" }}
    >
      Off
    </SwitchButton>
  </div>
);

export default Switch;
