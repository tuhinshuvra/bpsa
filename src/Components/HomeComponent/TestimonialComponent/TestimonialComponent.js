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
import { useNavigate } from "react-router-dom";

const TestimonialComponent = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className=" bg-blue-600/70 py-5 rounded-2xl ">
      <HeadingComponent1
        first="Leadership "
        second="Message"
        className={`text-center text-white pb-4`}
      />

      <div className="col-11 mx-auto  grid md:grid-cols-3 gap-10 ">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className={`${index === 1 ? "sm:order-1 md:order-2" : "order-2  md:order-none"
                } `}
            >
              <Card
                onClick={() => navigate(`/message/${item?.id}`)}
                className={`${index === 1
                  ? " cursor-pointer "
                  : "md:mt-[50px]  md:order-none cursor-pointer"
                  } `}
                key={index}
                style={{ height: "fit-content" }}
              >
                <div>
                  <div className={Styles.container}>
                    <ImageComponent
                      image={item?.photo}
                      className={`w-full ${index === 1 ? "h-[400px] " : "h-[400px] md:h-[350px]"}
                       object-contain block mx-auto mb-3 ${Styles.image} `}
                    />

                    <div
                      className={`${index === 1 ? "h-[400px] " : "h-[400px] md:h-[350px]"}  ${Styles.middle}`}
                    >
                      <div className={Styles.text}>
                        <ImageComponent
                          image={textImg}
                          className={`h-[40px] object-fill block mx-auto rounded-md pb-2`}
                        />
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.note,
                          }}
                          className="text-sm max-h-[200px] overflow-hidden"
                        ></div>
                      </div>
                      <ButtonComponent
                        onClick={() => navigate(`/message/${item?.id}`)}
                        title="See More"
                        className="border border-white px-2 py-1 text-sm text-white"
                      />
                    </div>
                  </div>
                  <div className="text-center flex flex-col  p-2">
                    <p className="text-main font-semibold m-0 text-md leading-6 h-[50px] overflow-clip pb-1">
                      {item?.name}
                    </p>
                    <span className="text-sm p-0 m-0">
                      {item?.Official_designation}
                    </span>
                    <span className="p-0 m-0">ও</span>
                    <span className="text-sm">
                      {item?.BPSA_Designation.split(",")[0]}
                    </span>
                    <span className="text-sm">
                      {item?.BPSA_Designation.split(",")[1]}
                    </span>
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
