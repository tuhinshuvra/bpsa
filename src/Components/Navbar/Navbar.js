import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { UsersIcon } from "../../assets/Icons/Icons";
import logo from "../../assets/Image/logo/bpsa_nav_logo.png";
import DefaultMemberImg from '../../assets/Image/member/default_member_image.png'
import ButtonComponent from "../Common/ButtonComponent";
import ImageComponent from "../Common/ImageComponent";
import MobileMenu from "./MobileMenu";
import Styles from "./Navbar.module.css";
import { useContext } from "react";
import { AllContext } from "../../hooks/ContextData";
import { getLocalStorage, removeLocalStorage, signout } from "../../utlis/helper";
import { toast } from "react-hot-toast";
import { GoFileDirectoryFill } from 'react-icons/go';
import { FaSignOutAlt, FaBloggerB, FaExchangeAlt } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { RiAdminFill } from 'react-icons/ri';
import Loader from "../Common/Loader";
import './Navbar.css';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
  const location = useLocation();
  const { user, setUser, loading, setLoading } = useContext(AllContext);
  // console.log("Navbar Login User Data: ", user)
  const navigate = useNavigate();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
  const [navColor, setNavColor] = useState("");
  const [userNewData, setUserNewData] = useState();

  const loginUserPhoto = getLocalStorage("loginUserPhoto");
  // console.log("Navbar loginUserPhoto :", loginUserPhoto);

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




  // user new data
  useEffect(() => {
    fetch(`https://dev.bpsa.com.bd/api/profile/${user?.BPID}`)
      .then(res => res.json())
      .then(data => {
        // console.log("Member new  Data: ", data?.member)
        setUserNewData(data?.member)
        setLoading(false)
      })
  }, [setLoading, user?.BPID]);




  const handleSignOut = () => {
    signout(() => {
      setUser("");
      toast.success('User Logout Successfully')
      navigate("/login")
      removeLocalStorage("loginUserPhoto");
    })
  }

  if (loading) {
    return <Loader></Loader>
  }



  return (
    <div style={{ zIndex: 999 }} className="sticky top-0">
      <div className="hidden md:block">
        <div
          className={`flex items-center justify-between ${location?.pathname === "/"
            // ? `${navColor ? "bg-main" : "bg-transparent"}`
            // ? `${navColor ? "bg-main" : "bg-main"}`
            ? `${navColor ? "bg-[#508bf2]" : "bg-[#508bf2]"}`
            : "bg-[#508bf2]"
            } navPadding  py-2`}
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


          {user?.UserID
            ?
            <>
              <div className="dropdown">
                <Link
                  className="ms-md-1 ms-lg-0 ms-0dropdown-toggle shadow-lg"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userNewData?.image ?
                    <>
                      <img className="userImgNav" src={userNewData?.image} alt="" />
                      <MdOutlineKeyboardArrowDown className=" userArrow" />
                    </>
                    :
                    <>
                      <img className="userImgNav" src={`data:image/jpeg;base64,${loginUserPhoto}`} alt="login_user_photo" />
                      <MdOutlineKeyboardArrowDown className=" userArrow" />
                    </>
                  }
                </Link>
                <ul className="dropdown-menu navDropdownMenu">
                  <li><Link className=" navDropdownbtn    py-1    w-full d-flex align-items-center " to="/memberProfile"><CgProfile className="navDropdownIcon   me-2" /> My Profile </Link></li>
                  <li><Link className=" navDropdownbtn  w-full  d-flex align-items-center " to="/resetPassword"><FaExchangeAlt className="navDropdownIcon   me-2" />Change Password</Link></li>
                  <li><Link className=" navDropdownbtn   w-full my-1 d-flex   align-items-center" to="/memberDirectory "><GoFileDirectoryFill className="navDropdownIcon my-auto me-2" /> Directory</Link></li>
                  <li><Link className="navDropdownbtn   w-full my-1 d-flex   align-items-center" to="/publishedBlogs"><FaBloggerB className="navDropdownIcon my-auto me-2" />Posts  </Link></li>
                  <li><Link className=" navDropdownbtn w-full my-1 d-flex   align-items-center" to="/blog_entry"><FaBloggerB className="navDropdownIcon my-auto me-2" />Post Entry  </Link></li>
                  {user?.MemberRole == "admin" &&
                    <li><Link className="navDropdownbtn w-full my-1 d-flex   align-items-center" to="/adminAllBlog"><RiAdminFill className="navDropdownIcon my-auto me-2" />Admin's All Post  </Link></li>
                  }

                  {user?.MemberRole == "super_admin" &&
                    <li><Link className="navDropdownbtn w-full my-1 d-flex  align-items-center" to="/blogAdminAssign"><RiAdminFill className="navDropdownIcon my-auto me-2" />Post Admin Assign  </Link></li>
                  }
                  <li>
                    <div
                      onClick={handleSignOut}
                      className="  w-full navDropdownbtn  d-flex    align-items-center"
                    >
                      <FaSignOutAlt className="navDropdownIcon my-auto me-2" />Sign Out
                    </div>
                  </li>
                </ul>
              </div>
            </>
            :
            <>
              <div
                onClick={() => { navigate("/login"); }}
                className={`d-flex bg-[#0742a9] tracking-[1px] rounded-md items-center text-white px-3 py-2 cursor-pointer `}
              >
                <UsersIcon size={24} className="mr-2" />
                <ButtonComponent title="Login" className="" />
              </div>
            </>}
        </div>

      </div>

      <div className={`md:hidden flex items-center justify-between ${navColor ? "bg-main" : "bg-transparent"}  px-1 py-2`}>
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

        {user?.UserID
          ?
          <>
            <div className="dropdown">
              <Link
                className=" dropdown-toggle "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userNewData?.image ?
                  <>
                    <img className="userImgNav" src={userNewData?.image} alt="" />
                    {/* <MdOutlineKeyboardArrowDown className=" userArrow" /> */}
                  </>
                  :
                  <>
                    <img className="userImgNav" src={`data:image/jpeg;base64,${loginUserPhoto}`} alt="login_user_photo" />
                    {/* <MdOutlineKeyboardArrowDown className=" userArrow" /> */}
                  </>
                }
              </Link>

              <ul className="dropdown-menu navDropdownMenu">
                <li><Link className=" navDropdownbtn  w-full  d-flex align-items-center " to="/memberProfile"><CgProfile className="navDropdownIcon   me-2" /> My Profile </Link></li>
                <li><Link className=" navDropdownbtn  w-full  d-flex align-items-center " to="/resetPassword"><FaExchangeAlt className="navDropdownIcon   me-2" />Change Password</Link></li>
                <li><Link className=" navDropdownbtn   w-full my-1 d-flex   align-items-center" to="/memberDirectory "><GoFileDirectoryFill className="navDropdownIcon my-auto me-2" /> Directory</Link></li>
                <li><Link className="navDropdownbtn   w-full my-1 d-flex   align-items-center" to="/publishedBlogs"><FaBloggerB className="navDropdownIcon my-auto me-2" />Posts  </Link></li>
                {/* <li><Link className="btn btn-secondary  btn-sm w-full my-1" to="/memberAllBlog">My Blogs </Link></li> */}
                <li><Link className=" navDropdownbtn w-full my-1 d-flex   align-items-center" to="/blog_entry"><FaBloggerB className="navDropdownIcon my-auto me-2" />Post Entry  </Link></li>
                {user?.MemberRole == "admin" &&
                  <li><Link className="navDropdownbtn w-full my-1 d-flex   align-items-center" to="/adminAllBlog"><RiAdminFill className="navDropdownIcon my-auto me-2" />Admin's All Post  </Link></li>
                }

                {user?.MemberRole == "super_admin" &&
                  <li><Link className="navDropdownbtn w-full my-1 d-flex  align-items-center" to="/blogAdminAssign"><RiAdminFill className="navDropdownIcon my-auto me-2" />Post Admin Assign  </Link></li>
                }
                <li>
                  <div
                    onClick={handleSignOut}
                    className="  w-full navDropdownbtn  d-flex    align-items-center"
                  >
                    <FaSignOutAlt className="navDropdownIcon my-auto me-2" />Sign Out
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
              // className="flex bg-main   items-center text-white rounded-full px-1  py-1 cursor-pointer border-2 mb-3 loginBtn"
              className="loginBtn"
            >
              {/* <UsersIcon size={24} className="mr-1" /> */}
              <ButtonComponent title="Login" className=" loginText " />
            </div>
          </>}

      </div>
    </div>
  );
};

export default Navbar;
