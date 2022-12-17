import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../utlis/icons";

const HeroComponent1 = ({ title }) => {
  return (
    <div>
      <div className="bg-main h-[300px]  relative  -mt-[85px]">
        <h2 className="uppercase text-center text-white  w-full h-full flex items-center justify-center">
          {title}
        </h2>
        <Container>
          <button className="flex items-center bg-white px-6 py-3 border absolute bottom-0  ">
            <Link to="/" className="text-main underline">
              Home
            </Link>{" "}
            <span className="font-semibold text-2xl text-gray-500">
              <ArrowRight size={24} className="text-second" />
            </span>{" "}
            <span className="text-second font-semibold ">{title}</span>
          </button>
        </Container>
      </div>
    </div>
  );
};

export default HeroComponent1;
