import React, { useState } from "react";
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
          className={"text-white  pl-5 text-center "}
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
                  <div className="  px-4 py-1 text-white">
                    <div className=" d-flex flex-column justify-content-center align-items-center">

                      <div className="order-2 md:order-2 col-lg-10">
                        <div className=" d-flex flex-column justify-content-center align-items-center">
                          <h4 className=" mt-2">{item?.Heading}</h4>
                          <div className="flex mb-2    ">
                            <TimeIcon size={20} className="mr-1" />
                            {dateFormatOne(item?.Pub_Date)}
                          </div>
                          <p dangerouslySetInnerHTML={{ __html: item?.Details, }} className="text-sm my-0"></p>

                        </div>
                      </div>

                      <div className=" d-lg-flex  text-center sm:order-1 md:order-2 col-lg-10 mt-lg-3">
                        <div className=" col-lg-6">
                          <img src={item?.Cover_Photo} className="w-full md:w-[300px] h-[400px]  mb-1 object-cover rounded-lg mx-auto block" alt="..." />
                        </div>
                        <div className=" col-lg-6 my-auto">
                          <p dangerouslySetInnerHTML={{ __html: item?.Sub_Heading, }} className="text-sm mb-0"></p>
                        </div>
                      </div>

                    </div>
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
