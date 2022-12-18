import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../../Common/HeadingComponent1";
import ImageComponent from "../../Common/ImageComponent";
// import img1 from "../../../assets/Image/Gallery/Rectangle 1161.png";
// import img2 from "../../../assets/Image/Gallery/Rectangle 1163.png";
// import img3 from "../../../assets/Image/Gallery/Rectangle 1166.png";
// import img4 from "../../../assets/Image/Gallery/Rectangle 1167.png";
// import img5 from "../../../assets/Image/Gallery/Rectangle 1168.png";
// import img6 from "../../../assets/Image/Gallery/Rectangle 1166 (1).png";

// const galleryData = [
//   {
//     img: img1,
//   },
//   {
//     img: img2,
//   },
//   {
//     img: img3,
//   },
//   {
//     img: img4,
//   },
//   {
//     img: img5,
//   },
//   {
//     img: img3,
//   },
//   {
//     img: img4,
//   },

//   {
//     img: img6,
//   },
// ];

const GalleryComp = ({ data }) => {
  return (
    <div>
      <Container className="py-10">
        <HeadingComponent1
          first="Our "
          second={"Gallery"}
          className="text-center text-main pb-3"
        />
        <Row>
          {data &&
            data?.map((item, index) => {
              return (
                <Col className="py-2" key={index} md={3}>
                  <ImageComponent
                    image={item?.image}
                    className="w-full h-[250px] object-cover rounded-md"
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default GalleryComp;
