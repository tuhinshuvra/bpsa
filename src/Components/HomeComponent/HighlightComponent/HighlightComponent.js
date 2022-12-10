import React from "react";
import HeadingComponent1 from "../../Common/HeadingComponent1";
import hightLightImg from "../../../assets/Image/Home/Rectangle 1142.png";
import ImageComponent from "../../Common/ImageComponent";
import { Col, Row } from "react-bootstrap";

const HighlightComponent = () => {
  return (
    <div>
      <HeadingComponent1 second="Highlight" className="text-main py-3" />
      <Row>
        <Col md={6}>
          <div className="">
            <ImageComponent
              image={hightLightImg}
              className="w-full h-[400px] object-cover rounded-md"
            />
            <h6 className="text-main font-semibold text-lg">
              2022 IACP State & Provincial Police Planning Officers Section
              (SPPPOS) and Academy Directors Section (SPPADS)
            </h6>
            <p>
              Due to the powers vested in its Charter and its unique
              international character, the United Nations.
            </p>
            <p className="text-main border-b-2 w-fit border-main font-semibold cursor-pointer">
              Read more
            </p>
          </div>
        </Col>
        <Col md={6}>
          {[1, 2, 3]?.map((item, index) => {
            return (
              <Row key={index}>
                <Col md={5}>
                  {" "}
                  <ImageComponent
                    image={hightLightImg}
                    className="w-full h-fit object-cover rounded-md"
                  />
                </Col>
                <Col md={7}>
                  {" "}
                  <div className="">
                    <h6 className="text-main font-semibold text-lg md:text-sm">
                      2022 IACP State & Provincial Police Planning Officers
                      Section (SPPPOS) and Academy Directors Section (SPPADS)
                    </h6>
                    <p className="text-sm">
                      Due to the powers vested in its Charter and its unique
                      international character, the United Nations.
                    </p>
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
