import React from "react";
import { Container } from "react-bootstrap";
import NoticeLine from "../Components/Common/NoticeLine";
import GalleryComp from "../Components/HomeComponent/GalleryComp/GalleryComp";
import HeroSlider from "../Components/HomeComponent/HeroSlider/HeroSlider";
import HighlightComponent from "../Components/HomeComponent/HighlightComponent/HighlightComponent";
import QuicksLinks from "../Components/HomeComponent/QuicksLinks/QuicksLinks";
import SummaryComp from "../Components/HomeComponent/SummaryComp/SummaryComp";
import TestimonialComponent from "../Components/HomeComponent/TestimonialComponent/TestimonialComponent";
import UpcommingEvents from "../Components/HomeComponent/UpcommingEvents/UpcommingEvents";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <NoticeLine />
      <Container>
        <HighlightComponent />
        <UpcommingEvents />
      </Container>

      <div className="bg-[#EFF0FC] py-5">
        <QuicksLinks />
      </div>
      <Container>
        <TestimonialComponent />
      </Container>
      <SummaryComp />
      <GalleryComp />
    </div>
  );
};

export default HomePage;
