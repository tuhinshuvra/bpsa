import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  GetEventData,
  GetGalleryData,
  GetHighlight,
  GetHomeGalleryData,
  GetHomeNotice,
  GetHomeSlider,
  GetInternationalLink,
  GetLocalLink,
  GetMessages,
  GetSuccessStory,
} from "../api";
import CommonHead from "../Components/Common/CommonHead";
import Loader from "../Components/Common/Loader";
import NoticeLine from "../Components/Common/NoticeLine";
import GalleryComp from "../Components/HomeComponent/GalleryComp/GalleryComp";
import HeroSlider from "../Components/HomeComponent/HeroSlider/HeroSlider";
import HighlightComponent from "../Components/HomeComponent/HighlightComponent/HighlightComponent";
import QuicksLinks from "../Components/HomeComponent/QuicksLinks/QuicksLinks";
import SummaryComp from "../Components/HomeComponent/SummaryComp/SummaryComp";
import TestimonialComponent from "../Components/HomeComponent/TestimonialComponent/TestimonialComponent";
import UpcommingEvents from "../Components/HomeComponent/UpcommingEvents/UpcommingEvents";
import { dateFiltering } from "../utlis/DateFiltering";
import useTitle from "../hooks/useTitle";

const HomePage = () => {
  useTitle("Home");
  const [sliderData, setSliderData] = useState([]);
  const [sliderError, setSliderError] = useState("");
  const [sliderLoading, setSliderLoading] = useState(false);
  const [noticeData, setNoticeData] = useState([]);
  const [noticeError, setNoticeError] = useState("");
  const [noticeLoading, setNoticeLoading] = useState(false);
  const [hightLightData, setHightLightData] = useState([]);
  const [hightLightError, setHightLightError] = useState("");
  const [hightLightLoading, setHightLightLoading] = useState(false);
  const [eventData, setEventData] = useState([]);
  const [eventError, setEventError] = useState("");
  const [eventLoading, setEventLoading] = useState(false);
  const [galleryData, setGalleryData] = useState([]);
  const [galleryError, setGalleryError] = useState("");
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [successData, setSuccessData] = useState([]);
  const [successError, setSuccessError] = useState("");
  const [successLoading, setSuccessLoading] = useState(false);
  const [messageData, setMessageData] = useState([]);
  const [messageError, setMessageError] = useState("");
  const [messageLoading, setMessageLoading] = useState(false);
  const [localLink, setLocalLink] = useState([]);
  const [localError, setLocalError] = useState("");
  const [localLoading, setLocalLoading] = useState(false);
  const [internationalLink, setInternationalLink] = useState([]);
  const [internationalError, setInternationalError] = useState("");
  const [internationalLoading, setInternationalLoading] = useState(false);


  console.log("Quick Link localLink", localLink);
  console.log("Quick Link internationalLink", internationalLink);

  const getSliderData = async () => {
    try {
      setSliderLoading(true);
      const result = await GetHomeSlider();
      setSliderLoading(false);
      if (result?.status === "success") {
        setSliderData(result?.data?.slider);
      }
    } catch (error) {
      setSliderLoading(false);
      setSliderError("Something went wrong");
    }
  };

  const getHighLightData = async () => {
    try {
      setHightLightLoading(true);
      const result = await GetHighlight();
      setHightLightLoading(false);
      if (result?.status === "success") {
        const filterData = await dateFiltering(result?.data?.highlight);
        setHightLightData(filterData);
      }
    } catch (error) {
      setHightLightLoading(false);
      setHightLightError("Something went wrong");
    }
  };

  const getNoticeData = async () => {
    try {
      setNoticeLoading(true);
      const result = await GetHomeNotice();
      setNoticeLoading(false);
      if (result?.status === "success") {
        const filterData = await dateFiltering(result?.data?.notice);
        setNoticeData(filterData);
      }
    } catch (error) {
      setNoticeLoading(false);
      setNoticeError("Something went wrong");
    }
  };

  const getEventData = async () => {
    try {
      setEventLoading(true);
      const result = await GetEventData();
      setEventLoading(false);
      if (result?.status === "success") {
        setEventData(result?.data?.event);
      }
    } catch (error) {
      setEventLoading(false);
      setEventError("Something went wrong");
    }
  };

  const getGalleryData = async () => {
    try {
      setGalleryLoading(true);
      const result = await GetHomeGalleryData();
      setGalleryLoading(false);
      if (result?.status === "success") {
        setGalleryData(result?.data?.gallery);
      }
    } catch (error) {
      setGalleryLoading(false);
      setGalleryError("Something went wrong");
    }
  };

  const getSuccessStory = async () => {
    try {
      setSuccessLoading(true);
      const result = await GetSuccessStory();
      // console.log("Success Story data:", result);
      setSuccessLoading(false);
      if (result?.status === "success") {
        setSuccessData(result?.data?.success);
      }
    } catch (error) {
      setSuccessLoading(false);
      setSuccessError("Something went wrong");
    }
  };

  const getMessage = async () => {
    try {
      setMessageLoading(true);
      const result = await GetMessages();
      setMessageLoading(false);
      if (result?.status === "success") {
        setMessageData(result?.data?.massege);
      }
    } catch (error) {
      setMessageLoading(false);
      setMessageError("Something went wrong");
    }
  };

  const getLocalLinks = async () => {
    setLocalLoading(true);
    const result = await GetLocalLink();
    setLocalLoading(false);
    if (result?.status === "success") {
      setLocalLink(result?.data?.local);
    }
  };

  const getInternationalLinks = async () => {
    setInternationalLoading(true);
    const result = await GetInternationalLink();
    setInternationalLoading(false);
    if (result?.status === "success") {
      setInternationalLink(result?.data?.international);
    }
  };

  useEffect(() => {
    getSliderData();
    getNoticeData();
    getHighLightData();
    getEventData();
    getGalleryData();
    getSuccessStory();
    getMessage();
    getLocalLinks();
    getInternationalLinks();
  }, []);

  if (
    sliderLoading ||
    noticeLoading ||
    hightLightLoading ||
    eventLoading ||
    galleryLoading ||
    successLoading ||
    messageLoading ||
    localLoading ||
    internationalLoading
  ) {
    return <Loader />;
  }

  return (
    <div>
      <div className="relative w-full">
        <HeroSlider data={sliderData} />
        <div
          style={{ zIndex: 50 }}
          className="rounded-md absolute w-full mx-auto"
        >
          <h1 className="text-lg md:text-5xl p-2 text-center bg-main/70 w-fit text-white rounded-md block mx-auto md:leading-[70px] -mt-[43px]  md:-mt-[86px]">
            Bangladesh Police Service Association
          </h1>
        </div>
      </div>

      <NoticeLine data={noticeData} />


      <div className=' col-md-10 mx-auto'>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container pt-3 pb-5 ">
            <HighlightComponent data={hightLightData} />
            <TestimonialComponent data={messageData} />
            <SummaryComp data={successData} />

            <div className="bg-[#6e5ff7] py-3 rounded-2xl my-5">
              <QuicksLinks local={localLink} international={internationalLink} />
            </div>

            <GalleryComp data={galleryData} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
