import React from "react";
import { useNavigate } from "react-router-dom";
import { TimeIcon } from "../../assets/Icons/Icons";
import img1 from "../../assets/Image/Gallery/Rectangle 1161.png";
import { dateFormatOne } from "../../utlis/dateFormat";
import ImageComponent from "../Common/ImageComponent";

const NewsCard2 = ({ imgHeight, heading, item }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate(`/news/${item?.id}`);
        }}
        className="relative w-full cursor-pointer space-y-1 mb-1 "
      >
        <ImageComponent
          image={item?.Cover_Photo}
          className={` ${imgHeight} w-full  object-cover rounded-md `}
        />

        <div className=" bottom-6 text-main  mt-2 ">
          <span className={`${heading} font-semibold `}>
            {item?.Heading.length > 65
              ? item?.Heading.slice(0, 65) + ".."
              : item?.Heading}
          </span>
          {item?.Pub_Date && (
            <div className="flex items-center">
              <TimeIcon className="mr-2" />
              {dateFormatOne(item?.Pub_Date)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard2;
