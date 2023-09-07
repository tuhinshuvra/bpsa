import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetGalleryData, GetVideosData } from "../api";
import CommonHead from "../Components/Common/CommonHead";
import Loader from "../Components/Common/Loader";
import GalleryComponent from "../Components/GalleryComponent/GalleryComponent";
import { getGalleryCategory } from "../redux/gallery/galleryAction";
import useTitle from "../hooks/useTitle";

const GalleryPage = () => {
  useTitle("Gallary")
  const dispatch = useDispatch();

  const [galleryData, setGalleryData] = useState([]);
  const [galleryError, setGalleryError] = useState("");
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [videoData, setVideoData] = useState([]);

  console.log("galleryData", galleryData);
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

  const getVideoData = async () => {
    const result = await GetVideosData();
    setVideoData(result?.data?.video);
    // console.log("🚀 ~ file: GalleryPage.js:32 ~ getVideoData ~ result", result);
  };

  useEffect(() => {
    getGalleryData();
    dispatch(getGalleryCategory());
    getVideoData();
  }, [dispatch]);

  if (galleryLoading) {
    return <Loader />;
  }
  return (
    <div>
      <GalleryComponent data={galleryData} video={videoData} />
    </div>
  );
};

export default GalleryPage;
