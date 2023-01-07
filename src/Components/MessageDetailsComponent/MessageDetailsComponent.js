import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/Image/messages/President_2021_Stamp.jpg";
import img2 from "../../assets/Image/messages/আসাদুজ্জামান.jpg";
import img3 from "../../assets/Image/messages/IGP_Image.jpeg";
import ImageComponent from "../Common/ImageComponent";
import { GetMessageDetails } from "../../api";
import { useParams } from "react-router-dom";
import Loading from "../Common/Loader";

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
// বাংলাদেশ পুলিশ সার্ভিস অ্যাসোসিয়েশন এর সাধারণ সম্পাদক জানাব মোঃ আসাদুজ্জামান, পি পি এম (বার) ২৩ অগাস্ট ২০২২ ঢাকা জেলা পুলিশ সুপার হিসাবে যোগদান করেন।  ঢাকা জেলা পুলিশ সুপার হিসাবে যোগদানের পূর্বে তিনি ডিসি হিসাবে গুলশান বিভাগে কর্মরত ছিলেন।
// 			<br/>
// তিনি ২০০৬ সালের ২১শে অগাস্ট ২৫তম বিসিএস (পুলিশ) ব্যাচে সহকরী পুলিশ সুপার হিসাবে বাংলাদেশ পুলিশে  যোগদান করেন।   বর্ণাঢ্য চাকুরী জীবনে তিনি অত্যন্ত সততা, দক্ষতা, নিষ্ঠা ও পেশাদারিত্বের সাথে বাংলাদেশ পুলিশের বিভিন্ন ইউনিট এ দায়িত্ব পালন করেন। তিনি ডিসি হিসাবে মতিঝিল, গোয়েন্দা ও কাউন্টার টেরোরিজম বিভাগের দায়িত্বে নিয়োজিত ছিলেন।
// 			<br/>
// মোঃ আসাদুজ্জামান ১৯৭৭ সালের ২রা অক্টোবর রংপুর শহরের এক বর্ণাঢ্য সম্ভ্রান্ত মুসলিম পরিবারে জন্মগ্রহণ করেন।  তিনি ঢাকা বিশ্ববিদ্যালয়ের প্রাণ রসায়ন বিভাগ থেকে স্নাতক এবং স্নাতকোত্তর ডিগ্রি অর্জন করেন।  ব্যাক্তি জীবনে তিনি বিবাহিত এবং দুই সন্তানের জনক।
// 			<br/>
// 		</p>`,
//   },
// ];

// সভাপতি
// প্রধান পৃষ্ঠপোষক
// সাধারণ সম্পাদক
// বাংলাদেশ পুলিশ সার্ভিস অ্যাসোসিয়েশন

const MessageDetailsComponent = () => {
  const [messageShow, setMessageShow] = useState("Chief");
  const [msgData, setMsgData] = useState("");
  const [loading, setLoading] = useState(false);
  const { messageId } = useParams();
  console.log(
    "🚀 ~ file: MessageDetailsComponent.js:34 ~ MessageDetailsComponent ~ messageId",
    messageId
  );

  const getDetials = async () => {
    setLoading(true);
    const result = await GetMessageDetails(messageId);
    setLoading(false);
    console.log(
      "🚀 ~ file: MessageDetailsComponent.js:35 ~ getDetials ~ result",
      result?.data?.massegedetials[0]
    );

    setMsgData(result?.data?.massegedetials[0]);
  };

  useEffect(() => {
    getDetials();
  }, []);

  if (loading || !msgData) {
    return <Loading />;
  }
  return (
    <div>
      <div className="bg-main w-full py-10 text-center text-white">
        <h2>বাংলাদেশ পুলিশ সার্ভিস অ্যাসোসিয়েশন</h2>
        <h2>কেন্দ্রীয় কার্যনির্বাহী কমিটি-২০২১</h2>
        <h2>LEADERSHIP MESSAGES</h2>
      </div>
      {/* <div className="flex items-center justify-center space-x-10 py-4">
        <button className=" px-4 py-2 bg-second text-white">President</button>
        <button className=" px-4 py-2 bg-second text-white">
          Chief Patron
        </button>
        <button className=" px-4 py-2 bg-second text-white">Secretary</button>
      </div> */}

      <Container className="my-6">
        <h5 className="text-center text-sm md:text-xl">
          {msgData?.Name} <br />
        </h5>
        <h5 className="text-center text-sm font-semibold md:text-xl">
          {msgData?.BPSA_Designation.split(",")[0]}
        </h5>
        <h5 className="text-center text-sm font-semibold md:text-xl">
          {msgData?.BPSA_Designation.split(",")[1]}
        </h5>

        <div className="text-center">
          <ImageComponent
            image={msgData?.photo}
            className="w-[150px] h-[150px] object-contain rounded-md block mx-auto my-3"
          />
        </div>
        <h5 className="text-center font-semibold text-sm md:text-xl">
          {msgData?.name}
        </h5>
        <h5 className="text-center font-semibold text-sm md:text-xl">
          {msgData?.Official_designation}
        </h5>

        <Row>
          <Col md={8} className="mx-auto my-4">
            <div dangerouslySetInnerHTML={{ __html: msgData?.note }}></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MessageDetailsComponent;
