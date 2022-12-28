import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GetNewsData } from "../../api";
import HeadingComponent1 from "../Common/HeadingComponent1";
import NewsCard1 from "./NewsCard1";

const NewComp = ({ data }) => {
  return (
    <div>
      <Container className="py-10">
        <HeadingComponent1 second="News" className="text-main mb-4" />
        <Row className="my-6  ">
          <Col className="py-3" md={6}>
            <NewsCard1 className=" h-[250px] md:h-[300px]" item={data[0]} />
          </Col>
          <Col className="md:py-3" md={6}>
            <Row className="">
              {data &&
                data?.slice(1).map((item, index) => {
                  return (
                    <Col key={index} className="pb-3" md={6}>
                      <NewsCard1
                        className="h-[250px] md:h-[150px]"
                        item={item}
                      />
                    </Col>
                  );
                })}

              {/* <Col md={6}>
                <NewsCard1 />
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewComp;
