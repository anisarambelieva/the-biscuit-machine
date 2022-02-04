import { Form } from "react-bootstrap";

const BoostSwitch = ({ onChange }) => (
  <Form>
    <Form.Check type="switch" label="Faster heating" onChange={onChange} />
  </Form>
);

export default BoostSwitch;
