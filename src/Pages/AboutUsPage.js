import React from "react";
import { Container } from "react-bootstrap";
import ActivitiesComp from "../Components/AboutUsComponent/ActivitiesComp";
import AssociationInfoComponent from "../Components/AboutUsComponent/AssociationInfoComponent";
import FormerLeaderShip from "../Components/AboutUsComponent/FormerLeaderShip";
import LeaderShipComponent from "../Components/AboutUsComponent/LeaderShipComponent";
import ObjectivesComponent from "../Components/AboutUsComponent/ObjectivesComponent";
import HeroComponent1 from "../Components/Common/HeroComponent1";

const AboutUsPage = () => {
  return (
    <div>
      <HeroComponent1 title="About Us" />
      <AssociationInfoComponent />
      <ActivitiesComp />
      <ObjectivesComponent />
      <LeaderShipComponent />
      <FormerLeaderShip />
    </div>
  );
};

export default AboutUsPage;
