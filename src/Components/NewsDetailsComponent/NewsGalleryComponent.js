import React from "react";
import { Col, Row } from "react-bootstrap";
import HeadingComponentTwo from "../Common/HeadingComponentTwo";
import ImageComponent from "../Common/ImageComponent";

const NewsGalleryComponent = () => {
  return (
    <div>
      <HeadingComponentTwo title={"Gallery"} />
      <Row className="">
        {[12, 3, 4, 5, 67, 8]?.map((item, index) => {
          return (
            <Col className="p-2" key={index} md={4}>
              <ImageComponent
                image={`https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`}
                className="w-full h-[100px] object-cover rounded-md"
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default NewsGalleryComponent;
