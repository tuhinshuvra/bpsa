import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import act1 from "../../assets/Image/activities/Vector (2).png";
import act2 from "../../assets/Image/activities/Vector (3).png";
import act3 from "../../assets/Image/activities/Vector (4).png";
import act4 from "../../assets/Image/activities/Vector (5).png";
import ImageComponent from "../Common/ImageComponent";

const ActivitiesComp = () => {
  return (
    <div className="bg-main py-10 text-white ">
      <Container>
        <HeadingComponent1
          first="Our "
          second="Activities"
          className="text-center"
        />
        <Row>
          <Col md={3}>
            <div className="rounded-full ring-1 hover:right-2 hover:ring-second w-fit">
              {" "}
              <ImageComponent image={act1} className="p-3  w-[70px] h-[70px]" />
            </div>
            <h2>690</h2>
            <p>Projects Completed</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ActivitiesComp;
