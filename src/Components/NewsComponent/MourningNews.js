import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import NewsCard1 from "./NewsCard1";
// import required modules
import { Keyboard, Mousewheel, Navigation } from "swiper";
import ImageComponent from "../Common/ImageComponent";
import { TimeIcon } from "../../assets/Icons/Icons";
import { dateFormatOne } from "../../utlis/dateFormat";

const MourningNews = ({ data }) => {
  return (
    <div className="mb-10">
      <Container className="bg-black/80 py-5 md:p-5  rounded-lg">
        <HeadingComponent1
          first={"Mourning "}
          second="News"
          className={"text-white  pl-5 "}
        />
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {data &&
            data?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="  p-4 text-white">
                    <Row>
                      <Col className="order-2 md:order-2" md={8}>
                        <div className="space-y-3">
                          <h4>{item?.Heading}</h4>
                          <div className="flex items-center mt-2 ">
                            <TimeIcon size={20} className="mr-1" />
                            {dateFormatOne(item?.Pub_Date)}
                          </div>

                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.Details,
                            }}
                            className="text-sm"
                          ></div>
                        </div>
                      </Col>
                      <Col className="text-center sm:order-1 md:order-2" md={4}>
                        <div className="space-y-2">
                          <ImageComponent
                            image={item?.Cover_Photo}
                            className="w-full md:w-[250px] h-[250px]  mb-1 object-cover rounded-lg mx-auto block"
                          />
                          {/* <p>Chowdhury Abdullah Al-Mamun BPM (Bar), PPM</p>
                          <button className="bg-second text-white py-1 rounded-full px-4">
                            Inspector
                          </button> */}
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.Sub_Heading,
                            }}
                            className="text-sm mt-3"
                          ></div>
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

export default MourningNews;
