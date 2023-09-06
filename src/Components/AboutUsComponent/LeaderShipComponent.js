import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../AboutUsComponent/AboutUs.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import { Paper } from "@mui/material";
import ImageComponent from "../Common/ImageComponent";
import { FbIcon, LinkedInIcon, TwitterIcon } from "../../utlis/icons";
import img1 from "../../assets/Image/messages/IGP_Image.jpeg";
import img2 from "../../assets/Image/messages/President_2021_Stamp.jpg";
import img3 from "../../assets/Image/messages/assaduzzaman.jpg";
import { GetLeadershipData } from "../../api";
import ButtonComponent from "../Common/ButtonComponent";

const LeaderShipComponent = () => {
  const [currenLeaderData, setCurrentLeaderData] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  const getFetchCurrenLeaderData = async () => {
    const result = await GetLeadershipData();

    if (result?.status === "success") {
      setCurrentLeaderData(result?.data?.leadership);
    }
  };

  useEffect(() => {
    getFetchCurrenLeaderData();
  }, []);

  return (
    <div className=" bg-success/50  py-1 rounded-2xl">
      <Container className="my-5">
        <HeadingComponent1
          first="Current  "
          second="Leadership"
          className="text-center pb-3 text-white mb-4"
        />

        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          // speed={2000}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {currenLeaderData &&
            currenLeaderData?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" border rounded-xl p-4">
                    <div className="row  ">
                      <div className="text-center col-lg-5 my-auto">
                        <ImageComponent
                          image={item?.photo}
                          className="w-[200px] h-[200px]  mx-auto mb-1 object-contain "
                        />
                        <p className="text-black text-md m-0 mb-2 ">
                          {item?.name}
                        </p>

                        <p className="text-black p-0 m-0">
                          {item?.Official_designation}
                        </p>
                        <span className="p-0 m-0 text-black">ও</span>
                        <p className="p-0 m-0 text-black">
                          {item?.BPSA_Designation.split(",")[0]}
                        </p>
                        <p className="p-0 m-0 text-black">
                          {item?.BPSA_Designation.split(",")[1]}
                        </p>
                        {/* <div className="flex items-center justify-center text-main space-x-3">
                        <FbIcon size={28} />
                        <LinkedInIcon size={28} />
                        <TwitterIcon size={28} />
                      </div> */}
                      </div>
                      <div className=" col-lg-7">
                        <div
                          className="text-justify d-lg-block d-none"
                          dangerouslySetInnerHTML={{ __html: seeMore ? item?.note : item?.note.slice(0, 1500) }}
                        ></div>

                        <div
                          className="text-justify d-lg-none "
                          dangerouslySetInnerHTML={{ __html: seeMore ? item?.note : item?.note.slice(0, 300) }}
                        ></div>

                        <div className=" text-center">
                          <ButtonComponent
                            onClick={() => setSeeMore(!seeMore)}
                            title={seeMore ? "See Less" : "See More"}
                            className="btn btn-primary btn-sm my-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </div >
  );
};

export default LeaderShipComponent;
