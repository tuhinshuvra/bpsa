import React from "react";
import { TimeIcon } from "../../assets/Icons/Icons";
import img1 from "../../assets/Image/Gallery/Rectangle 1161.png";
import { dateFormatOne } from "../../utlis/dateFormat";
import ImageComponent from "../Common/ImageComponent";

const NewsCard2 = ({ imgHeight, heading, item }) => {
  return (
    <div>
      <div className="relative w-full cursor-pointer ">
        <ImageComponent
          image={item?.Cover_Photo}
          className={` ${imgHeight} w-full  object-cover rounded-md text-main`}
        />

        <div className=" bottom-6 text-main px-2 space-y-2 mt-4 ">
          <p className={`${heading} font-semibold  m-0`}>{item?.Heading}</p>
          {item?.End_Date && (
            <div className="flex items-center">
              <TimeIcon className="mr-2" />
              {dateFormatOne(item?.End_Date)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard2;
