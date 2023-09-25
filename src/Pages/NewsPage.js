import React, { useEffect, useState } from "react";
import {
  GetActivityUpdateData,
  GetCongratulationsAchievement,
  GetMourningNewsData,
  GetNewsData,
  GetNewsUpdateData,
} from "../api";
import Loader from "../Components/Common/Loader";
import NoticeLine from "../Components/Common/NoticeLine";
import AchievementComponent from "../Components/NewsComponent/AchievementComponent";
import ActivityUpdate from "../Components/NewsComponent/ActivityUpdate";
import MourningNews from "../Components/NewsComponent/MourningNews";
import NewComp from "../Components/NewsComponent/NewComp";
import { dateFiltering } from "../utlis/DateFiltering";
import useTitle from "../hooks/useTitle";

const NewsPage = () => {
  useTitle("News")
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
    <div className=' col-md-10 mx-auto'>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container pt-3 pb-5 ">
          <nav aria-label="" className="bg-light rounded-3 p-2 mb-4">
            <h2 className='fw-bold text-center'>NEWS</h2>
          </nav>

          <div>
            <NoticeLine data={newsLine} />
            <NewComp data={newsData} />
            <ActivityUpdate data={activityUpdate} />
            <AchievementComponent data={achievement} />
            <MourningNews data={mourningNews} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
