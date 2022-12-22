import { Pagination } from "@mui/material";
import React from "react";

const PaginationComponent = ({ pageNumber, handleChange,count }) => {
  // const handleChange = (event, value) => {
  //   setPage(value);
  // };

  return (
    <div>
      <Pagination count={count} page={pageNumber} onChange={handleChange} />
    </div>
  );
};

export default PaginationComponent;
