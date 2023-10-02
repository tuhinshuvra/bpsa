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
        <div className=" float-left me-md-3">
          {(data?.image && data?.image !== 'link') && <>

            <img
              className="detailsImg object-contain "
              src={data?.image}
              alt="post_image"
              onClick={handleImageClick}
            />
          </>}
        </div>
        <p dangerouslySetInnerHTML={{ __html: data?.description }} className="text-justify" />
      </div>

      {showFullScreenImage &&
        <FullScreenImage
          image={data?.image}
        />}

    </div>
  );
};

export default BlogDetailsComponent;
