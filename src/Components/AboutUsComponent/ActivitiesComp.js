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
    <div className="bg-main py-10 text-white ">
      <Container>
        <HeadingComponent1
          first="Our "
          second="Activities"
          className="text-center pb-3"
        />
        <Row>
          {activitiesData &&
            activitiesData?.map((item, index) => {
              return (
                <Col className="py-2" key={index} md={6}>
                  {" "}
                  <Accordion>
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
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default ActivitiesComp;
