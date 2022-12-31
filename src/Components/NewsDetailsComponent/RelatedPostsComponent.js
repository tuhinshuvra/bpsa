import React from "react";
import { Col, Row } from "react-bootstrap";
import NewsCard1 from "../NewsComponent/NewsCard1";

const RelatedPostsComponent = () => {
  return (
    <div>
      <h5 className="text-main">Related Posts</h5>
      <Row>
        <Col md={3}>
          <NewsCard1/>
        </Col>
      </Row>
    </div>
  );
};

export default RelatedPostsComponent;
