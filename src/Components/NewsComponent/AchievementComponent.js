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
import Styles from "./Newscomponent.module.css";

const AchievementComponent = () => {
  return (
    <div className={Styles.achievementBg__style}>
      <Container>
        <div className="text-main text-center py-3 pt-5">
          <h5>Congratulation on </h5>
          <h2>Achievement</h2>
        </div>

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
                <div className="  p-4 text-main">
                  <Row>
                    <Col className="text-center " md={4}>
                      <div className="space-y-2">
                        <ImageComponent
                          image={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}
                          className="w-full md:w-[250px] h-[250px]  mb-1 object-cover rounded-lg mx-auto block"
                        />
                      </div>
                    </Col>
                    <Col className="" md={8}>
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

export default AchievementComponent;
