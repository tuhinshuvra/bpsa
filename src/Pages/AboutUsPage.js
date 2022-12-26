import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { GetGalleryData } from "../api";
import ActivitiesComp from "../Components/AboutUsComponent/ActivitiesComp";
import AssociationDocumentsComponent from "../Components/AboutUsComponent/AssociationDocumentsComponent";
import AssociationInfoComponent from "../Components/AboutUsComponent/AssociationInfoComponent";
import FormerLeaderShip from "../Components/AboutUsComponent/FormerLeaderShip";
import LeaderShipComponent from "../Components/AboutUsComponent/LeaderShipComponent";
import ObjectivesComponent from "../Components/AboutUsComponent/ObjectivesComponent";
import HeroComponent1 from "../Components/Common/HeroComponent1";
import Loader from "../Components/Common/Loader";
import AchievementComponent from "../Components/NewsComponent/AchievementComponent";

const AboutUsPage = () => {
  return (
    <div>
      <HeroComponent1 title="About Us" />
      <AssociationInfoComponent />

      <ObjectivesComponent />
      <ActivitiesComp />
      <LeaderShipComponent />
      <FormerLeaderShip />
      <AssociationDocumentsComponent />
    </div>
  );
};

export default AboutUsPage;
