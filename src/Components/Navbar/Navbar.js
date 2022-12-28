import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UsersIcon } from "../../assets/Icons/Icons";
import logo from "../../assets/Image/logo/BPSA-11.jpg";
import ButtonComponent from "../Common/ButtonComponent";
import ImageComponent from "../Common/ImageComponent";
import MobileMenu from "./MobileMenu";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(false);
  const [navColor, setNavColor] = useState("");

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 200) {
        setNavColor(true);
        // if scroll down hide the navbar

        setShow(true);
      } else {
        setNavColor(false);
        // if scroll up show the navbar
        setShow(false);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div style={{ zIndex: 999 }} className="sticky top-0">
      <div className="hidden md:block">
        <div
          className={`flex items-center justify-between ${
            location?.pathname === "/"
              ? `${navColor ? "bg-main" : "bg-transparent"}`
              : "bg-main"
          }  px-20 py-2`}
        >
          <div onClick={() => navigate("/")} className="cursor-pointer">
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
                  ? `${Styles.activenav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
                  : `${Styles.normalnav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
                  : `${Styles.normalnav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
                  : `${Styles.normalnav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
              }
              to="/committee"
            >
              Committee
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
                  : `${Styles.normalnav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
              }
              to="/notice"
            >
              Notice
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
                  : `${Styles.normalnav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
              }
              to="/news"
            >
              News
            </NavLink>

            <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
                  : `${Styles.normalnav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
              }
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
                  : `${Styles.normalnav__Style} hover:border-2 hover:border-second px-2 py-1 hover:text-white`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
          <div className="flex bg-second tracking-[1px] items-center text-white rounded-md px-3 py-2 ">
            {" "}
            <UsersIcon size={24} className="mr-2" />{" "}
            <ButtonComponent title="Member Login" className=" " />
          </div>
        </div>
      </div>

      <div
        className={`md:hidden flex items-center justify-between ${
          navColor ? "bg-main" : "bg-transparent"
        }  px-1 py-2`}
      >
        <div className="">
          <MobileMenu />
        </div>
        <div className="">
          <div onClick={() => navigate("/")} className="">
            <ImageComponent
              image={logo}
              alt="logo"
              className="w-[70px]  object-contain"
            />
          </div>
        </div>
        <div className="">
          <ButtonComponent
            title="Login"
            className="bg-second rounded-md px-3 py-2 text-white mr-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
