import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[90vh]">
        <ThreeDots
          visible={true}
          height="100"
          width="100"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          color="#E82632"
        />
      </div>
    </div>
  );
};

export default Loader;
