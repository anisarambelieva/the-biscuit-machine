import { Button } from "react-bootstrap";

const Switch = (props) => {
    return (
        <div>
            <p>Switch:</p>
            <Button onClick={() => props.onChange('ON')}>On</Button>
            <Button onClick={() => props.onChange('PAUSED')}>Pause</Button>
            <Button onClick={() => props.onChange('OFF')}>Off</Button>
        </div>
    )
}

export default Switch;
