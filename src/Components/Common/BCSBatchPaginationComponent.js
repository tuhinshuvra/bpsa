import { Pagination } from "@mui/material";
import React from "react";

const BCSBatchPaginationComponent = ({
  pageNumber,
  handleChange,
  count,
  className,
  start,
  end,
  total,
  isShow,
}) => {
  // const handleChange = (event, value) => {
  //   setPage(value);
  // };

  return (
    <div className={`${className} flex-col md:flex-row`}>
      {isShow && (
        <div className="">
          Showing {start + 1} to {total >= end ? end : total} of {total} entires
        </div>
      )}

      <Pagination count={count} page={pageNumber} onChange={handleChange} />
    </div>
  );
};

export default BCSBatchPaginationComponent;
