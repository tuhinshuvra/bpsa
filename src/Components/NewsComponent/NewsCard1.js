import React from "react";
import { useNavigate } from "react-router-dom";
import { TimeIcon } from "../../assets/Icons/Icons";
import img1 from "../../assets/Image/Gallery/Rectangle 1161.png";
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
        className={`w-full ${className} object-cover rounded-md text-main`}
      />
      <div
        className={`absolute w-full bg-main/40 top-0 ${className} rounded-md`}
      >
        <div className="absolute bottom-6 text-white px-6 space-y-2 ">
          <p className="font-semibold ">
            {item?.Heading.length > 70
              ? item?.Heading.slice(0, 70) + ".."
              : item?.Heading}
          </p>

          <div className="flex items-center">
            <TimeIcon className="mr-2" />
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
