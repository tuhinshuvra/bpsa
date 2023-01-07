import { List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FilterIcon } from "../../utlis/icons";
import ButtonComponent from "../Common/ButtonComponent";
import HeadingComponent1 from "../Common/HeadingComponent1";
import HeroComponent1 from "../Common/HeroComponent1";
import ImageComponent from "../Common/ImageComponent";
import PaginationComponent from "../Common/PaginationComponent";
import Styles from "./GalleryComponent.module.css";
import GalleryImageCard from "./GalleryImageCard";
import ReactPlayer from "react-player";

const GalleryComponent = ({ data, video }) => {
  const [page, setPage] = React.useState(1);
  const [galleryData, setGalleryData] = useState(data);
  const { galleryCategory } = useSelector((state) => state.gallery);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(9);
  const [showperPage, setShowPerPage] = useState(9);
  const [showFilter, setShowFilter] = useState(true);
  const [selectTitle, setSelectTitle] = useState("Photos");

  const [images, setImages] = useState("");
  useEffect(() => {
    if (data) {
      let imgData = data?.map((item) => item.image);
      setImages(imgData);
    }
  }, [data]);

  const handleChange = (event, value) => {
    setPage(value);

    setStart(showperPage * value - showperPage);
    setEnd(showperPage * value);
  };

  return (
    <div className="">
      <HeroComponent1 title="GALLERY" />
      <Container>
        <HeadingComponent1
          first="Our "
          second="Gallery"
          className="text-center text-main py-4 "
        />
        <div className=" space-x-4 flex ">
          <ButtonComponent
            onClick={() => setSelectTitle("Photos")}
            title="Photos"
            className={`px-5 py-2  ${
              selectTitle === "Photos"
                ? "bg-second text-white"
                : "border-2 border-main text-main "
            }`}
          />
          <ButtonComponent
            onClick={() => setSelectTitle("video")}
            title="Videos"
            className={`px-5 py-2  ${
              selectTitle === "video"
                ? "bg-second text-white border-2 border-second"
                : "border-2 border-main text-main "
            }`}
          />
        </div>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`bg-second text-white px-4 py-2 flex items-center justify-between  md:hidden mt-3`}
        >
          <FilterIcon size={24} className="mr-3" />
          Filter
        </button>

        {selectTitle === "Photos" && (
          <div className="">
            <Row className="mt-5">
              {showFilter && (
                <Col md={3}>
                  <ul className="m-0 p-0 cursor-pointer">
                    <li onClick={() => setGalleryData(data)}>All</li>
                    <hr />
                    {galleryCategory &&
                      galleryCategory?.map((item, index) => {
                        return (
                          <div
                            onClick={() => {
                              setGalleryData(
                                data?.filter((val) => val?.gcat_id == item.id)
                              );
                            }}
                            key={index}
                          >
                            <li>{item?.name}</li>
                            <hr />
                          </div>
                        );
                      })}
                  </ul>
                </Col>
              )}

              <Col md={9}>
                <Row>
                  {galleryData &&
                    galleryData?.slice(start, end)?.map((item, index) => {
                      return (
                        <Col key={index} md={4}>
                          <GalleryImageCard
                            images={images}
                            item={item}
                            index={index}
                          />
                        </Col>
                      );
                    })}
                </Row>
              </Col>
            </Row>
          </div>
        )}

        {selectTitle === "video" && (
          <div>
            <Row className="py-4">
              {video &&
                video?.map((item, index) => {
                  return (
                    <Col key={index} md={8} className="mx-auto ">
                      {/* <div
                        className="w-full"
                        dangerouslySetInnerHTML={{ __html: item?.ylink }}
                      ></div> */}
                      <div className="py-3 w-full h-[400px] player-wrapper">
                        <ReactPlayer
                          className="react-player"
                          url={item?.ylink}
                          controls
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </div>
        )}

        <div className="text-center flex items-center justify-center py-4">
          <PaginationComponent
            count={
              selectTitle === "video"
                ? Math.ceil(video?.length / showperPage)
                : Math.ceil(galleryData?.length / showperPage)
            }
            pageNumber={page}
            handleChange={handleChange}
          />
        </div>
      </Container>
    </div>
  );
};

export default GalleryComponent;
