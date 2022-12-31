import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Mousewheel, Navigation } from "swiper";

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
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {documentData &&
            documentData?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="border p-4 px-5">
                    <Row>
                      <Col md={8}>
                        <h4 className="text-main font-semibold">
                          {item?.title}
                        </h4>

                        <div
                          dangerouslySetInnerHTML={{ __html: item?.summary }}
                          className="text-justify"
                        ></div>
                      </Col>
                      <Col className="text-center" md={4}>
                        <div className="relative">
                          <ImageComponent
                            image={item?.c_photo}
                            className="w-full md:w-[250px] h-[250px]  mb-1 object-cover rounded-lg"
                          />

                          <div className="w-full md:w-[250px] h-[250px] bg-main/50 absolute top-0 rounded-lg">
                            <a
                              href={item?.file}
                              target="_blank"
                              rel="noreferrer"
                              className="absolute bottom-[5px] left-2 m-0 text-white flex items-center cursor-pointer"
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
