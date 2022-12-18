import React from "react";
import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[90vh]">
        <Dna
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>
  );
};

export default Loader;
