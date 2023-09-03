import React from "react";
import { TimeIcon } from "../../assets/Icons/Icons";
import { dateFormatOne } from "../../utlis/dateFormat";
import ImageComponent from "../../Components/Common/ImageComponent";
import ButtonComponent from "../../Components/Common/ButtonComponent";
import { Link } from "react-router-dom";

const BlogDetailsComponent = ({ data }) => {
  console.log(" BlogDetailsPage", data);
  return (
    <div className="col-10 mx-auto">
      <div className=" col-lg-8 mx-au">
        <ImageComponent
          image={data?.image}
          className="w-full md:h-[400px] object-contain rounded-md mt-4"
        />
        <div
          dangerouslySetInnerHTML={{ __html: data?.description }}
          className="text-justify my-5"
        ></div>
        {data?.Document_Link && (
          <a href={data?.Document_Link} target="_blank" rel="noreferrer">
            <ButtonComponent
              className={"bg-second text-white px-4 py-2"}
              title="View Document"
            />
          </a>
        )}


      </div>
      <div className=' d-flex justify-content-end'>
        <Link to={"/publishedBlogs"} className='btn btn-primary btn-sm ' >Back</Link>
      </div>
    </div>
  );
};

export default BlogDetailsComponent;
