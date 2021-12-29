import { Col } from "react-bootstrap";
import BakedBiscuit from "./bakedBiscuit";
import Dough from "./dough";
import Biscuit from "./rawBiscuit";

const BiscuitLifecycle = () => {
  return (
    <>
      <Col md="1">
        <Dough />
      </Col>

      <Col md="1">
        <Biscuit />
      </Col>

      <Col md={{ span: 1, offset: 2 }}>
        <BakedBiscuit />
      </Col>
    </>
  );
};

export default BiscuitLifecycle;
