import React from "react";
import { TimeIcon } from "../../assets/Icons/Icons";
import { dateFormatOne, formatDate } from "../../utlis/dateFormat";
import ImageComponent from "../Common/ImageComponent";
import ButtonComponent from "../Common/ButtonComponent";
import { BsCalendarDateFill } from 'react-icons/bs';

const NewsDetailsInfoComponent = ({ data }) => {
  // console.log(    "🚀 ~ file: NewsDetailsInfoComponent.js:6 ~ NewsDetailsInfoComponent ~ data",    data  );
  return (
    <div>
      <h4 className="">{data?.Heading}</h4>
      <div className="flex items-center space-x-2">
        <BsCalendarDateFill className="mr-1" />
        {formatDate(data?.Pub_Date)}
      </div>
      <ImageComponent
        image={data?.Cover_Photo}
        className="w-full md:h-[400px] object-contain rounded-md mt-4"
      />
      <div
        dangerouslySetInnerHTML={{ __html: data?.Details }}
        className="text-justify my-5"
      ></div>
      {data?.Document_Link && (
        <a href={data?.Document_Link} target="_blank" rel="noreferrer">
          <ButtonComponent
            className={"bg-second text-white px-4 py-2"}
            title="View Document"
          />
        </a>
      )}
    </div>
  );
};

export default NewsDetailsInfoComponent;
