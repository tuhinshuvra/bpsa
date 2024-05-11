import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeadingComponent1 from "../Common/HeadingComponent1";
// import required modules
import { Keyboard, Mousewheel, Navigation } from "swiper";
import { BsCalendarDateFill } from 'react-icons/bs';
import { formatDate } from "../../utlis/dateFormat";
import { useNavigate } from "react-router";
import './Newscomponent.module.css'

const MourningNews = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="my-5">
      {/* <Container className="bg-success/90   md:p-5  rounded-2xl"> */}
      <div>
        <HeadingComponent1
          first={"Mourning "}
          second="News"
          className={" bg-[#E2E3E7] rounded-t-2xl  text-center py-3 mb-0"}
        />

        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className=" mySwiper  bg-white    rounded-b-2xl"
        >
          {data &&
            data?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className="px-4  text-white"
                    onClick={() => { navigate(`/news/${item?.id}`) }}
                  >
                    <div className=" col-lg-11 mx-auto bg-white  h-[40vh] px-4 py-3  text-black  d-flex flex-column justify-content-center align-items-center">

                      <div className="col-12 d-lg-flex justify-content-between    ">
                        <p className=" fw-bold mb-2 p-1   col-lg-10">{item?.Heading}।</p>
                        <div className="d-flex align-items-center col-lg-2">
                          <div className=" d-flex ms-2 ">
                            <BsCalendarDateFill size={16} className="mr-1" />
                            <span className=""> {formatDate(item?.Pub_Date)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 d-lg-flex justify-content-between  ">
                        <img src={item?.Cover_Photo} className="w-full  md:w-[120px] h-[150px]  mb-1 object-cover border   block" alt="..." />
                        <div className=" my-auto ms-3">
                          <p dangerouslySetInnerHTML={{ __html: item?.Sub_Heading, }} className="text-sm mb-0 text-black "></p>
                        </div>
                      </div>


                      {/* <div className="d-lg-flex justify-content-between   sm:order-1 md:order-2 ">
                        <img src={item?.Cover_Photo} className="w-full md:w-[160px] h-[200px]  mb-1 object-cover rounded-lg   block" alt="..." />
                        <div className="   my-auto">
                          <p dangerouslySetInnerHTML={{ __html: item?.Sub_Heading, }} className="text-sm mb-0"></p>
                        </div>
                      </div> */}

                    </div>
                  </div>

                </SwiperSlide>
              );
            })}
        </Swiper>

      </div>
      {/* </Container> */}
    </div>
  );
};

export default MourningNews;
