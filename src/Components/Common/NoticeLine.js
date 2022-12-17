import React from "react";
import noticeImg from "../../assets/Image/Home/Group 1000001013.png";
import ImageComponent from "./ImageComponent";
import Marquee from "react-fast-marquee";

const NoticeLine = ({ data }) => {
  return (
    <div className="p-3 flex items-center space-x-4 bg-second">
      <ImageComponent image={noticeImg} className="w-[140px] object-contain" />
      <Marquee speed={60} gradient={false}>
        {data &&
          data?.map((item, index) => {
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
