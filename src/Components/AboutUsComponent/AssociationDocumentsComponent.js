import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../AboutUsComponent/AboutUs.css';

// import required modules
import { Autoplay, Keyboard, Mousewheel, Navigation } from "swiper";

import { Col, Container, Row } from "react-bootstrap";
import { DownloadIcon } from "../../utlis/icons";
import HeadingComponent1 from "../Common/HeadingComponent1";
import ImageComponent from "../Common/ImageComponent";
import { GetDocumentsData } from "../../api";
import Loader from "../Common/Loader";

const AssociationDocumentsComponent = () => {
  const [loading, setLoading] = useState(false);
  const [documentData, setDocumentData] = useState([]);
  console.log(
    "🚀 ~ file: AssociationDocumentsComponent.js:23 ~ AssociationDocumentsComponent ~ documentData",
    documentData
  );
  const getDocuments = async () => {
    setLoading(true);
    const result = await GetDocumentsData();
    setLoading(false);
    if (result?.status === "success") {
      setDocumentData(result?.data?.document);
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="py-5 bg-success/50  rounded-2xl ">
      <Container>
        <HeadingComponent1
          first="Association"
          second="Documents"
          className="text-center pb-3 text-white"
        />
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
        >
          {documentData &&
            documentData?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="border p-3 px-5 rounded-2xl">
                    <div className=" d-lg-flex">
                      <div className=" col-lg-8  my-auto">
                        <h4 className="text-third font-semibold text-center mb-3">
                          {item?.title}
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{ __html: item?.summary }}
                          className="text-justify text-white"
                        ></div>
                        <div className=" d-flex justify-content-center downLoadIconArea ">
                          <div className="w-full md:w-[250px] h-[250px]  absolute downLoadIcon text-third  ">
                            <a
                              href={item?.file}
                              target="_blank"
                              rel="noreferrer"
                              className="absolute bottom-[5px] left-2 m-0  flex items-center cursor-pointer"
                            >
                              <DownloadIcon className="bg-third text-white rounded-md p-1 me-1" size={28} /> <span className=" text-third fw-bold"> Download Now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-flex justify-content-center my-5 my-lg-0  ">
                        <div className="relative">
                          <a href={item?.file} target="_blank" rel="noreferrer">
                            <div className="">
                              {" "}
                              <ImageComponent
                                image={item?.c_photo}
                                className="w-full md:w-[150px] h-[150px] object-cover  mb-1 rounded-full "
                              />

                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </div>
  );
};

export default AssociationDocumentsComponent;
