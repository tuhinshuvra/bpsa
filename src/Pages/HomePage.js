import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  GetEventData,
  GetGalleryData,
  GetHighlight,
  GetHomeNotice,
  GetHomeSlider,
} from "../api";
import Loader from "../Components/Common/Loader";
import NoticeLine from "../Components/Common/NoticeLine";
import GalleryComp from "../Components/HomeComponent/GalleryComp/GalleryComp";
import HeroSlider from "../Components/HomeComponent/HeroSlider/HeroSlider";
import HighlightComponent from "../Components/HomeComponent/HighlightComponent/HighlightComponent";
import QuicksLinks from "../Components/HomeComponent/QuicksLinks/QuicksLinks";
import SummaryComp from "../Components/HomeComponent/SummaryComp/SummaryComp";
import TestimonialComponent from "../Components/HomeComponent/TestimonialComponent/TestimonialComponent";
import UpcommingEvents from "../Components/HomeComponent/UpcommingEvents/UpcommingEvents";

const HomePage = () => {
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

  const getSliderData = async () => {
    try {
      setSliderLoading(true);
      const result = await GetHomeSlider();
      setSliderLoading(false);
      if (result?.data?.status === "success") {
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
        setHightLightData(result?.data?.highlight);
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
        setNoticeData(result?.data?.notice);
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
      const result = await GetGalleryData();
      setGalleryLoading(false);
      if (result?.status === "success") {
        setGalleryData(result?.data?.gallery);
      }
    } catch (error) {
      setGalleryLoading(false);
      setGalleryError("Something went wrong");
    }
  };

  useEffect(() => {
    getSliderData();
    getNoticeData();
    getHighLightData();
    getEventData();
    getGalleryData();
  }, []);

  if (
    sliderLoading ||
    noticeLoading ||
    hightLightLoading ||
    eventLoading ||
    galleryLoading
  ) {
    return <Loader />;
  }

  console.log("noticeData", noticeData);
  console.log("hightLightData", hightLightData);
  console.log("eventData", eventData);
  return (
    <div>
      <HeroSlider data={sliderData} />
      <NoticeLine data={noticeData} />
      <Container>
        <HighlightComponent data={hightLightData} />
        <UpcommingEvents data={eventData} />
      </Container>

      <div className="bg-[#EFF0FC] py-5">
        <QuicksLinks />
      </div>
      <Container>
        <TestimonialComponent />
      </Container>
      <SummaryComp />
      <GalleryComp data={galleryData} />
    </div>
  );
};

export default HomePage;
