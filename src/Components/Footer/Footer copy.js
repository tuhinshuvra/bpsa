import React from "react";
import { Button, Col, Container, Image, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { SiYoutubemusic } from 'react-icons/si';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import Logo from "../../assets/Image/logo/WhatsApp_Image_2023-01-05_at_15.56.30-removebg-preview.png";
import PMOFFICE from '../../assets/Image/quick_link_photo/logo-PM_Office.png';
import POLICE from '../../assets/Image/quick_link_photo/police_logo.png';
import DMP from '../../assets/Image/quick_link_photo/DMP_Logo.png';
import RAB from '../../assets/Image/quick_link_photo/rab_logo.png';
import BPA from '../../assets/Image/quick_link_photo/Logo_of_Police_Academy_BD.jpg';
import SSF from '../../assets/Image/quick_link_photo/ssf_logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-main pt-3   footerArea">
      <div className="container d-lg-flex mt-3">


        <div className="col-lg-12 d-lg-flex" >
          <div className="col-lg-3 col-6 mx-auto mb-2 mb-md-0  ">
            <h5 className='text-center fw-bold text-white '>Hot Link</h5>

            <div className=" col-md-6 mx-auto d-flex justify-content-between">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip
                    id="button-tooltip-2"
                    style={{ fontSize: "10px" }}
                  >
                    Prime Minister Office
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <Link to="https://pmo.gov.bd/"  {...triggerHandler} className="d-inline-flex align-items-center" target="_blank">
                    <Image
                      className="footerQuickLinkLogo"
                      ref={ref}
                      roundedCircle
                      src={PMOFFICE}
                    />
                  </Link>
                )}
              </OverlayTrigger>
              <OverlayTrigger

                placement="top"
                overlay={
                  <Tooltip
                    id="button-tooltip-2"
                    style={{ fontSize: "10px" }}
                  >
                    Bangladesh Police
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <Link to="https://www.police.gov.bd"  {...triggerHandler} className="d-inline-flex align-items-center" target="_blank">
                    <Image
                      className="footerQuickLinkLogo"
                      ref={ref}
                      roundedCircle
                      src={POLICE}
                    />
                  </Link>
                )}
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip
                    id="button-tooltip-2"
                    style={{ fontSize: "10px", background: "white" }}
                  >
                    Bangladesh Police Academy
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <Link to="https://bpa.police.gov.bd/"  {...triggerHandler} className="d-inline-flex align-items-center" target="_blank">
                    <Image
                      className="footerQuickLinkLogo"
                      ref={ref}
                      roundedCircle
                      src={BPA}
                    />
                  </Link>
                )}
              </OverlayTrigger>
            </div>


            <div className=" col-md-6 mx-auto d-flex justify-content-between mt-2">
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip
                    id="button-tooltip-2"
                    style={{ fontSize: "10px" }}
                  >
                    Dhaka Metropolitan Police(DMP)
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <Link to="https://dmp.gov.bd/"  {...triggerHandler} className="d-inline-flex align-items-center" target="_blank">
                    <Image
                      className="footerQuickLinkLogo"
                      ref={ref}
                      roundedCircle
                      src={DMP}
                    />
                  </Link>
                )}
              </OverlayTrigger>
              <OverlayTrigger

                placement="top"
                overlay={
                  <Tooltip
                    id="button-tooltip-2"
                    style={{ fontSize: "10px" }}
                  >
                    Rapid Action Battalion(RAB)
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <Link to="https://www.rab.gov.bd/"  {...triggerHandler} className="d-inline-flex align-items-center" target="_blank">
                    <Image
                      className="footerQuickLinkLogo"
                      ref={ref}
                      roundedCircle
                      src={RAB}
                    />
                  </Link>
                )}
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip
                    id="button-tooltip-2"
                    style={{ fontSize: "10px" }}
                  >
                    Special Security Force
                  </Tooltip>
                }
              >
                {({ ref, ...triggerHandler }) => (
                  <Link to="https://www.ssf.gov.bd/"  {...triggerHandler} className="d-inline-flex align-items-center" target="_blank">
                    <Image
                      className="footerQuickLinkLogo"
                      ref={ref}
                      roundedCircle
                      src={SSF}
                    />
                  </Link>
                )}
              </OverlayTrigger>
            </div>

          </div>

          <div className="col-lg-6  d-flex  flex-column">
            <div className='d-flex justify-content-center'>
              <Link to="/"> <img className='footer_logo' src={Logo} alt="" /></Link>
            </div>
            <h4 className="text-center fw-bold mt-2 text-white">বাংলাদেশ পুলিশ সার্ভিস এসোসিয়েশন</h4>


            <div className=" d-flex justify-content-center my-1">
              <div className="d-flex gap-3 ">
                <a className="text-decoration-none text-white fs-4" href="https://www.facebook.com/bdpolsa" target="_blank" rel="noreferrer">  <FaFacebook></FaFacebook> </a>
                <a className="text-decoration-none text-white fs-4" href="https://www.youtube.com/@bangladeshpoliceofficialch1871" target="_blank" rel="noreferrer">   <SiYoutubemusic></SiYoutubemusic></a>
                <a className="text-decoration-none text-white fs-4" href="https://twitter.com/bd_police?lang=en" target="_blank" rel="noreferrer">   <AiFillTwitterCircle></AiFillTwitterCircle></a>
              </div>
            </div>

            <div className=" text-center">
              <small className=' mb-lg-0 pb-lg-1 pb-3  text-white'>
                <span className=" mb-0">  Copyright © {new Date().getFullYear()} All rights reserved </span> <br /> Bangladesh Police Service Association
              </small>
            </div>

          </div>

          <div className="col-lg-3  text-center my-lg-0">
            <h5 className=' text-center fw-bold text-white'>Contact</h5>
            <p className=" my-0 text-white" > <b> Email: </b> bpsa2020@gmail.com</p>
            <p className=" my-0 text-white"> <b> Phone:</b> +880248320808 </p>
            <p className=" mt-2 text-white">
              Room No-606 (5th Floor) <br />
              Dhaka Metropolitan Police Headquarters, <br />
              36 Sohid Captain Monsur Ali Soroni, Dhaka-1000
            </p>
          </div>

        </div>
      </div>

      <hr className="text-white my-0" />



      <div>
        <small className='text-center mb-lg-0 pb-lg-1 float-right  mb-0 pb-0  me-2 text-white'>
          Powered By :
          <a
            className="text-white ml-1"
            href="https://www.techsimpleict.com/"
            target="_blank"
            rel="noreferrer"
          >
            TechSimple ICT
          </a>
        </small>
      </div>
    </footer >
  );
};

export default Footer;
