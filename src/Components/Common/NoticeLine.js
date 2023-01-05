import React, { useState } from "react";
import noticeImg from "../../assets/Image/Home/Group 1000001013.png";
import ImageComponent from "./ImageComponent";
import Marquee from "react-fast-marquee";
import { GetHomeNotice } from "../../api";
import Loader from "./Loader";
import { ArrowRightIcon } from "../../utlis/icons";
import { useNavigate } from "react-router-dom";

const NoticeLine = ({ data }) => {
  const navigate = useNavigate();
  // const [noticeData, setNoticeData] = useState([]);
  // const [noticeError, setNoticeError] = useState("");
  // const [noticeLoading, setNoticeLoading] = useState(false);

  // const getNoticeData = async () => {
  //   try {
  //     setNoticeLoading(true);
  //     const result = await GetHomeNotice();
  //     setNoticeLoading(false);
  //     if (result?.status === "success") {
  //       setNoticeData(result?.data?.notice);
  //     }
  //   } catch (error) {
  //     setNoticeLoading(false);
  //     setNoticeError("Something went wrong");
  //   }
  // };

  // useState(() => {
  //   getNoticeData();
  // }, []);

  // if (noticeLoading) {
  //   return <Loader />;
  // }

  return (
    <div className="p-2 md:p-3 flex items-center space-x-2 md:space-x-4 bg-main">
      <span className="text-white md:tracking-widest font-semibold text-xs md:text-[16px]">
        LATEST
      </span>
      {/* <ImageComponent image={noticeImg} className="w-[140px] object-contain" /> */}
      <Marquee pauseOnHover={true} speed={14} gradient={false}>
        {data &&
          data?.map((item, index) => {
            return (
              <div
                onClick={() => navigate(`/news/${item?.id}`)}
                key={index}
                className={`bg-main flex items-center  cursor-pointer ${
                  index % 2 === 0 ? "text-white" : "text-white"
                }`}
              >
                <span className="  text-white mx-4">
                  {/* <ArrowRightIcon /> */} |
                </span>{" "}
                {item?.Heading}{" "}
              </div>
            );
          })}
      </Marquee>
    </div>
  );
};

export default NoticeLine;
