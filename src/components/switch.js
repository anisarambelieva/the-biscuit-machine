import { Button } from "react-bootstrap";

const Switch = ({ onChange }) => {
  return (
    <div style={{padding: '5px'}}>
      <p>Switch</p>
      <Button onClick={() => onChange('On')} style={{padding: '0 3px', marginRight: '5px'}}>On</Button>
      <Button onClick={() => onChange('Paused')} style={{padding: '0 3px',  marginRight: '5px'}}>Paused</Button>
      <Button onClick={() => onChange('Off')} style={{padding: '0 3px'}}>Off</Button>
    </div>
  );
};

export default Switch;
