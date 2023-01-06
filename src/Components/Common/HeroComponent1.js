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
          <button className="flex items-center bg-white py-1 px-2 md:px-6 md:py-3 border absolute bottom-0  ">
            <Link
              to="/"
              className="text-main underline text-[14px] md:text-[16px]"
            >
              Home
            </Link>{" "}
            <span className=" font-semibold  text-gray-500">
              <ArrowRight size={22} className="text-second" />
            </span>{" "}
            <span className="text-second font-semibold text-[12px] md:text-[14px]">
              {title}
            </span>
          </button>
        </Container>
      </div>
    </div>
  );
};

export default HeroComponent1;
