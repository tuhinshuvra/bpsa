import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { objectiveData } from "../../assets/Data/objectiveData";
import img1 from "../../assets/Image/Gallery/Rectangle 1161.png";
import HeadingComponent1 from "../Common/HeadingComponent1";

const ObjectivesComponent = () => {
  return (
    <div className="py-3 bg-[#E2E3E7] rounded-2xl">
      <Container>
        <HeadingComponent1
          first="Goals and "
          second="Objectives"
          className="text-center pb-3"
        />
        <Row>
          {objectiveData &&
            objectiveData?.map((item, index) => {
              return (
                <Col className="py-2" key={index} md={4}>
                  <div className="relative">
                    <img
                      src={img1}
                      alt=""
                      className="h-[250px] w-full object-cover rounded-lg"
                    />
                    <div className="absolute  bg-black/60 rounded-md top-0 h-[250px] p-4 text-white">
                      <p className="text-center text-xl flex items-center justify-center relative top-[50%] translate-y-[-50%] ">
                        {item?.title}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default ObjectivesComponent;
