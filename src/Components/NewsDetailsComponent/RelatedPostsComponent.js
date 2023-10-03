import React from "react";
import { Col, Row } from "react-bootstrap";
import NewsCard1 from "../NewsComponent/NewsCard1";

const RelatedPostsComponent = ({ data }) => {
  return (
    <div>
      <h5 className=" fw-bold pb-3">Related Posts</h5>
      <Row>
        {data &&
          data?.map((item, index) => {
            return (
              <Col className="pb-3" key={index} md={3}>
                <NewsCard1 item={item} className="h-[250px] md:h-[200px]" />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default RelatedPostsComponent;
