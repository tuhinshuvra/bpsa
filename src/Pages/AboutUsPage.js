import React from "react";
import { Container } from "react-bootstrap";
import ActivitiesComp from "../Components/AboutUsComponent/ActivitiesComp";
import AssociationInfoComponent from "../Components/AboutUsComponent/AssociationInfoComponent";
import HeroComponent1 from "../Components/Common/HeroComponent1";

const AboutUsPage = () => {
  return (
    <div>
      <HeroComponent1 title="About Us" />
      <AssociationInfoComponent />
      <ActivitiesComp />
    </div>
  );
};

export default AboutUsPage;
