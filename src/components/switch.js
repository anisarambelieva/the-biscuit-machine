import { Button } from "react-bootstrap";
import styled from 'styled-components';

const SwitchButton = styled(Button)`
    padding: 0 3px;
`

const Switch = ({ onChange }) => {
  return (
    <div style={{padding: '5px', backgroundColor: "lightgray"}}>
      <p>Switch</p>
      <SwitchButton onClick={() => onChange('On')} style={{marginRight: '5px', backgroundColor: "gray", border: "gray"}}>On</SwitchButton>
      <SwitchButton onClick={() => onChange('Paused')} style={{ marginRight: '5px', backgroundColor: "gray", border: "gray"}}>Paused</SwitchButton>
      <SwitchButton onClick={() => onChange('Off')} style={{ backgroundColor: "gray", border: "gray"}}>Off</SwitchButton>
    </div>
  );
};

export default Switch;
