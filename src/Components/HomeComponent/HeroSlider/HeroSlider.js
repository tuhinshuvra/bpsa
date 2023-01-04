import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import ImageComponent from "../../Common/ImageComponent";

export default function HeroSlider({ data }) {
  console.log("🚀 ~ file: HeroSlider.js:14 ~ HeroSlider ~ data", data);
  return (
    <div style={{ marginTop: "-90px", zIndex: 10 }}>
      <Swiper
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        speed={2000}
        loop={true}
        modules={[ Navigation]}
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
                    className="h-[300px] md:h-[600px] w-full object-cover"
                  />{" "}
                  <div className="">
                    <div className="absolute top-[62%]  md:top-[78%] text-center mx-auto w-full text-white">
                      <div className="   ">
                        {/* <h3 className="text-lg md:text-xl rounded-md max-w-[842px] mx-auto p-1 px-2 bg-main/70 mb-2 ">
                          {item?.title}
                        </h3> */}
                        {/* <p className="text-sm md:text-lg px-3 py-1 bg-main/70 rounded-md  w-fit mx-auto ">
                          {item?.description}
                        </p> */}
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
