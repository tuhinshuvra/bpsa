import React, { useEffect, useState } from "react";
import { GetGalleryData } from "../api";
import Loader from "../Components/Common/Loader";
import GalleryComponent from "../Components/GalleryComponent/GalleryComponent";

const GalleryPage = () => {
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
  }, []);

  if (galleryLoading) {
    return <Loader />;
  }
  return (
    <div>
      <GalleryComponent data={galleryData} />
    </div>
  );
};

export default GalleryPage;
