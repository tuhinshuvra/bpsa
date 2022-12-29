import React, { useEffect, useState } from "react";
import {
  GetActivityUpdateData,
  GetCongratulationsAchievement,
  GetMourningNewsData,
  GetNewsData,
  GetNewsUpdateData,
} from "../api";
import HeroComponent1 from "../Components/Common/HeroComponent1";
import Loader from "../Components/Common/Loader";
import NoticeLine from "../Components/Common/NoticeLine";
import AchievementComponent from "../Components/NewsComponent/AchievementComponent";
import ActivityUpdate from "../Components/NewsComponent/ActivityUpdate";
import MourningNews from "../Components/NewsComponent/MourningNews";
import NewComp from "../Components/NewsComponent/NewComp";
import { dateFiltering } from "../utlis/DateFiltering";

const NewsPage = () => {
  const [newsData, setNewsData] = useState("");
  const [loading, setLoading] = useState(false);
  const [mourningNews, setMourningNews] = useState("");
  const [activityUpdate, setActivityUpdate] = useState("");
  const [achievement, setAchievement] = useState("");
  const [newsLine, setNewsLine] = useState("");

  const getNewsLine = async () => {
    setLoading(true);
    const result = await GetNewsUpdateData();

    setLoading(false);
    if (result?.status === "success") {
      setNewsLine(result?.data?.newsupdate);
    }
  };

  const getNews = async () => {
    setLoading(true);
    const result = await GetNewsData();

    setLoading(false);
    if (result?.status === "success") {
      // const filterNews = await dateFiltering(result?.data?.news);
      setNewsData(result?.data?.news);
    }
  };

  const getMourningNews = async () => {
    setLoading(true);
    const result = await GetMourningNewsData();

    setLoading(false);
    if (result?.status === "success") {
      // const filterMourning = await dateFiltering(result?.data?.news_morning);
      setMourningNews(result?.data?.news_morning);
    }
  };

  const getActivityUpdate = async () => {
    setLoading(true);
    const result = await GetActivityUpdateData();

    setLoading(false);
    if (result?.status === "success") {
      // const filterData = await dateFiltering(
      //   result?.data?.news_activity_Update
      // );

      setActivityUpdate(result?.data?.news_activity_Update);
    }
  };

  const getAchievement = async () => {
    setLoading(true);
    const result = await GetCongratulationsAchievement();

    setLoading(false);
    if (result?.status === "success") {
      // const filterData = await dateFiltering(
      //   result?.data?.news_congratulation_on_achievenemnt
      // );
      setAchievement(result?.data?.news_congratulation_on_achievenemnt);
    }
  };

  useEffect(() => {
    getNews();
    getMourningNews();
    getActivityUpdate();
    getAchievement();
    getNewsLine();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <HeroComponent1 title="NEWS" />
      <NoticeLine data={newsLine} />
      <NewComp data={newsData} />
      <ActivityUpdate data={activityUpdate} />
      <AchievementComponent data={achievement} />
      <MourningNews data={mourningNews} />
    </div>
  );
};

export default NewsPage;
