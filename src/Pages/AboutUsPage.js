import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { GetGalleryData } from "../api";
import ActivitiesComp from "../Components/AboutUsComponent/ActivitiesComp";
import AssociationDocumentsComponent from "../Components/AboutUsComponent/AssociationDocumentsComponent";
import AssociationInfoComponent from "../Components/AboutUsComponent/AssociationInfoComponent";
import FormerLeaderShip from "../Components/AboutUsComponent/FormerLeaderShip";
import LeaderShipComponent from "../Components/AboutUsComponent/LeaderShipComponent";
import ObjectivesComponent from "../Components/AboutUsComponent/ObjectivesComponent";
import CommonHead from "../Components/Common/CommonHead";
import HeroComponent1 from "../Components/Common/HeroComponent1";
import Loader from "../Components/Common/Loader";
import AchievementComponent from "../Components/NewsComponent/AchievementComponent";
import useTitle from "../hooks/useTitle";

const AboutUsPage = () => {
  useTitle("AboutUs")
  return (
    <div>
      <div className=' col-md-10 mx-auto'>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container pt-3 pb-5 ">
            <nav aria-label="" className="bg-light rounded-3 p-2 mb-4">
              <h2 className='fw-bold text-center text-success'>ABOUT US</h2>
            </nav>
            <div>
              <AssociationInfoComponent />
              <ObjectivesComponent />
              <ActivitiesComp />
              <LeaderShipComponent />
              <FormerLeaderShip />
              <AssociationDocumentsComponent />
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default AboutUsPage;
