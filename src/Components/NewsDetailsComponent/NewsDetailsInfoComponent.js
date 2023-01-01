import React from "react";
import { TimeIcon } from "../../assets/Icons/Icons";
import { dateFormatOne } from "../../utlis/dateFormat";
import ImageComponent from "../Common/ImageComponent";

const NewsDetailsInfoComponent = ({ data }) => {
  console.log(
    "🚀 ~ file: NewsDetailsInfoComponent.js:6 ~ NewsDetailsInfoComponent ~ data",
    data
  );
  return (
    <div>
      <h4 className="text-main">{data?.Heading}</h4>
      <div className="flex items-center space-x-2">
        <TimeIcon />
        {dateFormatOne(data?.Pub_Date)}
      </div>
      <ImageComponent
        image={data?.Cover_Photo}
        className="w-full h-[300px] object-cover rounded-md"
      />
      <div
        dangerouslySetInnerHTML={{ __html: data?.Details }}
        className="text-justify my-5"
      ></div>
    </div>
  );
};

export default NewsDetailsInfoComponent;
