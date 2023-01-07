import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import ImageComponent from "../Common/ImageComponent";
import assImg from "../../assets/Image/Gallery/Rectangle 1161.png";
import { MdOutlineChevronRight } from "react-icons/md";
import ButtonComponent from "../Common/ButtonComponent";

let data = `বাংলাদেশ পুলিশে কর্মরত সদস্যগণের পেশাগত মান উন্নয়ন, সমষ্টিগত কল্যাণ, সদস্যগণের মধ্যে ঐক্য ও সংহতি সুদৃঢ়করণের লক্ষ্যে একটি সংগঠনের প্রয়োজন হওয়ায় ‘বাংলাদেশ পুলিশ সার্ভিস অ্যাসোসিয়েশন গঠিত হয়। ১৯৯৮ সালে তৎকালীন অ্যাডিশনাল আইজিপি, সিআইডি জনাব মোঃ নুরুল হুদা সভাপতি এবং অ্যাডিশনাল ডিআইজি জনাব মোহাঃ আব্দুল হান্নান খান সাধারণ সম্পাদক হিসেবে এর কার্যক্রম শুরু করেন। <br/>
গঠনতন্ত্র অনুযায়ী সহকারী পুলিশ সুপার হতে তদুর্ধ্ব কর্মকর্তাগণ অ্যাসোসিয়েশনের সদস্য। তন্মধ্যে ১৫১ জন সদস্য বিশিষ্ট একটি কার্যনির্বাহী কমিটি রয়েছে। কার্যনির্বাহী কমিটির সভায় বিভিন্ন প্রয়োজনীয়তার নিরিখে একাধিক উপ-কমিটি গঠন করা হয়। কার্যনির্বাহী কমিটির অধীনে উপ-কমিটিসমূহ দায়িত্ব পালন করে থাকে। <br/>
অ্যাসোসিয়েশনের প্রতিষ্ঠালগ্ন হতে সদস্য ও পরিবারবর্গের জন্য ভ্রাতৃত্ববোধ ও সহমর্মিতায় উদ্বদ্ধ হয়ে পারস্পারিক সুশৃঙ্খল সম্পর্ক স্থাপন এবং একাত্মবোধ জাগ্রতকরণসহ নানামুখী কল্যাণমূলক কার্যক্রম গ্রহণ করে আসছে। বাংলাদেশ পুলিশের সাংগঠনিক কাঠামো বৃদ্ধি ও স্বার্থ সংশ্লিষ্ট অন্যান্য বিষয়ে বিভিন্ন মন্ত্রণালয়ের দায়িত্বে নিয়োজিত মাননীয় মন্ত্রী/সচিব/সরকারের নীতিনির্ধারণী ব্যক্তিবর্গের সাথে পুলিশ হেডকোয়ার্টার্সের সাথে সমন্বয় করে কার্যক্রম পরিচালনা করে। বাংলাদেশ পুলিশ সার্ভিসের সদস্যগণের শৃঙ্খলা, মনোবল, নৈতিকতা ও কর্মসন্তুষ্টির মান উন্নয়নসহ সর্বোচ্চ পেশাগত যোগ্যতা, দক্ষতা ও প্রাতিষ্ঠানিক সামর্থ্য বৃদ্ধির প্রয়াস চালিয়ে যাচ্ছে। <br/>
এছাড়াও অ্যাসোসিয়েশনের পক্ষ হতে বিভিন্ন রাষ্ট্রীয়/জাতীয় দিবস উদযাপন, ক্যাডার সার্ভিসের সদস্যদের সাথে প্রীতি সম্মিলন, সরকারের নীতিনির্ধারণী ব্যক্তিবর্গের সাথে সৌজন্য সাক্ষাত ও স্বার্থ সংশ্লিষ্ট বিষয়ে আলোচনা, স্যুভেনির প্রকাশনা ইত্যাদি কার্যক্রম পরিচালনা করে আসছে। এর পাশাপাশি এসোসিয়েশনের সদস্য/পরিবারের সদস্যদের চিকিৎসার্থে আর্থিক সহায়তা প্রদান এবং বিভিন্ন আর্থ-সামাজিক কর্মকান্ড যেমন: ঈদ বস্ত্র/শীত বস্ত্র বিতরণ, বন্যার্তদের সাহায্যার্থে ত্রাণ সামগ্রী বিতরণ ইত্যাদি কর্মকান্ড চলমান রয়েছে। 

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
            <div
              dangerouslySetInnerHTML={{
                __html: seeMore ? data : data.slice(0, 600),
              }}
              className="md:pr-4 text-justify leading-8"
            ></div>

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
