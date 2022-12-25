import React from "react";
import { TimeIcon } from "../../assets/Icons/Icons";
import img1 from "../../assets/Image/Gallery/Rectangle 1161.png";
import ImageComponent from "../Common/ImageComponent";

const NewsCard2 = ({ imgHeight, heading }) => {
  return (
    <div>
      <div className="relative w-full cursor-pointer ">
        <ImageComponent
          image={img1}
          className={` ${imgHeight} w-full  object-cover rounded-md text-main`}
        />

        <div className=" bottom-6 text-main px-2 space-y-2 ">
          <p className={`${heading} font-semibold  m-0`}>
            Taina Blue Retreat is a Converted Tower on the Greek Coast
          </p>
          <div className="flex items-center">
            <TimeIcon className="mr-2" />
            23 Mar, 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard2;
