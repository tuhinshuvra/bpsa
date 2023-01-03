import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

import { Col, Container, Row } from "react-bootstrap";
import HeadingComponent1 from "../Common/HeadingComponent1";
import { Paper } from "@mui/material";
import ImageComponent from "../Common/ImageComponent";
import { FbIcon, LinkedInIcon, TwitterIcon } from "../../utlis/icons";
import img1 from "../../assets/Image/messages/IGP_Image.jpeg";
import img2 from "../../assets/Image/messages/President_2021_Stamp.jpg";
import img3 from "../../assets/Image/messages/আসাদুজ্জামান.jpg";
import { GetLeadershipData } from "../../api";

// const currenLeaderData = [
//   {
//     img: img2,
//     name: "Md. Monirul Islam",
//     title: "অতিরিক্ত আইজিপি, স্পেশাল ব্রাঞ্চ, বাংলাদেশ পুলিশ",
//     text: `<p>বাংলাদেশ পুলিশ সার্ভিস এসোসিয়েশন এর সভাপতি  মোঃ মনিরুল ইসলাম, বিপিএম (বার), পিপিএম (বার) গত ০২রা ফেব্রুয়ারী ২০২২ অতিরিক্ত আইজিপি হিসাবে এসবি অফিসে যোগদান করেন।  এই পদে যোগদানের পূর্বে তিনি _______________কর্মরত ছিলেন।
// 			<br/>
// তিনি ১৯৯৫ সালের ১৫ই ফেব্রুয়ারী ১৫তম বিসিএস (পুলিশ) ব্যাচে সহকরী পুলিশ সুপার হিসাবে বাংলাদেশ পুলিশে  যোগদান করেন। বর্ণাঢ্য চাকুরী জীবনে তিনি অত্যন্ত সততা, দক্ষতা, নিষ্ঠা ও পেশাদারিত্বের সাথে বাংলাদেশ পুলিশের বিভিন্ন ইউনিট এ দায়িত্ব পালন করেন। তিনি ডিআইজি হিসাবে গোয়েন্দা, কাউন্টার টেরোরিজম এবং ঢাকা মেট্রোপলিটন পুলিশ এর  বিভাগের দায়িত্বে নিয়োজিত ছিলেন।
// 			<br/>
// মোঃ মনিরুল ইসলাম ১৯৭০ সালের ১৫ই জুন গোপালগঞ্জ জেলার এক সম্ভ্রান্ত মুসলিম পরিবারে জন্মগ্রহণ করেন।  তিনি ঢাকা বিশ্ববিদ্যালয়ের ইংরেজি বিভাগ থেকে স্নাতক এবং স্নাতকোত্তর ডিগ্রি অর্জন করেন। এর পাশাপাশি তিনি ঢাকা বিশ্ববিদ্যালয় থেকে ক্রিমিনোলজি এন্ড ক্রিমিনাল জাস্টিস বিষয়ে স্নাতকোত্তর ডিগ্রি অর্জন করেন। কর্মজীবনে তিনি দেশ এবং দেশের বাইরে টেরোরিজম, কাউন্টার টেরোরিজম এবং ট্রান্সন্যাশনাল ক্রাইম (সিটিটিসি) এর উপরে বিভিন্ন প্রশিক্ষণ অর্জন করেন। ব্যাক্তি জীবনে তিনি বিবাহিত এবং __ সন্তানের জনক।
// 		</p>  `,
//   },
//   {
//     img: img1,
//     name: "চৌধুরী আবদুল্লাহ আল-মামুন, বিপিএম (বার), পিপিএম",
//     title: "প্রধান পৃষ্ঠপোষক, বাংলাদেশ পুলিশ সার্ভিস এসোসিয়েশন",
//     text: `<p>বাংলাদেশ পুলিশ সার্ভিস এসোসিয়েশনের প্রধান পৃষ্ঠপোষক জনাব চৌধুরী আবদুল্লাহ আল-মামুন, বিপিএম (বার), পিপিএম মহোদয় ৩০ সেপ্টেম্বর ২০২২ খ্রি.বাংলাদেশ পুলিশের ইন্সপেক্টর জেনারেল অব পুলিশ (আইজিপি) হিসেবে দায়িত্বভার গ্রহণ করেন। আইজিপি হিসেবে যোগদানের পূর্বে তিনি র‌্যাব ফোর্সেসের মহাপরিচালক ছিলেন। তিনি ১৯৬৪ সালের ১২ জানুয়ারি সুনামগঞ্জ জেলার শাল্লা থানার শ্রীহাইল গ্রামের এক সম্ভ্রান্ত মুসলিম পরিবারে জন্মগ্রহণ করেন। তিনি চট্টগ্রাম বিশ্ববিদ্যালয় থেকে সমাজবিজ্ঞানে স্মাতকসম্মান ও স্মাতকোত্তর ডিগ্রি লাভ করেন।
// 			<br/>
//  তিনি ১৯৮৯ সালের ২০ ডিসেম্বর ৮ম বিসিএস (পুলিশ) ব্যাচে সহকারী পুলিশ সুপার হিসেবে বাংলাদেশ পুলিশে যোগদান করেন। বর্ণাঢ্য কর্মজীবনে তিনি অত্যন্ত সততা, দক্ষতা, নিষ্ঠা ও পেশাদারিত্বের সাথে বাংলাদেশ পুলিশের বিভিন্ন ইউনিটে দায়িত্ব পালন করেন। তিনি নীলফামারী জেলার পুলিশ সুপার ছিলেন। ডিএমপি-তে উপ-পুলিশ কমিশনার, পুলিশ হেডকোয়ার্টার্সে এআইজি (সংস্থাপন) ও এআইজি (গোপনীয়) এবং ঢাকা রেঞ্জের অতিরিক্ত ডিআইজি ছিলেন তিনি।
// 			<br/>
// 			<br/>
// বাংলাদেশ পুলিশে অসামান্য অবদানের স্বীকৃতি হিসেবে তিনি বাংলাদেশ পুলিশ পদক (বিপিএম) এবং রাষ্ট্রপতি পুলিশ পদক (পিপিএম)-এ ভূষিত হয়েছেন। তিনি আন্তর্জাতিক পরিমন্ডলে জাতিসংঘ শান্তিরক্ষা মিশনে বসনিয়া-হার্জেগোভিনা, লাইবেরিয়া এবং দারফুরে গুরুত্বপূর্ণ ভূমিকা রেখেছেন। জনাব চৌধুরী আবদুল্লাহ আল-মামুন, বিপিএম (বার), পিপিএম বিশ্বের বিভিন্ন দেশে আন্তর্জাতিক সভা-সেমিনার ও সিম্পোজিয়ামে অংশ নিয়েছেন। ব্যক্তি জীবনে তিনি বিবাহিত এবং তাঁর চিকিৎসক স্ত্রী সহযোগী অধ্যাপক হিসেবে হলিফ্যামিলি রেড ক্রিসেন্ট মেডিক্যাল কলেজে কর্মরত রয়েছেন। তিনি দুই পুত্র ও এক কন্যা সন্তানের জনক।
// 			<br/>
// 			<br/>
// 		</p> `,
//   },
//   {
//     img: img3,
//     name: "Md. Asaduzzaman",
//     title: "উপ-পুলিশ কমিশনার (ডিবি-মতিঝিল), ডিএমপি, ঢাকা",
//     text: `<p>বাংলাদেশ পুলিশ সার্ভিস এসোসিয়েশন এর সাধারণ সম্পাদক জানাব মোঃ আসাদুজ্জামান, পি পি এম (বার) ২৩ অগাস্ট ২০২২ ঢাকা জেলা পুলিশ সুপার হিসাবে যোগদান করেন।  ঢাকা জেলা পুলিশ সুপার হিসাবে যোগদানের পূর্বে তিনি ডিসি হিসাবে গুলশান বিভাগে কর্মরত ছিলেন।
// 			<br/>
// তিনি ২০০৬ সালের ২১শে অগাস্ট ২৫তম বিসিএস (পুলিশ) ব্যাচে সহকরী পুলিশ সুপার হিসাবে বাংলাদেশ পুলিশে  যোগদান করেন।   বর্ণাঢ্য চাকুরী জীবনে তিনি অত্যন্ত সততা, দক্ষতা, নিষ্ঠা ও পেশাদারিত্বের সাথে বাংলাদেশ পুলিশের বিভিন্ন ইউনিট এ দায়িত্ব পালন করেন। তিনি ডিসি হিসাবে মতিঝিল, গোয়েন্দা ও কাউন্টার টেরোরিজম বিভাগের দায়িত্বে নিয়োজিত ছিলেন।
// 			<br/>
// মোঃ আসাদুজ্জামান ১৯৭৭ সালের ২রা অক্টোবর রংপুর শহরের এক বর্ণাঢ্য সম্ভ্রান্ত মুসলিম পরিবারে জন্মগ্রহণ করেন।  তিনি ঢাকা বিশ্ববিদ্যালয়ের প্রাণ রসায়ন বিভাগ থেকে স্নাতক এবং স্নাতকোত্তর ডিগ্রি অর্জন করেন।  ব্যাক্তি জীবনে তিনি বিবাহিত এবং দুই সন্তানের জনক।
// 			<br/>
// 			<br/>
// 		</p> `,
//   },
// ];

const LeaderShipComponent = () => {
  const [currenLeaderData, setCurrentLeaderData] = useState([]);

  const getFetchCurrenLeaderData = async () => {
    const result = await GetLeadershipData();

    if (result?.status === "success") {
      setCurrentLeaderData(result?.data?.leadership);
    }
  };

  useEffect(() => {
    getFetchCurrenLeaderData();
  }, []);
  return (
    <div>
      <Container className="my-5">
        <HeadingComponent1
          first="Current  "
          second="Leadership"
          className="text-center pb-3 text-main mb-4"
        />

        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
        >
          {currenLeaderData &&
            currenLeaderData?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" border p-4">
                    <Row>
                      <Col className="text-center" md={3}>
                        <ImageComponent
                          image={item?.photo}
                          className="w-[200px] h-[200px] block mx-auto mb-1 object-contain"
                        />
                        <p className="text-main text-lg m-0 ">{item?.name}</p>

                        <p className="text-second">{item?.BPSA_Designation}</p>
                        {/* <div className="flex items-center justify-center text-main space-x-3">
                        <FbIcon size={28} />
                        <LinkedInIcon size={28} />
                        <TwitterIcon size={28} />
                      </div> */}
                      </Col>
                      <Col md={9}>
                        <h4 className="text-main font-semibold">
                          {item?.Official_designation}
                        </h4>
                        <div
                          className="text-justify"
                          dangerouslySetInnerHTML={{ __html: item?.note }}
                        ></div>
                      </Col>
                    </Row>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </div>
  );
};

export default LeaderShipComponent;
