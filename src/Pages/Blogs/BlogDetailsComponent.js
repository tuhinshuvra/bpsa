import { useState } from "react";
import FullScreenImage from "./FullScreenImage/FullScreenImage";
import "./BlogDetails.css";

const BlogDetailsComponent = ({ data }) => {
  const [showFullScreenImage, setShowFullScreenImage] = useState(false);

  const handleImageClick = () => {
    setShowFullScreenImage(true);
  };

  // console.log(" BlogDetailsPage", data);
  return (
    <div>
      <div>
        <div className="">
          {(data?.image && data?.image !== 'link') && <>

            <img
              className="blogDetailsImg object-contain  "
              src={data?.image}
              alt="post_image"
              onClick={handleImageClick}
            />
          </>}
        </div>
        <p dangerouslySetInnerHTML={{ __html: data?.description }} className="text-justify mx-2 mx-md-2" />
      </div>

      {showFullScreenImage &&
        <FullScreenImage
          image={data?.image}
        />}
    </div>
  );
};

export default BlogDetailsComponent;
