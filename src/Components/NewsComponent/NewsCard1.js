import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCalendarDateFill } from 'react-icons/bs';
import { dateFormatOne } from "../../utlis/dateFormat";
import ImageComponent from "../Common/ImageComponent";

const NewsCard1 = ({ className, item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/news/${item?.id}`);
      }}
      className="relative w-full cursor-pointer "
    >
      <ImageComponent
        image={item?.Cover_Photo}
        className={`w-full ${className} object-cover   text-main`}
      />
      <div
        className={`absolute w-full bg-black/70 top-0 ${className}  `}
      >
        <div className="absolute bottom-6 text-white px-6 space-y-2 ">
          <p className="font-semibold ">
            {item?.Heading.length > 70
              ? item?.Heading.slice(0, 70) + ".."
              : item?.Heading}
          </p>

          <div className="flex items-center">
            <BsCalendarDateFill className="mr-2" />
            {dateFormatOne(item?.Pub_Date)}
          </div>
        </div>
        {/* <div className="absolute top-5 left-5 bg-green-600 text-white rounded-full px-2 py-1">
          {item?.Category}
        </div> */}
      </div>
    </div>
  );
};

export default NewsCard1;
