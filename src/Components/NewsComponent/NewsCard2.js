import React from "react";
import { useNavigate } from "react-router-dom";
import { TimeIcon } from "../../assets/Icons/Icons";
import img1 from "../../assets/Image/Gallery/Rectangle 1161.png";
import { formatDate } from "../../utlis/dateFormat";
import ImageComponent from "../Common/ImageComponent";
import { BsCalendarDateFill } from 'react-icons/bs';

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
          className={` ${imgHeight} w-full  object-cover   `}
        />

        <div className=" bottom-6   mt-2 ">
          <span className={`${heading} font-semibold text-main `}>
            {item?.Heading.length > 65
              ? item?.Heading.slice(0, 65) + ".."
              : item?.Heading}
          </span>
          {item?.Pub_Date && (
            <div className="flex">
              <BsCalendarDateFill className="mr-1" />
              <span className=" text-sm"> {formatDate(item?.Pub_Date)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard2;
