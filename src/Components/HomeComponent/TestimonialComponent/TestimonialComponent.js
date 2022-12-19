import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import ImageComponent from "../../Common/ImageComponent";
import Styles from "./TestimonialComponent.module.css";
import textImg from "../../../assets/Image/Home/Vector.png";
import ButtonComponent from "../../Common/ButtonComponent";
import HeadingComponent1 from "../../Common/HeadingComponent1";
import { Card } from "react-bootstrap";

const TestimonialData = [
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Dr. Benazir Ahmed, BPM (Bar)",
    title: "President",
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit omnis nihil molestias ad possimus ullam itaque atque dignissimos officia ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Dr. Benazir Ahmed, BPM (Bar)",
    title: "President",
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit omnis nihil molestias ad possimus ullam itaque atque dignissimos officia ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Dr. Benazir Ahmed, BPM (Bar)",
    title: "President",
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit omnis nihil molestias ad possimus ullam itaque atque dignissimos officia ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Dr. Benazir Ahmed, BPM (Bar)",
    title: "President",
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit omnis nihil molestias ad possimus ullam itaque atque dignissimos officia ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Dr. Benazir Ahmed, BPM (Bar)",
    title: "President",
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit omnis nihil molestias ad possimus ullam itaque atque dignissimos officia debitis officiis ",
  },
];

const TestimonialComponent = ({ data }) => {
  console.log(data);
  return (
    <div className="py-8">
      <HeadingComponent1
        first="Leadership "
        second="Message"
        className={`text-center text-main pb-4`}
      />
      {/* <Swiper
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
        {TestimonialData?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={Styles.container}>
                <ImageComponent
                  image={item?.image}
                  className={`w-full h-[300px] object-fill block mx-auto rounded-md mb-3 ${Styles.image}`}
                />

                <div className={Styles.middle}>
                  <div className={Styles.text}>
                    <ImageComponent
                      image={textImg}
                      className={`h-[40px] object-fill block mx-auto rounded-md pb-2`}
                    />
                    We are for the community. So our focus is on building
                    stronger trust with the community, and we consider the
                    responsible members of the community our most potential
                    weapons in the battle against all sorts of chaos and
                    criminality.
                  </div>
                  <ButtonComponent
                    title="See More"
                    className="border border-white px-2 py-1 text-sm text-white"
                  />
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="text-main font-semibold m-0">{item?.name}</p>
                <p className="text-sm">{item?.title}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
      <div className="grid md:grid-cols-4 gap-4">
        {data?.map((item, index) => {
          return (
            <Card key={index}>
              <div className={Styles.container}>
                <ImageComponent
                  image={item?.photo}
                  className={`w-full h-[300px] object-fill block mx-auto rounded-t-md mb-3 ${Styles.image}`}
                />

                <div className={Styles.middle}>
                  <div className={Styles.text}>
                    <ImageComponent
                      image={textImg}
                      className={`h-[40px] object-fill block mx-auto rounded-md pb-2`}
                    />
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          item?.note.length > 280
                            ? item?.note.slice(0, 280) + ".."
                            : item?.note,
                      }}
                      className="text-sm"
                    ></div>
                  </div>
                  <ButtonComponent
                    title="See More"
                    className="border border-white px-2 py-1 text-sm text-white"
                  />
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="text-main font-semibold m-0">{item?.name}</p>
                <p className="text-sm">{item?.title}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialComponent;
