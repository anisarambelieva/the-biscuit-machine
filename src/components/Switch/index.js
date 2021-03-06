import { Button } from "react-bootstrap";
import styled from "styled-components";

import * as constants from "../../constants.js";

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
      onClick={() => onChange(constants.machineState.on)}
      style={{ marginRight: "5px", backgroundColor: "#AB8281", border: "gray" }}
    >
      On
    </SwitchButton>

    <SwitchButton
      onClick={() => onChange(constants.machineState.paused)}
      style={{ marginRight: "5px", backgroundColor: "#AB8281", border: "gray" }}
    >
      Paused
    </SwitchButton>

    <SwitchButton
      onClick={() => onChange(constants.machineState.off)}
      style={{ backgroundColor: "#AB8281", border: "gray" }}
    >
      Off
    </SwitchButton>
  </div>
);

export default Switch;
