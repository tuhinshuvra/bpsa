import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../../Common/HeadingComponent1";
import ImageComponent from "../../Common/ImageComponent";
import GalleryImageCard from "../../GalleryComponent/GalleryImageCard";
import ButtonComponent from "../../Common/ButtonComponent";
import { useNavigate } from "react-router-dom";

const GalleryComp = ({ data }) => {
  const [images, setImages] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      let imgData = data?.slice(0, 8)?.map((item) => item.image);
      setImages(imgData);
    }
  }, [data]);
  return (
    <div>
      <Container className="py-10">
        <HeadingComponent1
          first="Association  "
          second={"Photos"}
          className="text-center text-main pb-3"
        />
        <Row>
          {data &&
            data?.slice(0, 8)?.map((item, index) => {
              return (
                <Col className="py-2" key={index} md={3}>
                  <GalleryImageCard images={images} item={item} index={index} />
                </Col>
              );
            })}
        </Row>
        <div className="text-center">
          <ButtonComponent
            onClick={() => navigate("/gallery")}
            className="bg-second text-white px-3 py-2 rounded-md"
            title="See More"
          />
        </div>
      </Container>
    </div>
  );
};

export default GalleryComp;
