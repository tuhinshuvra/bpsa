import React from "react";

const HeadingComponentTwo = ({ title }) => {
  return (
    <div>
      <h5 className="text-main border-b-2 border-main w-fit pb-1 ">{title}</h5>
      <hr className="-mt-2" />
    </div>
  );
};

export default HeadingComponentTwo;
