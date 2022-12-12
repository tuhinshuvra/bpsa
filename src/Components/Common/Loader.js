import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[90vh]">
        <RotatingLines
          height="80"
          width="80"
          strokeColor="#E7581A"
          visible={true}
          strokeWidth="5"
          animationDuration="1.95"
        />
      </div>
    </div>
  );
};

export default Loader;
