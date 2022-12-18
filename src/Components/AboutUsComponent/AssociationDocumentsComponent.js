import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Mousewheel, Navigation } from "swiper";

import { Col, Container, Row } from "react-bootstrap";
import { DownloadIcon } from "../../utlis/icons";
import HeadingComponent1 from "../Common/HeadingComponent1";
import ImageComponent from "../Common/ImageComponent";

const AssociationDocumentsComponent = () => {
  return (
    <div className="py-5">
      <Container>
        <HeadingComponent1
          first="Association  "
          second="Documents"
          className="text-center pb-3 text-main"
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
                    <Col md={8}>
                      <h4 className="text-main font-semibold">
                        Relevant Document
                      </h4>
                      <p>
                        2022 IACP State & Provincial Police Planning Officers
                        Section (SPPPOS) and Academy Directors Section (SPPADS)
                      </p>
                      <p className="text-justify">
                        There are many variations of passages of available but
                        the majority have in some form, by injected humou or
                        words which don’t look even slightly believable. There
                        are many variations of but the majority have suffered.
                      </p>
                    </Col>
                    <Col className="text-center" md={4}>
                      <div className="relative">
                        <ImageComponent
                          image={`https://images.unsplash.com/photo-1670097939254-56f5e0d03922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`}
                          className="w-full md:w-[250px] h-[250px]  mb-1 object-cover rounded-lg"
                        />

                        <div className="w-full md:w-[250px] h-[250px] bg-main/50 absolute top-0 rounded-lg">
                          <p className="absolute bottom-[5px] left-2 m-0 text-white flex items-center cursor-pointer">
                            <DownloadIcon
                              className="bg-second text-white mr-1 rounded-md p-1"
                              size={28}
                            />
                            Download Now
                          </p>
                        </div>
                      </div>
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

export default AssociationDocumentsComponent;
