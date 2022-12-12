import React from "react";
import HeadingComponent1 from "../../Common/HeadingComponent1";
import hightLightImg from "../../../assets/Image/Home/Rectangle 1142.png";
import ImageComponent from "../../Common/ImageComponent";
import { Col, Row } from "react-bootstrap";

const HighlightComponent = ({ data }) => {
  return (
    <div>
      <HeadingComponent1 second="Highlight" className="text-main py-3" />
      <Row>
        <Col md={6}>
          <div className="space-y-2">
            <ImageComponent
              image={data[0]?.Cover_Photo}
              className="w-full h-[400px] object-cover rounded-md"
            />
            <h6 className="text-main font-semibold text-lg">
              {data[0]?.Heading}
            </h6>
            <p>{data[0]?.Sub_Heading}</p>
            <p className="text-main border-b-2 w-fit border-main font-semibold cursor-pointer">
              Read more
            </p>
          </div>
        </Col>
        <Col md={6}>
          {data &&
            data?.slice(1)?.map((item, index) => {
              return (
                <Row key={index}>
                  <Col md={5}>
                    {" "}
                    <ImageComponent
                      image={item?.Cover_Photo}
                      className="w-full h-fit object-cover rounded-md"
                    />
                  </Col>
                  <Col md={7}>
                    {" "}
                    <div className="">
                      <h6 className="text-main font-semibold text-lg md:text-sm">
                        {item?.Heading}
                      </h6>
                      <p className="text-sm">{item?.Sub_Heading}</p>
                      <p className="text-main border-b-2 w-fit border-main font-semibold cursor-pointer">
                        Read more
                      </p>
                    </div>
                  </Col>
                </Row>
              );
            })}{" "}
        </Col>
      </Row>
    </div>
  );
};

export default HighlightComponent;
