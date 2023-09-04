import { useState } from "react";
import ImageComponent from "../../Components/Common/ImageComponent";
import { Link } from "react-router-dom";
import FullScreenImage from "./FullScreenImage/FullScreenImage";

const BlogDetailsComponent = ({ data }) => {
  const [showFullScreenImage, setShowFullScreenImage] = useState(false);

  const handleImageClick = () => {
    setShowFullScreenImage(true);
  };

  // console.log(" BlogDetailsPage", data);
  return (
    <div className="col-10 mx-auto">
      <div className=" col-lg-8 ">
        {(data?.image && data?.image !== 'link') && <>

          <img
            className="w-full md:h-[400px] object-contain rounded-md my-2"
            src={data?.image}
            alt="blog_image"
            onClick={handleImageClick}
          />
        </>}
        <p dangerouslySetInnerHTML={{ __html: data?.description }} className="text-justify" />
      </div>

      <div className=' d-flex justify-content-end'>
        <Link to={"/publishedBlogs"} className='btn btn-primary btn-sm'>Back</Link>
      </div>

      {showFullScreenImage &&
        <FullScreenImage
          image={data?.image}
        />}

    </div>
  );
};

export default BlogDetailsComponent;
