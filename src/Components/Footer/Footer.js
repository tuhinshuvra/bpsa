import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { SiYoutubemusic } from 'react-icons/si';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import Logo from "../../assets/Image/logo/WhatsApp_Image_2023-01-05_at_15.56.30-removebg-preview.png";
import ImageComponent from "../Common/ImageComponent";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-main pt-3   footerArea">
      <div className="container d-lg-flex mt-3">
        <div className="col-12 col-lg-3  d-flex  flex-column justify-content-center align-items-center">
          <div className='d-flex justify-content-center'>
            <Link to="/"> <img className='footer_logo' src={Logo} alt="" /></Link>
          </div>
          <p className="text-center fw-bold mt-2 text-white">Bangladesh Police Service Association</p>
        </div>

        <div className="col-12 col-lg-9 d-lg-flex" >
          <div className="col-lg-6  ">
            <h5 className='text-center fw-bold text-white '>Hot Link</h5>
            <ul className="nav flex-column">
              <li className="mb-1 text-center"><Link to="https://pmo.gov.bd" className="  footer_btn fw-bold" target="_blank">The Prime Minister's Office</Link></li>
              <li className="mb-1 text-center"><Link to="https://www.police.gov.bd" className="  footer_btn fw-bold" target="_blank">Bangldesh Plice</Link></li>
              <li className="mb-1 text-center"><Link to="https://dmp.gov.bd/" className="  footer_btn fw-bold" target="_blank">Dhaka Metropolitan Police</Link></li>
              <li className="mb-1 text-center"><Link to="https://www.rab.gov.bd/" className="  footer_btn fw-bold" target="_blank">Rapid Action Battalion (RAB)</Link></li>
              <li className="mb-1 text-center"><Link to="https://www.cid.gov.bd/" className="  footer_btn fw-bold" target="_blank">Criminal Investigation Department(CID)</Link></li>
            </ul>
          </div>

          <div className="col-lg-6  text-center   mb-3 my-lg-0 my-3">
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

      <hr className="text-white" />

      <div className=" d-flex justify-content-center my-1">
        <div className="d-flex gap-1 ">
          <a className="text-decoration-none text-white fs-4" href="https://www.facebook.com/bdpolsa" target="_blank" rel="noreferrer">  <FaFacebook></FaFacebook> </a>
          <a className="text-decoration-none text-white fs-4" href="https://www.youtube.com/@bangladeshpoliceofficialch1871" target="_blank" rel="noreferrer">   <SiYoutubemusic></SiYoutubemusic></a>
          <a className="text-decoration-none text-white fs-4" href="https://twitter.com/bd_police?lang=en" target="_blank" rel="noreferrer">   <AiFillTwitterCircle></AiFillTwitterCircle></a>
        </div>
      </div>

      <div>
        <p className='text-center mb-lg-0 pb-lg-1 pb-3  text-white'>
          Copyright © {new Date().getFullYear()} All rights reserved. Bangladesh Police Service Association <br />
          Design and Developed By :
          <a
            className="text-white ml-1"
            href="https://www.techsimpleict.com/"
            target="_blank"
            rel="noreferrer"
          >
            TechSimple ICT
          </a>
        </p>
      </div>
    </footer >
  );
};

export default Footer;
