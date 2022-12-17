import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import ImageComponent from "../Common/ImageComponent";
import assImg from "../../assets/Image/Gallery/Rectangle 1161.png";
import { MdOutlineChevronRight } from "react-icons/md";

const AssociationInfoComponent = () => {
  return (
    <div>
      <Container className="py-12">
        <Row>
          <Col className="py-2" md={6}>
            <HeadingComponent1 first="Learn About Our " second="Association" />
            {/* <p className="font-semibold text-main md:pr-4 text-justify">
              2022 IACP State & Provincial Police Planning Officers Section
              (SPPPOS) and Academy Directors Section (SPPADS)
            </p> */}
            <p className="md:pr-4 text-justify">
              বাংলাদেশ পুলিশ সার্ভিসের সদস্যগণ ব্যক্তি ও সমষ্টিগতভাবে বাংলাদেশের
              জনসাধারণের কল্যাণার্থে নিয়োজিত। এ সার্ভিসের সদস্যগণের পেশাগত মান
              উন্নয়ন, সমষ্টিগত কল্যাণ, সদস্যদের মাঝে ঐক্য ও সংহতি দৃঢ়করণের
              লক্ষ্যে একটি সংগঠননের প্রয়োজনীয়তা অনুভূত হওয়ায় বাংলাদেশ পুলিশ
              সার্ভিস এসোসিয়েশন গঠিত হয়েছে। বাংলাদেশ পুলিশ -এ কর্মরত সহকারী
              পুলিশ সুপার হতে তদুর্ধ্ব কর্মকর্তাগণ এর সদস্য হিসেবে পরিগণিত হন।
            </p>
          </Col>
          <Col className="py-2" md={6}>
            <ImageComponent
              image={assImg}
              className="w-full h-[300px] object-contain rounded-md"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AssociationInfoComponent;
