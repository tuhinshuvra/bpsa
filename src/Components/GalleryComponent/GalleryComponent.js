import { List, ListItem } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ButtonComponent from "../Common/ButtonComponent";
import HeadingComponent1 from "../Common/HeadingComponent1";
import HeroComponent1 from "../Common/HeroComponent1";
import ImageComponent from "../Common/ImageComponent";
import Styles from "./GalleryComponent.module.css";
import GalleryImageCard from "./GalleryImageCard";

const GalleryData = [
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Dr. Benazir Ahmed, BPM (Bar)",
    title: "President",
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit omnis nihil molestias ad possimus ullam itaque atque dignissimos officia ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Dr. Benazir Ahmed, BPM (Bar)",
    title: "President",
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit omnis nihil molestias ad possimus ullam itaque atque dignissimos officia ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Dr. Benazir Ahmed, BPM (Bar)",
    title: "President",
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit omnis nihil molestias ad possimus ullam itaque atque dignissimos officia ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Dr. Benazir Ahmed, BPM (Bar)",
    title: "President",
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit omnis nihil molestias ad possimus ullam itaque atque dignissimos officia ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Dr. Benazir Ahmed, BPM (Bar)",
    title: "President",
    description:
      "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit omnis nihil molestias ad possimus ullam itaque atque dignissimos officia debitis officiis ",
  },
];

const GalleryComponent = ({ data }) => {
  return (
    <div>
      <HeroComponent1 title="GALLERY" />
      <Container>
        <HeadingComponent1
          first="Our "
          second="Gallery"
          className="text-center text-main py-4"
        />
        <div className=" space-x-4 flex ">
          <ButtonComponent
            title="Photos"
            className="px-5 py-2 text-white bg-second"
          />
          <ButtonComponent
            title="Videos"
            className="px-5 py-2 text-white bg-main"
          />
        </div>
        <Row className="my-5">
          <Col md={3}>
            <ul className="m-0 p-0">
              <li>All</li>
              <hr />
              <li>Food & Dining</li>
              <hr />
              <li>Food & Dining</li>
              <hr />
              <li>Food & Dining</li>
              <hr />
            </ul>
          </Col>
          <Col md={9}>
            <Row>
              {data &&
                data?.map((item, index) => {
                  return (
                    <Col key={index} md={4}>
                      <GalleryImageCard item={item} />
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryComponent;
