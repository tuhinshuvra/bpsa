import React from "react";
import noticeImg from "../../assets/Image/Home/Group 1000001013.png";
import ImageComponent from "./ImageComponent";
import Marquee from "react-fast-marquee";

const NoticeLine = () => {
  return (
    <div className="p-3 flex items-center space-x-4">
      <ImageComponent image={noticeImg} className="w-[100px] object-contain" />
      <Marquee speed={30} gradient={false}>
        Corrigendum of International Tender Notice,(PHQ).688 Invitation for
        Local Tender (PHQ.) 1278 To Purchase Thigh Holster of 9 mm SMG (Short)
        for Bangladesh Police,(PHQ). Invitation for Local Tender,(Police telecom
        Rajarbag,Dhaka).930 Corrigendum of International Tender Notice,(PHQ).688
        Invitation for Local Tender (PHQ.) 1278 To Purchase Thigh Holster of 9
        mm SMG (Short) for Bangladesh Police,(PHQ). Invitation for Local
        Tender,(Police telecom Rajarbag,Dhaka).930
      </Marquee>
    </div>
  );
};

export default NoticeLine;
