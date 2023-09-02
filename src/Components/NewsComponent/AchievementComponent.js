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
import { useNavigate } from "react-router-dom";

const AchievementComponent = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className=" my-5">
      <HeadingComponent1
        first={"Congratulation On "}
        second={"Achievement"}
        className={"text-white bg-main/70 rounded-t-2xl  text-center py-3 mb-0 "}
      />

      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper  bg-second/50    rounded-b-2xl py-3 px-3"
      >
        {data &&
          data?.map((item, index) => {
            return (
              <SwiperSlide key={index} onClick={() => {
                navigate("/news/" + item?.id);
              }}  >
                <div className="   text-black cursor-pointer">
                  <Row

                  >
                    <div className="text-center col-lg-4">
                      <div className=" ">
                        <ImageComponent
                          image={item?.Cover_Photo}
                          className="w-full md:w-[400px] h-[230px]  mb-1 object-cover rounded-lg mx-auto block"
                        />
                      </div>
                    </div>
                    <div className="text-center col-lg-8 my-auto pe-lg-5 py-lg-0 py-3">
                      <div className=" d-flex flex-column    ">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.Sub_Heading,
                          }}
                          className="text-justify"
                        >
                        </div>

                        <div
                          dangerouslySetInnerHTML={{ __html: item?.Details }}
                          className="text-justify"
                        ></div>

                      </div>
                    </div>
                  </Row>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>

    </div>
  );
};

export default AchievementComponent;
