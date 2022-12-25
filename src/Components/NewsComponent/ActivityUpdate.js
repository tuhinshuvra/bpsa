import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import NewsCard2 from "./NewsCard2";

const ActivityUpdate = () => {
  return (
    <div>
      <Container>
        <HeadingComponent1
          first={`Activity `}
          second="Update"
          className="text-main mb-4"
        />
        <Row className="space-y-5 md:space-y-0">
          <Col md={6}>
            <NewsCard2
              imgHeight="md:h-[400px] h-[200px]"
              heading="text-[16px] md:text-xl"
            />
          </Col>
          <Col md={6}>
            <Row className="space-y-5 md:space-y-0">
              <Col md={6}>
                {" "}
                <NewsCard2
                  imgHeight="h-[200px] md:h-[150px]"
                  heading="text-[14px]"
                />
                <NewsCard2
                  imgHeight="h-[200px] md:h-[150px]"
                  heading="text-[14px]"
                />
              </Col>
              <Col md={6}>
                {" "}
                <NewsCard2
                  imgHeight="h-[200px] md:h-[150px]"
                  heading="text-[14px]"
                />
                <NewsCard2
                  imgHeight="h-[200px] md:h-[150px]"
                  heading="text-[14px]"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ActivityUpdate;
