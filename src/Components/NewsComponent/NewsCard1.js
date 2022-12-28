import React from "react";
import { TimeIcon } from "../../assets/Icons/Icons";
import img1 from "../../assets/Image/Gallery/Rectangle 1161.png";
import ImageComponent from "../Common/ImageComponent";

const NewsCard1 = ({ className, item }) => {
  return (
    <div className="relative w-full cursor-pointer ">
      <ImageComponent
        image={item?.Cover_Photo}
        className={`w-full ${className} object-cover rounded-md text-main`}
      />
      <div
        className={`absolute w-full bg-main/40 top-0 ${className} rounded-md`}
      >
        <div className="absolute bottom-6 text-white px-6 space-y-2 ">
          <p className="font-semibold text-lg">{item?.Heading}</p>
          {item?.End_Date && (
            <div className="flex items-center">
              <TimeIcon className="mr-2" />
              {item?.End_Date}
            </div>
          )}
        </div>
        <div className="absolute top-5 left-5 bg-green-600 text-white rounded-full px-2 py-1">
          {item?.Category}
        </div>
      </div>
    </div>
  );
};

export default NewsCard1;
