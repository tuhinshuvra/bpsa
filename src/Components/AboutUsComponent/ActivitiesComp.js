import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import act1 from "../../assets/Image/activities/Vector (2).png";
import act2 from "../../assets/Image/activities/Vector (3).png";
import act3 from "../../assets/Image/activities/Vector (4).png";
import act4 from "../../assets/Image/activities/Vector (5).png";
import ImageComponent from "../Common/ImageComponent";
import { activitiesData } from "../../assets/Data/activitiesData";

const ActivitiesComp = () => {
  return (
    <div className="bg-success/50  py-4  my-5 text-white rounded-2xl ">
      <Container>
        <HeadingComponent1
          first="Our "
          second="Activities"
          className="text-center pb-8"
        />
        <Row>
          <Col md={6}>
            {activitiesData &&
              activitiesData?.slice(0, 3)?.map((item, index) => {
                return (
                  <Accordion className="py-2" key={index}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>{item?.title}</Accordion.Header>
                      <Accordion.Body>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                          className="text-sm"
                        ></div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                );
              })}
          </Col>
          <Col md={6}>
            {activitiesData &&
              activitiesData?.slice(3)?.map((item, index) => {
                return (
                  <Accordion className="py-2" key={index}>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>{item?.title}</Accordion.Header>
                      <Accordion.Body>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.description,
                          }}
                          className="text-sm"
                        ></div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                );
              })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ActivitiesComp;
