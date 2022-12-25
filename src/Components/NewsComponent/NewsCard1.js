import React from "react";
import { TimeIcon } from "../../assets/Icons/Icons";
import img1 from "../../assets/Image/Gallery/Rectangle 1161.png";
import ImageComponent from "../Common/ImageComponent";

const NewsCard1 = ({ className }) => {
  return (
    <div className="relative w-full cursor-pointer ">
      <ImageComponent
        image={img1}
        className="w-full h-[300px] object-cover rounded-md text-main"
      />
      <div className="absolute w-full bg-main/40 top-0 h-[300px] rounded-md">
        <div className="absolute bottom-6 text-white px-6 space-y-2 ">
          <p className="font-semibold text-lg">
            Taina Blue Retreat is a Converted Tower on the Greek Coast
          </p>
          <div className="flex items-center">
            <TimeIcon className="mr-2" />
            23 Mar, 2022
          </div>
        </div>
        <div className="absolute top-5 left-5 bg-green-600 text-white rounded-full px-2 py-1">
          Entertainment
        </div>
      </div>
    </div>
  );
};

export default NewsCard1;
