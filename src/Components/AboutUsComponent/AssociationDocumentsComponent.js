import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    <div className="py-5 ">
      <Container>
        <HeadingComponent1
          first="Association  "
          second="Documents"
          className="text-center pb-3 text-main"
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
                  <div className="border p-4 px-5">
                    <Row>
                      <h4 className="text-main font-semibold text-center mb-3">{item?.title}</h4>
                      <Col md={8}>
                        <div
                          dangerouslySetInnerHTML={{ __html: item?.summary }}
                          className="text-justify"
                        ></div>
                      </Col>
                      <Col className="text-center" md={4}>
                        <div className="relative">
                          <ImageComponent
                            image={item?.c_photo}
                            className="w-full md:w-[250px] h-[250px] object-cover  mb-1  "
                          />

                          <div className="w-full md:w-[250px] h-[250px]  absolute top-0 ">
                            <a
                              href={item?.file}
                              target="_blank"
                              rel="noreferrer"
                              className="absolute bottom-[5px] left-2 m-0  flex items-center cursor-pointer"
                            >
                              <DownloadIcon
                                className="bg-second text-white mr-1 rounded-md p-1"
                                size={28}
                              />
                              Download Now
                            </a>
                          </div>
                        </div>
                      </Col>
                    </Row>
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
