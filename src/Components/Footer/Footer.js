import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FbIcon, LinkedInIcon, TwitterIcon } from "../../assets/Icons/Icons";
import logo from "../../assets/Image/logo/BPSA-11.jpg";
import ImageComponent from "../Common/ImageComponent";

const Footer = () => {
  return (
    <div className="bg-main text-white py-4">
      <Container>
        <Row className="space-y-3">
          <Col className="space-y-4" md={3}>
            <ImageComponent image={logo} className="w-[100px] block mx-auto" />
            <h4>Bangladesh Police Service Association </h4>
            <div className="flex">
              {" "}
              <FbIcon size={24} className=" text-white" />
              <LinkedInIcon size={24} className="mx-4 text-white" />
              <TwitterIcon size={24} className=" text-white" />
            </div>
          </Col>
          <Col md={3}>
            <ul className="space-y-3 m-0 p-0">
              <p className="font-semibold text-lg">Resources</p>
              <li>
                {" "}
                <Link className="text-white" to="/about">
                  About us
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/message">
                  Message
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/executive-board">
                  Executive Board
                </Link>
              </li>
              <li>
                {" "}
                <Link className="text-white" to="/notice">
                  Notice
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/news">
                  News
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="space-y-3 m-0 p-0">
              <p className="font-semibold text-lg"> Important Links</p>
              <li>
                {" "}
                <Link className="text-white" to="/about">
                  Bangladesh Police
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/message">
                  BP Association
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/executive-board">
                  DMP
                </Link>
              </li>
              <li>
                {" "}
                <Link className="text-white" to="/notice">
                  RAB
                </Link>
              </li>
              <li>
                <Link className="text-white" to="/news">
                  BD Army
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <p className="font-semibold text-lg"> Contact</p>
            <p> Email: contact@bpsa.org </p>
            <p> Phone: +880176155413 Mintu Road, Panthapath, Dhaka-1208</p>
          </Col>
        </Row>
        <hr />
        <div className="flex items-center justify-center flex-wrap-reverse">
          <div className="text-sm text-center">
            <p className="m-0 pb-2">
              Copyright © {new Date().getFullYear()} All rights reserved.
              Bangladesh Police Service Association
            </p>
            <p>
              Design and Developed By :
              <a
                className="text-white ml-1"
                href="https://www.techsimpleict.com/"
                target="_blank"
                rel="noreferrer"
              >
                TechSimple ICT
              </a>{" "}
            </p>
          </div>

          {/* <p className="text-sm">
            PRIVACY POLICY | SOCIAL MEDIA POLICY | COPYRIGHT | FAQ | TERMS OF
            USE
          </p> */}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
