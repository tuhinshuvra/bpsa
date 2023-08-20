import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { UsersIcon } from "../../assets/Icons/Icons";
import logo from "../../assets/Image/logo/WhatsApp_Image_2023-01-05_at_15.56.30-removebg-preview.png";
import ButtonComponent from "../Common/ButtonComponent";
import ImageComponent from "../Common/ImageComponent";
import MobileMenu from "./MobileMenu";
import Styles from "./Navbar.module.css";
import { useContext } from "react";
import { AllContext } from "../../hooks/ContextData";
import { signout } from "../../utlis/helper";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const location = useLocation();
  const { user, setUser, userDetails, setUserDetails, token, setToken, loading, setLoading } = useContext(AllContext);

  const navigate = useNavigate();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
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


  const handleSignOut = () => {
    signout(() => {
      setUser("");
      toast.success('User Logout Successfully')
      navigate("/login")
    })
  }

  return (
    <div style={{ zIndex: 999 }} className="sticky top-0">
      <div className="hidden md:block">
        <div
          className={`flex items-center justify-between ${location?.pathname === "/"
            ? `${navColor ? "bg-main" : "bg-transparent"}`
            : "bg-main"
            }  px-20 py-2`}
        >
          <div
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/");
            }}
            className="cursor-pointer"
          >
            <ImageComponent
              image={logo}
              alt="logo"
              className="w-[70px]  object-contain"
            />
          </div>
          <div
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="flex items-end space-x-5 "
          >
            <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style}   hover:text-white`
                  : `${Styles.normalnav__Style}   hover:text-white `
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style}   hover:text-white`
                  : `${Styles.normalnav__Style}   hover:text-white`
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style}   hover:text-white`
                  : `${Styles.normalnav__Style}   hover:text-white`
              }
              to="/committee"
            >
              Committee
            </NavLink>
            {/* <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style}   hover:text-white`
                  : `${Styles.normalnav__Style}   hover:text-white`
              }
              to="/notice"
            >
              Notice
            </NavLink> */}
            <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style}   hover:text-white`
                  : `${Styles.normalnav__Style}   hover:text-white`
              }
              to="/news"
            >
              News
            </NavLink>

            <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style}   hover:text-white`
                  : `${Styles.normalnav__Style}   hover:text-white`
              }
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style}   hover:text-white`
                  : `${Styles.normalnav__Style}   hover:text-white`
              }
              to="/events"
            >
              Events
            </NavLink>
            <NavLink
              className={(active) =>
                active?.isActive
                  ? `${Styles.activenav__Style}   hover:text-white`
                  : `${Styles.normalnav__Style}   hover:text-white`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>


          {user?.email
            ?
            <>
              <div className="dropdown">
                <Link
                  className=" bg-success  text-white rounded-md px-4 py-2  ms-md-1 ms-lg-0 ms-0   dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user?.name}
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="btn btn-secondary btn-sm w-full" to="/memberProfile">My Profile</Link></li>
                  <li><Link className="btn btn-secondary  btn-sm w-full my-1" to="/memberDirectory">Directory</Link></li>
                  <li><Link className="btn btn-secondary  btn-sm w-full my-1" to="/publishedBlogs">All Blog </Link></li>
                  {/* <li><Link className="btn btn-secondary  btn-sm w-full my-1" to="/memberAllBlog">My Blogs </Link></li> */}
                  <li><Link className="btn btn-secondary  btn-sm w-full my-1" to="/blog_entry">Blog Entry </Link></li>
                  <li><Link className="btn btn-secondary  btn-sm w-full my-1" to="/adminAllBlog">Admin's All Blog </Link></li>
                  <li>
                    <div
                      onClick={handleSignOut}
                      className="btn btn-warning  btn-sm w-full"
                    >
                      Sign Out
                    </div>
                  </li>
                </ul>
              </div>
            </>
            :
            <>
              <div
                onClick={() => {
                  navigate("/login");
                }}
                className="flex bg-second tracking-[1px] items-center text-white rounded-md px-3 py-2 cursor-pointer"
              >
                <UsersIcon size={24} className="mr-2" />
                <ButtonComponent title="Login" className="" />
              </div>
            </>}
        </div>

      </div>

      <div
        className={`md:hidden flex items-center justify-between ${navColor ? "bg-main" : "bg-transparent"
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

        {user?.email
          ?
          <>
            <div className="dropdown">
              <Link
                className=" bg-success  text-white rounded-md px-4 py-2    dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user?.name}
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="btn btn-secondary btn-sm w-full" to="/memberProfile">My Profile</Link></li>
                <li><Link className="btn btn-secondary  btn-sm w-full my-1" to="/memberDirectory">Directory</Link></li>
                <li><Link className="btn btn-secondary  btn-sm w-full my-1" to="/publishedBlogs">All Blog </Link></li>
                {/* <li><Link className="btn btn-secondary  btn-sm w-full my-1" to="/memberAllBlog">My Blogs </Link></li> */}
                <li><Link className="btn btn-secondary  btn-sm w-full my-1" to="/blog_entry">Blog Entry </Link></li>
                <li><Link className="btn btn-secondary  btn-sm w-full my-1" to="/adminAllBlog">Admin's All Blog </Link></li>
                <li>
                  <div
                    onClick={handleSignOut}
                    className="btn btn-warning  btn-sm w-full"
                  >
                    Sign Out
                  </div>
                </li>
              </ul>
            </div>
          </>
          :
          <>
            <div
              onClick={() => {
                navigate("/login");
              }}
              className="flex bg-second tracking-[1px] items-center text-white rounded-md px-3 py-2 cursor-pointer"
            >
              <UsersIcon size={24} className="mr-2" />
              <ButtonComponent title="Login" className="" />
            </div>
          </>}

      </div>
    </div>
  );
};

export default Navbar;
