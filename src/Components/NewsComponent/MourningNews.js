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

const MourningNews = () => {
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
          {[1, 2, 3, 4, 5]?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="  p-4 text-white">
                  <Row>
                    <Col className="order-2 md:order-2" md={8}>
                      <p className="text-justify">
                        There are many variations of passages of available but
                        the majority have in some form, by injected humou or
                        words which don’t look even slightly believable. There
                        are many variations of but the majority have suffered
                        There are many variations of passages of available but
                        the majority have in some form, by injected humou or
                        words which don’t look even slightly believable. There
                        are many variations of but the majority have suffered.
                        <br />
                        <br />
                        There are many variations of passages of available but
                        the majority have in some form, by injected humou or
                        words which don’t look even slightly believable. There
                        are many variations of but the majority have suffered
                        There are many variations of passages of available but
                        the majority have in some form, by injected humou or
                        words which don’t look even slightly believable. There
                        are many variations of but the majority have suffered.
                      </p>
                    </Col>
                    <Col className="text-center sm:order-1 md:order-2" md={4}>
                      <div className="space-y-2">
                        <ImageComponent
                          image={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}
                          className="w-full md:w-[250px] h-[250px]  mb-1 object-cover rounded-lg mx-auto block"
                        />
                        <p>Chowdhury Abdullah Al-Mamun BPM (Bar), PPM</p>
                        <button className="bg-second text-white py-1 rounded-full px-4">
                          Inspector
                        </button>
                        <div className="flex items-center justify-center ">
                          <TimeIcon size={20} className="mr-1" />
                          2nd January,1990 - 22nd Dec, 2022
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

export default MourningNews;
