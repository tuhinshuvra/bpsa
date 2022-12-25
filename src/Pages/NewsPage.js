import React from "react";
import HeroComponent1 from "../Components/Common/HeroComponent1";
import NoticeLine from "../Components/Common/NoticeLine";
import ActivityUpdate from "../Components/NewsComponent/ActivityUpdate";
import MourningNews from "../Components/NewsComponent/MourningNews";
import NewComp from "../Components/NewsComponent/NewComp";

const NewsPage = () => {
  return (
    <div>
      <HeroComponent1 title="NEWS" />
      <NoticeLine />
      <NewComp />
      <MourningNews />
      <ActivityUpdate />
    </div>
  );
};

export default NewsPage;
