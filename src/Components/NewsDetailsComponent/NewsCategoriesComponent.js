import React from "react";
import HeadingComponentTwo from "../Common/HeadingComponentTwo";

const NewsCategoriesComponent = () => {
  return (
    <div className="mb-4">
      <HeadingComponentTwo title={"Category"}></HeadingComponentTwo>
      <ul className="m-0 p-0 space-y-2">
        <li>News</li>
        <li>Mourning News</li>
        <li>Activity News</li>
      </ul>
    </div>
  );
};

export default NewsCategoriesComponent;
