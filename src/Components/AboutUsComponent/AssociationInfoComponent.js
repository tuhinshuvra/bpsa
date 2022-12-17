import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import ImageComponent from "../Common/ImageComponent";
import assImg from "../../assets/Image/Gallery/Rectangle 1161.png";
import { MdOutlineChevronRight } from "react-icons/md";

const AssociationInfoComponent = () => {
  return (
    <div>
      <Container className="py-12">
        <Row>
          <Col className="py-2" md={6}>
            <HeadingComponent1 first="About " second="Association" />
            <p className="font-semibold text-main md:pr-4 text-justify">
              2022 IACP State & Provincial Police Planning Officers Section
              (SPPPOS) and Academy Directors Section (SPPADS)
            </p>
            <p className="md:pr-4 text-justify">
              There are many variations of passages of available but the
              majority have in some form, by injected humou or words which don’t
              look even slightly believable. There are many variations of but
              the majority have suffered.
            </p>
          </Col>
          <Col className="py-2" md={6}>
            <button className="text-white bg-main px-5 py-3">
              Our Mission
            </button>
            <button className="text-white bg-second px-5 py-3">
              Our Mission
            </button>
            <button className="text-white bg-main px-5 py-3">
              Our Mission
            </button>
            <p className="font-semibold py-3">
              There are many variations of passages of available but the
              majority have in some form, by injected humou or words which don’t
              look even slightly believable. There are many variations of but
              the majority have suffered.
            </p>
            <Row className="space-y-4">
              <Col md={6}>
                <ImageComponent
                  image={assImg}
                  className="w-full h-[200px] object-cover rounded-sm"
                />
              </Col>
              <Col md={6}>
                <ul className="m-0 p-0 space-y-3">
                  <li className="flex">
                    <MdOutlineChevronRight size={24} className="text-second" />
                    Nsectetur cing elit
                  </li>
                  <li className="flex">
                    <MdOutlineChevronRight size={24} className="text-second" />
                    Nsectetur cing elit
                  </li>
                  <li className="flex">
                    <MdOutlineChevronRight size={24} className="text-second" />
                    Nsectetur cing elit
                  </li>
                  <li className="flex">
                    <MdOutlineChevronRight size={24} className="text-second" />
                    Nsectetur cing elit
                  </li>
                  <li className="flex">
                    <MdOutlineChevronRight size={24} className="text-second" />
                    Lorem Ipsum on the tend to repeat.
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AssociationInfoComponent;
