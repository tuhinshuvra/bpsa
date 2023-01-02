import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/Image/messages/President_2021_Stamp.jpg";
import img2 from "../../assets/Image/messages/আসাদুজ্জামান.jpg";
import img3 from "../../assets/Image/messages/IGP_Image.jpeg";
import ImageComponent from "../Common/ImageComponent";

// const messageData = [
//   {
//     title: "President",
//     msg: `<p>সেক্রেটারি
// 			<br/>
// মোঃ আসাদুজ্জামান, পি পি এম (বার)
// 			<br/>
// এস পি
// 			<br/>
// জেলা পুলিশ সুপার, ঢাকা জেলা
// 			<br/>
// বাংলাদেশ পুলিশ সার্ভিস এসোসিয়েশন এর সাধারণ সম্পাদক জানাব মোঃ আসাদুজ্জামান, পি পি এম (বার) ২৩ অগাস্ট ২০২২ ঢাকা জেলা পুলিশ সুপার হিসাবে যোগদান করেন।  ঢাকা জেলা পুলিশ সুপার হিসাবে যোগদানের পূর্বে তিনি ডিসি হিসাবে গুলশান বিভাগে কর্মরত ছিলেন।
// 			<br/>
// তিনি ২০০৬ সালের ২১শে অগাস্ট ২৫তম বিসিএস (পুলিশ) ব্যাচে সহকরী পুলিশ সুপার হিসাবে বাংলাদেশ পুলিশে  যোগদান করেন।   বর্ণাঢ্য চাকুরী জীবনে তিনি অত্যন্ত সততা, দক্ষতা, নিষ্ঠা ও পেশাদারিত্বের সাথে বাংলাদেশ পুলিশের বিভিন্ন ইউনিট এ দায়িত্ব পালন করেন। তিনি ডিসি হিসাবে মতিঝিল, গোয়েন্দা ও কাউন্টার টেরোরিজম বিভাগের দায়িত্বে নিয়োজিত ছিলেন।
// 			<br/>
// মোঃ আসাদুজ্জামান ১৯৭৭ সালের ২রা অক্টোবর রংপুর শহরের এক বর্ণাঢ্য সম্ভ্রান্ত মুসলিম পরিবারে জন্মগ্রহণ করেন।  তিনি ঢাকা বিশ্ববিদ্যালয়ের প্রাণ রসায়ন বিভাগ থেকে স্নাতক এবং স্নাতকোত্তর ডিগ্রি অর্জন করেন।  ব্যাক্তি জীবনে তিনি বিবাহিত এবং দুই সন্তানের জনক।
// 			<br/>
// 		</p>`,
//   },
// ];

const MessageDetailsComponent = () => {
  const [messageShow, setMessageShow] = useState("Chief");
  return (
    <div>
      <div className="bg-main w-full py-10 text-center text-white">
        <h2>বাাংলাদেশ পুললশ সালভিস এদসালসদেশন</h2>
        <h4>কেন্দ্রীয় কার্যনির্বাহী কমিটি-২০২১</h4>
        <h4>Leadership Message</h4>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4">
        <button className=" px-4 py-2 bg-second text-white">President</button>
        <button className=" px-4 py-2 bg-second text-white">
          Chief Patron
        </button>
        <button className=" px-4 py-2 bg-second text-white">Secretary</button>
      </div>

      <Container>
        <div className="text-center">
          <h3>President, Bangladesh Police Service Association</h3>
          <ImageComponent
            className="block mx-auto w-[200px] object-contain py-4"
            image={img1}
          />
          <h4>Md. Asaduzzaman</h4>
          <h4>উপ-পুলিশ কমিশনার (ডিবি-মতিঝিল), ডিএমপি, ঢাকা</h4>
        </div>
        <Row>
          <Col md={8} className="mx-auto my-4">
            <p>
              বাংলাদেশ পুলিশ সার্ভিস এসোসিয়েশন এর সাধারণ সম্পাদক জানাব মোঃ
              আসাদুজ্জামান, পি পি এম (বার) ২৩ অগাস্ট ২০২২ ঢাকা জেলা পুলিশ সুপার
              হিসাবে যোগদান করেন। ঢাকা জেলা পুলিশ সুপার হিসাবে যোগদানের পূর্বে
              তিনি ডিসি হিসাবে গুলশান বিভাগে কর্মরত ছিলেন।
              <br /> <br />
              তিনি ২০০৬ সালের ২১শে অগাস্ট ২৫তম বিসিএস (পুলিশ) ব্যাচে সহকরী পুলিশ
              সুপার হিসাবে বাংলাদেশ পুলিশে যোগদান করেন। বর্ণাঢ্য চাকুরী জীবনে
              তিনি অত্যন্ত সততা, দক্ষতা, নিষ্ঠা ও পেশাদারিত্বের সাথে বাংলাদেশ
              পুলিশের বিভিন্ন ইউনিট এ দায়িত্ব পালন করেন। তিনি ডিসি হিসাবে
              মতিঝিল, গোয়েন্দা ও কাউন্টার টেরোরিজম বিভাগের দায়িত্বে নিয়োজিত
              ছিলেন।
              <br /> <br />
              মোঃ আসাদুজ্জামান ১৯৭৭ সালের ২রা অক্টোবর রংপুর শহরের এক বর্ণাঢ্য
              সম্ভ্রান্ত মুসলিম পরিবারে জন্মগ্রহণ করেন। তিনি ঢাকা
              বিশ্ববিদ্যালয়ের প্রাণ রসায়ন বিভাগ থেকে স্নাতক এবং স্নাতকোত্তর
              ডিগ্রি অর্জন করেন। ব্যাক্তি জীবনে তিনি বিবাহিত এবং দুই সন্তানের
              জনক।
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MessageDetailsComponent;
