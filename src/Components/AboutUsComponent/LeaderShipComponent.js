import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const LeaderShipComponent = () => {
  const [currenLeaderData, setCurrentLeaderData] = useState([]);

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
    <div>
      <Container className="my-5">
        <HeadingComponent1
          first="Current  "
          second="Leadership"
          className="text-center pb-3 text-main mb-4"
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
                  <div className=" border p-4">
                    <Row>
                      <Col className="text-center" md={5}>
                        <ImageComponent
                          image={item?.photo}
                          className="w-[200px] h-[200px] block mx-auto mb-1 object-contain"
                        />
                        <p className="text-main text-md m-0 mb-2 ">
                          {item?.name}
                        </p>

                        <p className="text-second p-0 m-0">
                          {item?.Official_designation}
                        </p>
                        <span className="p-0 m-0 text-second">ও</span>
                        <p className="p-0 m-0 text-second">
                          {item?.BPSA_Designation.split(",")[0]}
                        </p>
                        <p className="p-0 m-0 text-second">
                          {item?.BPSA_Designation.split(",")[1]}
                        </p>
                        {/* <div className="flex items-center justify-center text-main space-x-3">
                        <FbIcon size={28} />
                        <LinkedInIcon size={28} />
                        <TwitterIcon size={28} />
                      </div> */}
                      </Col>
                      <Col md={7}>
                        {/* <h6 className="text-main font-semibold text-center">
                          {item?.BPSA_Designation}
                        </h6>
                        <h6 className="text-main font-semibold text-center">
                          কেন্দ্রীয় কার্যনির্বাহী কমিটি-২০২১
                        </h6>
                        <h6 className="text-main font-semibold text-center">
                          বাংলাদেশ পুলিশ সার্ভিস অ্যাসোসিয়েশন
                        </h6> */}
                        <div
                          className="text-justify"
                          dangerouslySetInnerHTML={{ __html: item?.note }}
                        ></div>
                      </Col>
                    </Row>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </div>
  );
};

export default LeaderShipComponent;
