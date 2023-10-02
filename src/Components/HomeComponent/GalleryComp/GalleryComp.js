import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../../Common/HeadingComponent1";
import ImageComponent from "../../Common/ImageComponent";
import GalleryImageCard from "../../GalleryComponent/GalleryImageCard";
import ButtonComponent from "../../Common/ButtonComponent";
import { useNavigate } from "react-router-dom";
import Styles from "../../GalleryComponent/GalleryComponent.module.css";

const GalleryComp = ({ data }) => {
  const [images, setImages] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      let imgData = data?.slice(0, 10)?.map((item) => item.image);
      setImages(imgData);
    }
  }, [data]);
  return (
    <div>
      <Container className="py-3 bg-[#E2E3E7] rounded-2xl">
        <HeadingComponent1
          first="Association  "
          second={"Photos"}
          className="text-center  pb-3"
        />
        <div className={`${Styles.galleryGridView}`}>
          {data &&
            data?.slice(0, 10)?.map((item, index) => {
              return (
                <div className="py-2" key={index}>
                  <GalleryImageCard
                    images={images}
                    item={item}
                    index={index}
                  />
                </div>
              );
            })}
        </div>
        <div className="text-center">
          <ButtonComponent
            onClick={() => navigate("/gallery")}
            className="bg-primary text-white px-3 py-2 rounded-md"
            title="See More"
          />
        </div>
      </Container>
    </div>
  );
};

export default GalleryComp;
