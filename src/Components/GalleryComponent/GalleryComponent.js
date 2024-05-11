import { List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FilterIcon } from "../../utlis/icons";
import ButtonComponent from "../Common/ButtonComponent";
import PaginationComponent from "../Common/PaginationComponent";
import GalleryImageCard from "./GalleryImageCard";
import ReactPlayer from "react-player";
import Styles from "./GalleryComponent.module.css";

const GalleryComponent = ({ data, video }) => {
  const [page, setPage] = React.useState(1);
  const [galleryData, setGalleryData] = useState(data);
  const { galleryCategory } = useSelector((state) => state.gallery);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [showperPage, setShowPerPage] = useState(10);
  const [showFilter, setShowFilter] = useState(true);
  const [selectTitle, setSelectTitle] = useState("Photos");
  const [selectedItem, setSelectedItem] = useState("All");

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
    <div>
      <div className=' col-md-10 mx-auto'>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container pt-3 pb-5 ">

            <nav aria-label="" className="bg-light rounded-3 p-2 mb-4">
              <h2 className='fw-bold text-center'>GALLERY</h2>
            </nav>
            <div>

              <Container>
                <div className=" space-x-4 flex ">
                  <ButtonComponent
                    onClick={() => setSelectTitle("Photos")}
                    title="Photos"
                    className={`px-3 py-1  ${selectTitle === "Photos"
                      ? "bg-black text-white"
                      : "  bg-[#09090964]  text-white "
                      }`}
                  />
                  <ButtonComponent
                    onClick={() => setSelectTitle("video")}
                    title="Videos"
                    className={`px-3 py-1  ${selectTitle === "video"
                      ? "bg-black text-white"
                      : "  bg-[#34333364]  text-white "
                      }`}
                  />
                </div>
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className={`bg-black text-white px-4 py-2 flex items-center justify-between  md:hidden mt-3`}
                >
                  <FilterIcon size={24} className="mr-3" />
                  Filter
                </button>

                {selectTitle === "Photos" && (

                  <div className="   mt-3">
                    <div className={``}>
                      {showFilter && (
                        <div className=" col-md-12 ">
                          {/* <div className={`m-0 p-0 cursor-pointer ${Styles.gridGalleryBtn}`}> */}
                          <div className={`m-0 p-0 cursor-pointer d-xl-flex grid grid-cols-4`}>
                            <ButtonComponent
                              onClick={() => {
                                setGalleryData(data)
                                setSelectedItem("All")
                              }}
                              className={`${selectedItem === "All"
                                ? "bg-[#bcbdc0] text-black"
                                : " bg-white  "
                                }  px-3 py-1 me-1 my-1 text-sm `}
                              title={`All`}
                            />

                            {/* <hr /> */}
                            {galleryCategory &&
                              galleryCategory?.map((item, index) => {
                                return (
                                  <div>
                                    <ButtonComponent
                                      onClick={() => {
                                        setGalleryData(data?.filter((val) => val?.gcat_id == item.id));
                                        setSelectedItem(item)
                                      }} key={index}

                                      className={`${item === selectedItem
                                        ? "bg-[#bcbdc0] text-black"
                                        : " bg-white    "
                                        }  px-1 py-1 m-1  text-sm  `}

                                      title={item?.name}
                                    />
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}

                    </div>

                    <div className=" col-md-12 ">
                      <div className={`${Styles.galleryGridView}`}>
                        {galleryData &&
                          galleryData?.slice(start, end)?.map((item, index) => {
                            return (
                              // <div className="col-md-2 " key={index}>
                              <div className="" key={index}>
                                <GalleryImageCard
                                  images={images}
                                  item={item}
                                  index={index}
                                />
                              </div>
                            );
                          })}
                      </div>
                    </div>
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
          </div>
        </section >
      </div >




    </div >
  );
};

export default GalleryComponent;
