import React from "react";
import ImageComponent from "./ImageComponent";

const HeadingComponent1 = ({ first, second, className }) => {
  return (
    <div className="">
      <h2 className={`${className} tracking-wider`}>
        <span className="font-thin"> {first}</span>
        <span className="font-semibold">{second}</span>{" "}
      </h2>
    </div>
  );
};

export default HeadingComponent1;
