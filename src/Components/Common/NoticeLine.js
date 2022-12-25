import React, { useState } from "react";
import noticeImg from "../../assets/Image/Home/Group 1000001013.png";
import ImageComponent from "./ImageComponent";
import Marquee from "react-fast-marquee";
import { GetHomeNotice } from "../../api";
import Loader from "./Loader";

const NoticeLine = ({ data }) => {
  const [noticeData, setNoticeData] = useState([]);
  const [noticeError, setNoticeError] = useState("");
  const [noticeLoading, setNoticeLoading] = useState(false);

  const getNoticeData = async () => {
    try {
      setNoticeLoading(true);
      const result = await GetHomeNotice();
      setNoticeLoading(false);
      if (result?.status === "success") {
        setNoticeData(result?.data?.notice);
      }
    } catch (error) {
      setNoticeLoading(false);
      setNoticeError("Something went wrong");
    }
  };

  useState(() => {
    getNoticeData();
  }, []);

  if (noticeLoading) {
    return <Loader />;
  }

  return (
    <div className="p-3 flex items-center space-x-4 bg-second">
      <ImageComponent image={noticeImg} className="w-[140px] object-contain" />
      <Marquee speed={60} gradient={false}>
        {noticeData &&
          noticeData?.map((item, index) => {
            return (
              <div
                key={index}
                className={`bg-green-500  ${
                  index % 2 == 0 ? "text-second" : "text-main"
                }`}
              >
                <span className="text-2xl font-bold text-second mx-1">.</span>{" "}
                {item?.Heading}{" "}
              </div>
            );
          })}
      </Marquee>
    </div>
  );
};

export default NoticeLine;
