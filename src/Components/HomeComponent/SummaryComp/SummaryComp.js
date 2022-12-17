import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../../Common/HeadingComponent1";
import img1 from "../../../assets/Image/Home/Group 1000001033.png";
import img2 from "../../../assets/Image/Home/Group 1000001034.png";
import img3 from "../../../assets/Image/Home/Group 1000001035.png";
import img4 from "../../../assets/Image/Home/Group 1000001036.png";
import img5 from "../../../assets/Image/Home/Vector (1).png";
import img6 from "../../../assets/Image/Home/clarity_settings-solid-badged.png";
import { Paper } from "@mui/material";
import ImageComponent from "../../Common/ImageComponent";
import BgImg from "../../../assets/Image/Slider/Rectangle 1136.png";
import Styles from "./SummaryComp.module.css";

const summaryData = [
  {
    img: img1,
    title: "Established on",
    count: "2010",
  },
  {
    img: img2,
    title: "Total Members",
    count: "30",
  },
  {
    img: img3,
    title: "Event Organized",
    count: "60+",
  },
  {
    img: img4,
    title: "Training Organized",
    count: "200+",
  },
  {
    img: img5,
    title: "Medical Support",
    count: "1000+",
  },
  {
    img: img6,
    title: "Event Organized",
    count: "30",
  },
];

const SummaryComp = ({data}) => {
  return (
    <div className={`py-10 ${Styles.summaryMain__style}`}>
      <Container>
        <HeadingComponent1
          first="About"
          second=" Association"
          className="text-white text-center pb-4"
        />
        <Row>
          {data &&
            data?.map((item, index) => {
              return (
                <Col className="py-2" key={index} md={4}>
                  <div className="bg-main text-center text-white hover:bg-second py-3  transition-all duration-300">
                    <ImageComponent
                      image={item?.image}
                      className="block mx-auto object-contain h-[50px] mb-3"
                    />
                    <p className="font-semibold m-0">{item?.title}</p>
                    <h2>{item?.status}</h2>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default SummaryComp;
