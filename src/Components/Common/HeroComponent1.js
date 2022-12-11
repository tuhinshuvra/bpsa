import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroComponent1 = ({ title }) => {
  return (
    <div>
      <div className="bg-main h-[300px]  relative  -mt-[85px]">
        <h2 className="uppercase text-center text-white  w-full h-full flex items-center justify-center">
          {title}
        </h2>
        <Container>
          <button className="bg-white px-10 py-2 border absolute bottom-0  ">
            <Link to="/" className="text-main underline">
              Home
            </Link>{" "}
            <span className="font-semibold text-2xl text-gray-500">.</span>{" "}
            <span className="text-second font-semibold ">{title}</span>
          </button>
        </Container>
      </div>
    </div>
  );
};

export default HeroComponent1;
