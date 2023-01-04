import React, { useState } from "react";
import Lightbox from "react-image-lightbox";

const ImagePreview = ({
  images,
  isOpen,
  setIsOpen,
  setPhotoIndex,
  photoIndex,
}) => {
  console.log(
    "🚀 ~ file: ImagePreview.js:5 ~ ImagePreview ~ isOpen",
    typeof isOpen
  );
  console.log("🚀 ~ file: ImagePreview.js:5 ~ ImagePreview ~ images", images);
  // const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default ImagePreview;
