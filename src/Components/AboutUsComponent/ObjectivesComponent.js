import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/Image/Gallery/Rectangle 1161.png";
import HeadingComponent1 from "../Common/HeadingComponent1";

const ObjectivesComponent = () => {
  return (
    <div className="py-5">
      <Container>
        <HeadingComponent1
          first="Goals and "
          second="Objectives"
          className="text-center pb-3 text-main"
        />
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item, index) => {
            return (
              <Col className="py-2" key={index} md={3}>
                <div className="relative">
                  <img
                    src={img1}
                    alt=""
                    className="h-[250px] w-full object-cover rounded-md"
                  />
                  <div className="absolute bg-main/80 rounded-md top-0 h-[250px] p-4 text-white">
                    <p className="text-center pt-3 flex items-center justify-center">
                      বাংলাদেশ পুলিশ সার্ভিসের সদস্যগণের শৃঙ্খলা, মনোবল, নৈতিকতা
                      ও কর্মসন্তুষ্টির মান উন্নয়নসহ সর্বোচ্চ পেশাগত যোগ্যতা,
                      দক্ষতা ও প্রাতিষ্ঠানিক সামর্থ্য বৃদ্ধির প্রয়াস চালানো।
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ObjectivesComponent;
