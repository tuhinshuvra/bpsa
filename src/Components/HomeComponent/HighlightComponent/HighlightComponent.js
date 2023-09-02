import React from "react";
import HeadingComponent1 from "../../Common/HeadingComponent1";
import hightLightImg from "../../../assets/Image/Home/Rectangle 1142.png";
import ImageComponent from "../../Common/ImageComponent";
import { Col, Container, Row } from "react-bootstrap";
import moment from "moment";
import { TimeIcon } from "../../../assets/Icons/Icons";
import { Link, useNavigate } from "react-router-dom";

const HighlightComponent = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-500/40  my-5 py-4 rounded-2xl ">
      <Container>
        <HeadingComponent1
          first="Activity "
          second="Highlights"
          className="text-white pb-4 text-center"
        />
        <Row>
          <Col md={6}>
            <div
              onClick={() => {
                navigate(`/news/${data[0]?.id}`);
              }}
              className="space-y-2 cursor-pointer "
            >
              <div className="relative">
                <ImageComponent
                  image={data[0]?.Cover_Photo}
                  className="w-full h-[200px]  md:h-[400px] object-cover rounded-md "
                />
                <div className="absolute bottom-5 left-5">
                  <p className="bg-main/60 text-white p-2 w-fit rounded-md font-semibold">
                    <span className="flex items-center text-white w-fit rounded-md font-semibold text-center ">
                      <TimeIcon className="mr-1" size={20} />{" "}
                      {moment(data?.[0]?.Pub_Date).format("ll")}
                    </span>
                  </p>
                </div>
                <div className="absolute top-5 right-5">
                  <p className="bg-second/60 text-white px-3 py-1 w-fit rounded-md font-semibold text-center ">
                    {data[0]?.Category}
                  </p>
                </div>
              </div>

              <h6 className="text-black font-semibold text-lg">
                {data[0]?.Heading}
              </h6>
              <div
                dangerouslySetInnerHTML={{ __html: data[0]?.Sub_Heading, }}
                className="text-sm"
              ></div>

              {/* <Link
                to={`/news/${data[0]?.id}`}
                className="text-main border-b-2 w-fit border-main font-semibold cursor-pointer"
                rel="noreferrer"
              >
                Read more
              </Link> */}
            </div>
          </Col>
          <Col md={6}>
            {data &&
              data?.slice(1, 4)?.map((item, index) => {
                return (
                  <Row key={index}>
                    <Col className="py-2" md={5}>
                      {" "}
                      <div
                        onClick={() => {
                          navigate(`/news/${item?.id}`);
                        }}
                        className="relative cursor-pointer"
                      >
                        {" "}
                        <ImageComponent
                          image={item?.Cover_Photo}
                          className="w-full h-[200px] md:h-[120px] object-cover rounded-md"
                        />
                        <div className="absolute bottom-0 left-2">
                          <p className="bg-main/80 flex items-center text-white p-1 w-fit rounded-md font-semibold text-[12px]">
                            <TimeIcon className="mr-1" size={18} />
                            {moment(item?.Pub_Date).format("ll")}
                          </p>
                        </div>
                        <div className="absolute top-2 right-2">
                          <span className="bg-second text-white px-2 py-1 w-fit rounded-md text-sm text-center">
                            {item?.Category}
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col md={7}>

                      <div
                        onClick={() => {
                          navigate(`/news/${item?.id}`);
                        }}
                        className="cursor-pointer"
                      >
                        <p className="text-main font-semibold  md:text-sm">
                          {item?.Heading.length > 80
                            ? item?.Heading.slice(0, 80) + ".."
                            : item?.Heading}
                        </p>

                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.Sub_Heading,
                          }}
                          className="text-sm text-justify text-black  "
                        ></div>
                        {/* <Link
                          to={`/news/${item?.id}`}
                          className="text-main border-b-2 w-fit border-main font-semibold cursor-pointer"
                        >
                          Read more
                        </Link> */}
                      </div>
                    </Col>
                  </Row>
                );
              })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HighlightComponent;
