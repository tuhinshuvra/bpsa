import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import { Paper } from "@mui/material";
import ImageComponent from "../Common/ImageComponent";
import { FbIcon, LinkedInIcon, TwitterIcon } from "../../utlis/icons";

const LeaderShipComponent = () => {
  return (
    <div>
      <Container className="my-5">
        <HeadingComponent1
          first="Current  "
          second="Leadership"
          className="text-center pb-3 text-main mb-4"
        />

        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5]?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="shadow-lg border p-4">
                  <Row>
                    <Col className="text-center" md={3}>
                      <ImageComponent
                        image={`https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMHN1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
                        className="w-[200px] h-[200px] block mx-auto mb-1 object-cover"
                      />
                      <p className="text-main text-lg m-0 ">
                        Chowdhury Abdullah Al-Mamun BPM (Bar), PPM
                      </p>
                      <p className="text-second">Inspectior</p>
                      <div className="flex items-center justify-center text-main space-x-3">
                        <FbIcon size={28} />
                        <LinkedInIcon size={28} />
                        <TwitterIcon size={28} />
                      </div>
                    </Col>
                    <Col md={9}>
                      <h4 className="text-main font-semibold">President</h4>
                      <p className="text-justify">
                        Smart Inspect is a highly efficient platform that gives
                        us the final touches to our Quality Assurance Program.
                        We are able to complete inspections frequently and
                        efficiently with very little database management
                        responsibilities.” Smart Inspect is a highly efficient
                        platform that gives us the final touches to our Quality
                        Assurance Program. We are able to complete inspections
                        frequently and efficiently with very
                      </p>
                    </Col>
                  </Row>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default LeaderShipComponent;
