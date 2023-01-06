import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import ImageComponent from "../Common/ImageComponent";
import assImg from "../../assets/Image/Gallery/Rectangle 1161.png";
import { MdOutlineChevronRight } from "react-icons/md";
import ButtonComponent from "../Common/ButtonComponent";


const AssociationInfoComponent = () => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div>
      <Container className="py-12">
        <HeadingComponent1
          first="About  "
          second="Bangladesh Police Service Association"
          className="text-center text-main pb-4"
        />
        <Row>
          <Col className="py-2 order-2 md:order-1" md={6}>
            <p className="md:pr-4 text-justify">
              বাংলাদেশ পুলিশ সার্ভিসের সদস্যগণ ব্যক্তি ও সমষ্টিগতভাবে বাংলাদেশের
              জনসাধারণের কল্যাণার্থে নিয়োজিত। এ সার্ভিসের সদস্যগণের পেশাগত মান
              উন্নয়ন, সমষ্টিগত কল্যাণ, সদস্যদের মাঝে ঐক্য ও সংহতি দৃঢ়করণের
              লক্ষ্যে একটি সংগঠননের প্রয়োজনীয়তা অনুভূত হওয়ায় বাংলাদেশ পুলিশ
              সার্ভিস অ্যাসোসিয়েশন গঠিত হয়েছে। বাংলাদেশ পুলিশ -এ কর্মরত সহকারী
              পুলিশ সুপার হতে তদুর্ধ্ব কর্মকর্তাগণ এর সদস্য হিসেবে পরিগণিত হন।
            </p>
            {seeMore && (
              <p className="md:pr-4 text-justify">
                বাংলাদেশ পুলিশ সার্ভিসের সদস্যগণ ব্যক্তি ও সমষ্টিগতভাবে
                বাংলাদেশের জনসাধারণের কল্যাণার্থে নিয়োজিত। এ সার্ভিসের সদস্যগণের
                পেশাগত মান উন্নয়ন, সমষ্টিগত কল্যাণ, সদস্যদের মাঝে ঐক্য ও সংহতি
                দৃঢ়করণের লক্ষ্যে একটি সংগঠননের প্রয়োজনীয়তা অনুভূত হওয়ায় বাংলাদেশ
                পুলিশ সার্ভিস অ্যাসোসিয়েশন গঠিত হয়েছে। বাংলাদেশ পুলিশ -এ কর্মরত
                সহকারী পুলিশ সুপার হতে তদুর্ধ্ব কর্মকর্তাগণ এর সদস্য হিসেবে
                পরিগণিত হন।s
              </p>
            )}

            <ButtonComponent
              onClick={() => setSeeMore(!seeMore)}
              title={seeMore ? "See Less" : "See More"}
              className="bg-main text-white px-4 py-2 rounded-md"
            />
          </Col>
          <Col className="py-2 sm:order-1 md:order-2" md={6}>
            <ImageComponent
              image={assImg}
              className="w-full h-[250px] md:h-[400px] object-cover rounded-md"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AssociationInfoComponent;
