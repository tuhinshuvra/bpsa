import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GetNewsData } from "../../api";
import HeadingComponent1 from "../Common/HeadingComponent1";
import NewsCard1 from "./NewsCard1";

const NewComp = () => {
  const [newsData, setNewsData] = useState([]);
  const getNewsData = async () => {
    const result = await GetNewsData();
    if (result?.success === "success") {
      setNewsData(result?.data);
    }
  };

  useEffect(() => {
    getNewsData();
  }, []);
  return (
    <div>
      <Container className="py-10">
        <HeadingComponent1 second="News" className="text-main mb-4" />
        <Row className="my-6  ">
          <Col className="py-3" md={6}>
            <NewsCard1 />
          </Col>
          <Col className="md:py-3" md={6}>
            <Row className="">
              <Col className="pb-3" md={6}>
                <NewsCard1 />
              </Col>
              <Col md={6}>
                <NewsCard1 />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewComp;
