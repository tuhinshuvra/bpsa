import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import config from "../../api/config";
import HeadingComponentTwo from "../Common/HeadingComponentTwo";
import ImageComponent from "../Common/ImageComponent";
import ImagePreview from "../Common/ImagePreview";

const NewsGalleryComponent = ({ data }) => {
  const [galleryData, setGalleryData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (data) {
      let gData = JSON.parse(data?.gimage);

      setGalleryData(
        gData?.map(
          (item) => "https://app.bpsa.com.bd/public/uploads/post/" + item
        )
      );
    }
  }, [data]);

  return (
    <div className="md:mt-[120px] md:pl-4">
      <HeadingComponentTwo title={"Gallery"} />
      <Row className="">
        {galleryData &&
          galleryData?.map((item, index) => {
            return (
              <Col
                onClick={() => {
                  setIsOpen(true);
                  setPhotoIndex(index);
                }}
                className="p-2"
                key={index}
                md={4}
              >
                <ImageComponent
                  image={item}
                  className="w-full h-[250px] md:h-[100px] object-cover rounded-md cursor-pointer"
                />
              </Col>
            );
          })}
      </Row>

      <ImagePreview
        images={galleryData}
        isOpen={isOpen}
        photoIndex={photoIndex}
        setPhotoIndex={setPhotoIndex}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default NewsGalleryComponent;
