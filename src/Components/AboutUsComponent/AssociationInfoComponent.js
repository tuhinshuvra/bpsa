import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import ImageComponent from "../Common/ImageComponent";
import assImg from "../../assets/Image/Gallery/Rectangle 1161.png";
import { MdOutlineChevronRight } from "react-icons/md";
import ButtonComponent from "../Common/ButtonComponent";

let data = `বাংলাদেশ পুলিশের এএসপি হতে তদুর্ধ্ব কর্মকর্তগনের পেশাগত মান উন্নয়ন, সামষ্টিগত কল্যাণ, সদস্যদের মধ্যে ঐক্য ও সংহতি সুদৃঢ়করণের লক্ষ্যে একটি সংঘঠনের প্রয়োজনীয়তা অনুভুত হওয়ায় ১৯৯৮ সালে “বাংলাদেশ পুলিশ সার্ভিস অ্যাসোসিয়েশন ” গঠিত হয়েছে। বাংলাদেশ পুলিশে কর্মরত এএসপি হতে তদুর্ধ্ব কর্মকর্তাগণ এর সদস্য হিসেবে পরিগনিত হন। কেন্দ্রীয় কার্যনির্বাহী কমিটি ২০২১ এ ১৫১ জন সদস্য রয়েছে। উক্ত কমিটি ধারাবাহিকভাবে বিভিন্ন সময়ে ও জরুরী প্রয়োজনে সভায় মিলিত হয়। এসকল সভায় বিষয় ভিত্তিক আলোচনা করা হয় এবং বিভিন্ন উপ-কমিটি গঠন করে দায়িত্ব প্রদান করা হয়। 
অ্যাসোসিয়েশন  প্রতিষ্ঠালগ্ন হতে সদস্য ও পরিবারবর্গের জন্য ভ্রাতৃত্ববোধ ও সহমর্মিতায় উদ্ধুদ্ধ হয়ে পারস্পরিক সুশৃঙ্খল ও সুষ্ঠু সম্পর্ক স্থাপন এবং একাত্মবোধ জাগ্রতকরণসহ সামষ্ঠিক উন্নয়ন ও কল্যাণের মহান আদর্শে নানমুখী কল্যাণমূলক কার্যক্রম গ্রহণ করে আসছে। 
অ্যাসোসিয়েশন  কর্তৃক প্রতিবছরে গৃহীত কর্মসূচির মধ্যে রাষ্ট্রীয় বিভিন্ন দিবসে শ্রদ্ধা নিবেদন উপলক্ষে পুস্পস্তবক অর্পণ, আন্তঃ ক্যাডার সম্পর্ককে আরো সৌহর্দ্যপূর্ণ ও সুদৃঢ় করার লক্ষ্যে অন্যান্য ক্যাডারের কর্মকর্তাদের সাথে সমন্বয় সভা/প্রীতি সম্মেলন আয়োজন, অ্যাসোসিয়েশন ের স্বার্থ সংশ্লিষ্ট বিভিন্ন মন্ত্রণালয়ের দায়িত্বে নিয়োজিত মাননীয় মন্ত্রি/সচিব/সরকারের নীতিনির্ধারণী ব্যক্তিবর্গের সাথে সৌজন্য সাক্ষাত ও স্বার্থ সংশ্লিষ্ট বিষয়ে আলোচনা করা এবং বাংলাদেশ পুলিশের সংগঠনিক কাঠমো বৃদ্ধি, সর্বক্ষেত্রে পুলিশের ভাবমূর্তি উজ্জল এবং পুলিশে কর্মরত সকল পর্যায়ের সদস্যগণের কল্যাণের পাশাপাশি তাদের মৃত্যুতে অ্যাসোসিয়েশন ের পক্ষ হতে পুস্পস্তবক অর্পন ও শোকবার্তা প্রদান করা এবং শোকার্ত পরিবারের সদস্যদের প্রতি সমবেদনা জ্ঞাপন করা হয়ে থাকে। সামাজিক কার্যক্রমের মধ্যে দুঃস্থ নাগরিকদের কথা বিবেচনায় রেখে তাদের মাঝে মধ্যে ঈদ বস্ত্র, শীত বস্ত্র বিতরণ, বন্যার্তদের সাহায্যার্থে ত্রাণ সমগ্রী বিতরণ ইত্যাদি।
`;
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
            <p className="md:pr-4 text-justify leading-8">
              {seeMore ? data : data?.slice(0, 761) + ".."}
            </p>

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
