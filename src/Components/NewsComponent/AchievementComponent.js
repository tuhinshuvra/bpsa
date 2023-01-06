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
import HeadingComponentTwo from "../Common/HeadingComponentTwo";

const AchievementComponent = ({ data }) => {
  return (
    <div className=" mb-5">
      <div className={Styles.achievementBg__style}>
        <Container>
          <HeadingComponent1
            first={"Congratulation On "}
            second={"Achievement"}
            className="text-main text-center py-4"
          />
          {/* <div className="text-main text-center py-3 pt-5">
          <h5>Congratulation on </h5>
          <h2>Achievement</h2>
        </div> */}

          <Swiper
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            loop={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {data &&
              data?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="  p-4 text-main">
                      <Row>
                        <Col className="text-center " md={4}>
                          <div className="space-y-2">
                            <ImageComponent
                              image={item?.Cover_Photo}
                              className="w-full md:w-[250px] h-[250px]  mb-1 object-cover rounded-lg mx-auto block"
                            />
                          </div>
                        </Col>
                        <Col className="" md={8}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.Sub_Heading,
                            }}
                            className="text-justify"
                          ></div>{" "}
                          <br />
                          <div
                            dangerouslySetInnerHTML={{ __html: item?.Details }}
                            className="text-justify"
                          ></div>
                        </Col>
                      </Row>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Container>
      </div>
    </div>
  );
};

export default AchievementComponent;
