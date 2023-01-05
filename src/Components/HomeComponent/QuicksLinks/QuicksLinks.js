import { Paper } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../../Common/HeadingComponent1";
import { BsArrowRight } from "react-icons/bs";

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
        className="text-main text-center pb-4"
      />
      <Row>
        <Col md={7}>
          <Paper className="p-2">
            <HeadingComponent1
              second="Local"
              className="text-main pl-5 text-center py-2"
            />
            <Row>
              <Col md={6}>
                {" "}
                <ul>
                  {local &&
                    local?.slice(0, 7).map((item, index) => {
                      return (
                        <li key={index}>
                          <a
                            rel="noreferrer"
                            target="_blank"
                            href={`${item?.link}`}
                            className="flex items-center space-x-2 text-main py-2 hover:text-second"
                          >
                            <BsArrowRight size={24} className="mr-2" />{" "}
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
                            className="flex items-center space-x-2 text-main py-2 hover:text-second"
                          >
                            <BsArrowRight size={24} className="mr-2" />{" "}
                            {item?.title}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </Col>
            </Row>
          </Paper>
        </Col>
        <Col md={5}>
          <div className="p-2 bg-main rounded-md">
            <HeadingComponent1
              second="International"
              className="text-white pl-5 text-center py-2"
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
                        className="flex items-center space-x-2 text-white py-2 hover:text-second"
                      >
                        <BsArrowRight size={24} className="mr-2" />{" "}
                        {item?.title}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuicksLinks;
