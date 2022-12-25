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

const TestimonialComponent = ({ data }) => {
  console.log(data);
  return (
    <div className="py-8">
      <HeadingComponent1
        first="Leadership "
        second="Message"
        className={`text-center text-main pb-4`}
      />

      <div className="grid md:grid-cols-3 gap-4 ">
        {data?.map((item, index) => {
          return (
            <div
              className={`${
                index === 1 ? "sm:order-1 md:order-2" : "order-2  md:order-none"
              } `}
            >
              <Card
                className={`${
                  index === 1 ? "  " : "md:mt-[50px]  md:order-none"
                } `}
                key={index}
                style={{ height: "fit-content" }}
              >
                <div>
                  <div className={Styles.container}>
                    <ImageComponent
                      image={item?.photo}
                      className={`w-full ${
                        index === 1 ? "h-[400px] " : "h-[400px] md:h-[350px]"
                      } object-fill block mx-auto rounded-t-md mb-3 ${
                        Styles.image
                      }`}
                    />

                    <div
                      className={`${
                        index === 1 ? "h-[400px] " : "h-[400px] md:h-[350px]"
                      }  ${Styles.middle}`}
                    >
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
                    <p className="text-sm">{item?.Official_designation}</p>
                    <p className="text-sm">{item?.BPSA_Designation}</p>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialComponent;
