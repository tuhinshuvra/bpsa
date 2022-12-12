import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg from "../../../assets/Image/Slider/Rectangle 1136.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import ImageComponent from "../../Common/ImageComponent";

export default function HeroSlider({ data }) {
  return (
    <div style={{ marginTop: "-90px" }}>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {data &&
          data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative ">
                  {" "}
                  <ImageComponent
                    image={item?.image}
                    className="h-[600px] w-full object-cover"
                  />{" "}
                  <div className="bg-gradient-to-b from-[#222C8C]/50 to-[#222C8C]/0 absolute top-0 w-full h-full">
                    <div className="absolute  bottom-[0%] text-center mx-auto w-full text-white">
                      <div className="rounded-md  bg-main w-fit mx-auto">
                        <h1 className="text-5xl p-3  leading-[70px]">
                          Bangladesh Police Service Association
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
