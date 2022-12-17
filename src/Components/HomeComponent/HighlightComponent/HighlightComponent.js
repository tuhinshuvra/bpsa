import React from "react";
import HeadingComponent1 from "../../Common/HeadingComponent1";
import hightLightImg from "../../../assets/Image/Home/Rectangle 1142.png";
import ImageComponent from "../../Common/ImageComponent";
import { Col, Container, Row } from "react-bootstrap";
import moment from "moment";

const HighlightComponent = ({ data }) => {
  return (
    <div className="bg-emerald-100/50 py-4">
      <Container>
        <HeadingComponent1
          second="Highlight"
          className="text-main pb-4 text-center"
        />
        <Row>
          <Col md={6}>
            <div className="space-y-2 ">
              <div className="relative">
                <ImageComponent
                  image={data[0]?.Cover_Photo}
                  className="w-full h-[200px]  md:h-[400px] object-cover rounded-md "
                />
                <div className="absolute bottom-5 left-5">
                  <p className="bg-second text-white p-2 w-fit rounded-md font-semibold">
                    {data[0]?.Category}
                  </p>
                </div>
                <div className="absolute top-5 right-5">
                  <h5 className="bg-second text-white p-2 w-fit rounded-md font-semibold text-center ">
                    {moment(data?.[0]?.Pub_Date).format("ll")}
                  </h5>
                </div>
              </div>

              <h6 className="text-main font-semibold text-lg">
                {data[0]?.Heading}
              </h6>
              <div
                dangerouslySetInnerHTML={{
                  __html: data[0]?.Sub_Heading,
                }}
                className="text-sm"
              ></div>

              <a
                href={`${data[0]?.Document_Link}`}
                target="_blank"
                className="text-main border-b-2 w-fit border-main font-semibold cursor-pointer"
                rel="noreferrer"
              >
                Read more
              </a>
            </div>
          </Col>
          <Col md={6}>
            {data &&
              data?.slice(1)?.map((item, index) => {
                return (
                  <Row key={index}>
                    <Col className="py-2" md={5}>
                      {" "}
                      <div className="relative">
                        {" "}
                        <ImageComponent
                          image={item?.Cover_Photo}
                          className="w-full h-[200px] md:h-[120px] object-cover rounded-md"
                        />
                        <div className="absolute bottom-0 left-2">
                          <p className="bg-second text-white p-1 w-fit rounded-md font-semibold text-[12px]">
                            {item?.Category}
                          </p>
                        </div>
                        <div className="absolute top-2 right-2">
                          <h6 className="bg-main text-white p-2 w-fit rounded-md font-semibold text-center">
                            {moment(item?.Pub_Date).format("ll")}
                          </h6>
                        </div>
                      </div>
                    </Col>
                    <Col md={7}>
                      {" "}
                      <div className="">
                        <h6 className="text-main font-semibold text-lg md:text-sm">
                          {item?.Heading}
                        </h6>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.Sub_Heading,
                          }}
                          className="text-sm"
                        ></div>
                        <a
                          href={`${item?.Document_Link}`}
                          target="_blank"
                          className="text-main border-b-2 w-fit border-main font-semibold cursor-pointer"
                          rel="noreferrer"
                        >
                          Read more
                        </a>
                      </div>
                    </Col>
                  </Row>
                );
              })}{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HighlightComponent;
