import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetGalleryData } from "../api";
import CommonHead from "../Components/Common/CommonHead";
import Loader from "../Components/Common/Loader";
import GalleryComponent from "../Components/GalleryComponent/GalleryComponent";
import { getGalleryCategory } from "../redux/gallery/galleryAction";

const GalleryPage = () => {
  const dispatch = useDispatch();

  const [galleryData, setGalleryData] = useState([]);
  const [galleryError, setGalleryError] = useState("");
  const [galleryLoading, setGalleryLoading] = useState(false);
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
    getGalleryData();
    dispatch(getGalleryCategory());
  }, [dispatch]);

  if (galleryLoading) {
    return <Loader />;
  }
  return (
    <div>
      <CommonHead title="Gallery" />
      <GalleryComponent data={galleryData} />
    </div>
  );
};

export default GalleryPage;
