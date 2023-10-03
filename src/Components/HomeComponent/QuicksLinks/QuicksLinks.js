import { Paper } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../../Common/HeadingComponent1";
import { BsArrowRight } from "react-icons/bs";
import BDPolice from '../../../assets/Image/logo/police logo.jpg';
import './QuickLinks.css';

const localLinkData = [
  {
    title: "Bangladesh Police",
    url: "",
  },
  {
    title: "BP Association",
    url: "",
  },
  {
    title: "DMP",
    url: "",
  },
  {
    title: "RAB",
    url: "",
  },
  {
    title: "BD Army",
    url: "",
  },
];

const QuicksLinks = ({ local, international }) => {
  return (
    <Container>
      <HeadingComponent1
        first="Quick "
        second="Links"
        className=" text-center pb-4"
      />
      <Row>
        <div className="col-lg-7 mb-3 mb-lg-0">
          <div className="p-2 bg-[#FFFFFF] rounded-2xl">
            <HeadingComponent1
              second="Local"
              className=" pl-5 text-center py-2"
            />
            <Row>
              <Col md={6}>
                <ul>
                  {local &&
                    local?.slice(0, 7).map((item, index) => {
                      return (
                        <li key={index}>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href={`${item?.link}`}
                            className="flex items-center space-x-2 text-main py-2 hover:text-second text-[15px]"
                          >
                            {/* <BsArrowRight size={24} className="mr-2" /> */}
                            <img src={item?.photo} className="linkLogo" alt="" />

                            {item?.title}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </Col>
              <Col md={6}>
                {" "}
                <ul>
                  {local &&
                    local?.slice(7, 14).map((item, index) => {
                      return (
                        <li key={index}>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href={`${item?.link}`}
                            className="flex items-center space-x-2  py-2 hover:text-second text-[15px]"
                          >
                            {/* <BsArrowRight size={24} className="mr-2" />{" "} */}
                            <img src={item?.photo} className="linkLogo" alt="" />
                            {item?.title}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </Col>
            </Row>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="p-2 bg-[#FFFFFF] rounded-2xl">
            <HeadingComponent1
              second="International"
              className=" pl-5 text-center py-2"
            />
            <ul>
              {international &&
                international?.slice(0, 7).map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={`${item?.link}`}
                        className="flex items-center space-x-2 text-main py-2 hover:text-second text-[15px]"
                      >
                        {/* <BsArrowRight size={24} className="mr-2" />{" "} */}
                        <img src={item?.photo} className="linkLogo" alt="" />
                        {item?.title}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default QuicksLinks;
