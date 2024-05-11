import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";

export default function EventSlider({ data }) {
  return (
    <div id="eventSlider">
      <Swiper
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={30}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        breakpoints={{
          140: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {data &&
          data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className=" flex space-x-2 bg-white shadow-sm border p-3">
                  <h1 className="text-main font-semibold text-6xl -mt-2">
                    0{index + 1}
                  </h1>
                  <div className="">
                    <h6 className="text-main">{item?.title}</h6>
                    <p className="text-sm text-justify">
                      {item?.description.slice(0, 100)}
                    </p>
                    <p className="text-main border-b-2 w-fit border-main font-semibold cursor-pointer">
                      Read more
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
