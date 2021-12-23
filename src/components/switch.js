import { Button } from "react-bootstrap";

const Switch = () => {
  return (
    <div>
      <p>Switch</p>
      <Button style={{padding: 0, marginRight: '5px'}}>On</Button>
      <Button style={{padding: 0,  marginRight: '5px'}}>Paused</Button>
      <Button style={{padding: 0}}>Off</Button>
    </div>
  );
};

export default Switch;
