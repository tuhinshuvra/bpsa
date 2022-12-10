import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Image/logo/BPSF Logo SVG 1.png";
import ButtonComponent from "../Common/ButtonComponent";
import ImageComponent from "../Common/ImageComponent";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <div className=" flex items-center justify-between bg-main px-20 py-2">
          <div className="">
            <ImageComponent
              image={logo}
              alt="logo"
              className="w-[70px]  object-contain"
            />
          </div>
          <div className="flex items-end space-x-5 ">
            <NavLink
              className={(active) =>
                active?.isActive
                  ? "text-white font-semibold hover:text-white"
                  : "text-white hover:text-white	"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? "text-white font-semibold hover:text-white"
                  : "text-white hover:text-white	"
              }
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? "text-white font-semibold hover:text-white"
                  : "text-white hover:text-white	"
              }
              to="/committee"
            >
              Committee
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? "text-white font-semibold hover:text-white"
                  : "text-white hover:text-white	"
              }
              to="/notice"
            >
              Notice
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? "text-white font-semibold hover:text-white"
                  : "text-white hover:text-white	"
              }
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? "text-white font-semibold hover:text-white"
                  : "text-white hover:text-white	"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
          <div className="">
            {" "}
            <ButtonComponent
              title="Member Login"
              className="bg-second rounded-md px-3 py-2 text-white"
            />
          </div>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between bg-main px-1 py-2">
        <div className="">
          <MobileMenu />
        </div>
        <div className="">
          <div className="">
            <ImageComponent
              image={logo}
              alt="logo"
              className="w-[70px]  object-contain"
            />
          </div>
        </div>
        <div className="">
          {" "}
          <ButtonComponent
            title="Login"
            className="bg-second rounded-md px-3 py-2 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
