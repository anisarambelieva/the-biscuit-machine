import { Button } from "react-bootstrap";

const Switch = () => {
  return (
    <div style={{padding: '5px'}}>
      <p>Switch</p>
      <Button style={{padding: '0 3px', marginRight: '5px'}}>On</Button>
      <Button style={{padding: '0 3px',  marginRight: '5px'}}>Paused</Button>
      <Button style={{padding: '0 3px'}}>Off</Button>
    </div>
  );
};

export default Switch;
