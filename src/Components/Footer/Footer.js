import React from "react";
import { Button, Col, Container, Image, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { SiYoutubemusic } from 'react-icons/si';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import Logo from "../../assets/Image/logo/WhatsApp_Image_2023-01-05_at_15.56.30-removebg-preview.png";
import FooterQuickLink from "./FooterQuickLink";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-[#508BF2] py-2   footerArea">
      <div className="container d-lg-flex  ">


        <div className="col-lg-12 d-lg-flex" >
          <div className=" col-lg-9 d-lg-flex flex-md-row-reverse " >
            <div className="col-lg-8  d-lg-flex  flex-column">
              <div className=" mt-0">
                <div className='d-flex justify-content-center'>
                  <Link to="/"> <img className='footer_logo' src={Logo} alt="" /></Link>
                </div>
                <h4 className="text-center fw-bold mt-2 text-white">বাংলাদেশ পুলিশ সার্ভিস এসোসিয়েশন</h4>
              </div>


              <div className=" d-flex justify-content-center my-1">
                <div className="d-flex gap-3 ">
                  <a className="text-decoration-none text-white fs-4" href="https://www.facebook.com/bdpolsa" target="_blank" rel="noreferrer">  <FaFacebook></FaFacebook> </a>
                  <a className="text-decoration-none text-white fs-4" href="https://www.youtube.com/@bangladeshpoliceofficialch1871" target="_blank" rel="noreferrer">   <SiYoutubemusic></SiYoutubemusic></a>
                  <a className="text-decoration-none text-white fs-4" href="https://twitter.com/bd_police?lang=en" target="_blank" rel="noreferrer">   <AiFillTwitterCircle></AiFillTwitterCircle></a>
                </div>
              </div>

              <div className=" text-center  mb-lg-0 pb-lg-1 pb-3  text-white small">
                <p className=" my-0"> Copyright © {new Date().getFullYear()} All rights reserved </p>
                <p className=" my-0"> Bangladesh Police Service Association</p>
              </div>

            </div>
            <div className="col-lg-4   col-6 mx-auto my-6  ">
              <FooterQuickLink></FooterQuickLink>
            </div>
          </div>

          <div className="col-lg-3  text-center my-auto text-white">
            <h5 className=' text-center fw-bold  '>Contact</h5>
            <p className=" my-0" > <b> Email: </b> bpsa2020@gmail.com</p>
            <p className=" my-0"> <b> Phone:</b> +880248320808 </p>
            <p className=" my-0">Room No-606 (5th Floor)  </p>
            <p className=" my-0"> Dhaka Metropolitan Police Headquarters,  </p>
            <p className=" my-0"> 36 Sohid Captain Monsur Ali Soroni, Dhaka-1000 </p>
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
