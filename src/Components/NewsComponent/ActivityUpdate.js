import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import NewsCard2 from "./NewsCard2";

const ActivityUpdate = ({ data }) => {
  const showData = data.slice(0, 5);
  // console.log("ActivityUpdate : ", data);
  // console.log("ActivityUpdate showData : ", showData);

  return (
    <div className=" bg-main/70 rounded-2xl my-5 py-5">
      <Container>
        <HeadingComponent1
          first={`Activity `}
          second="News"
          className="text-white  text-center pb-4 "
        />
        <Row className="space-y-5 md:space-y-0">
          <Col md={6}>
            <NewsCard2
              item={showData[0]}
              imgHeight="md:h-[400px] h-[200px]"
              heading="text-[16px] md:text-xl"
            />
          </Col>
          <Col md={6}>
            <Row className="space-y-5 md:space-y-0">
              {showData &&
                showData.slice(1)?.map((item, index) => {
                  return (
                    <Col key={index} md={6}>
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
