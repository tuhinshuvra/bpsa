import { Pagination } from "@mui/material";
import React from "react";

const PaginationComponent = ({
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
    <div className={className}>
      {isShow && (
        <div className="">
          Showing {start + 1} to {end} of {total} entires
        </div>
      )}

      <Pagination count={count} page={pageNumber} onChange={handleChange} />
    </div>
  );
};

export default PaginationComponent;
