import { useState } from "react";
import { Link } from "react-router-dom";
import FullScreenImage from "./FullScreenImage/FullScreenImage";

const BlogDetailsComponent = ({ data }) => {
  const [showFullScreenImage, setShowFullScreenImage] = useState(false);

  const handleImageClick = () => {
    setShowFullScreenImage(true);
  };

  // console.log(" BlogDetailsPage", data);
  return (
    <div className="">
      <div className=" ">
        {(data?.image && data?.image !== 'link') && <>

          <img
            className="w-full md:h-[400px] object-contain rounded-md my-2"
            src={data?.image}
            alt="post_image"
            onClick={handleImageClick}
          />
        </>}
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
