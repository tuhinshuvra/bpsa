import React from "react";
import { Container } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";

const LeaderShipComponent = () => {
  return (
    <div>
      <Container>
        <HeadingComponent1
          first="Current  "
          second="Leadership"
          className="text-center pb-3 text-main"
        />
      </Container>
    </div>
  );
};

export default LeaderShipComponent;
