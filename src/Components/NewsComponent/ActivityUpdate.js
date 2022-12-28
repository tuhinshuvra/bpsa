import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import NewsCard2 from "./NewsCard2";

const ActivityUpdate = ({ data }) => {
  return (
    <div>
      <Container>
        <HeadingComponent1
          first={`Activity `}
          second="Update"
          className="text-main mb-6 mt-[60px]"
        />
        <Row className="space-y-5 md:space-y-0">
          <Col md={6}>
            <NewsCard2
              item={data[0]}
              imgHeight="md:h-[400px] h-[200px]"
              heading="text-[16px] md:text-xl"
            />
          </Col>
          <Col md={6}>
            <Row className="space-y-5 md:space-y-0">
              {data &&
                data.slice(1)?.map((item, index) => {
                  return (
                    <Col key={index} md={6}>
                      {" "}
                      <NewsCard2
                        item={item}
                        imgHeight="h-[200px] md:h-[150px]"
                        heading="text-[14px]"
                      />
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ActivityUpdate;
