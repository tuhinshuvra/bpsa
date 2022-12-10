import React from "react";
import {
  EmailIcon,
  FbIcon,
  LinkedInIcon,
  ShareIcon,
  TwitterIcon,
} from "../../assets/Icons/Icons";

const SocialButtonComponent = () => {
  return (
    <div
      style={{ zIndex: 9999 }}
      className=" fixed bg-red-700 top-[35%] md:top-36 right-0"
    >
      <div className="bg-[#475993] p-2">
        <FbIcon className="text-white" size={24} />
      </div>
      <div className="bg-[#FC5555] p-2">
        <EmailIcon className="text-white" size={24} />
      </div>

      <div className="bg-[#67A4F1] p-2">
        <TwitterIcon className="text-white" size={24} />
      </div>
      <div className="bg-[#0077B7] p-2">
        <LinkedInIcon className="text-white" size={24} />
      </div>
      <div className="bg-[#E7581A] p-2">
        <ShareIcon className="text-white" size={24} />
      </div>
    </div>
  );
};

export default SocialButtonComponent;
