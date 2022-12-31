import React from "react";
import CommitteeComponent from "../Components/CommitteeComponent/CommitteeComponent";
import CommonHead from "../Components/Common/CommonHead";

const CommitteePage = () => {
  return (
    <div>
      <CommonHead title="Committee" />
      <CommitteeComponent />
    </div>
  );
};

export default CommitteePage;
