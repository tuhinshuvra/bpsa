import React, { useEffect, useState } from "react";
import ImageComponent from "../Common/ImageComponent";
import Styles from "./GalleryComponent.module.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

// const images = [
//   "//placekitten.com/1500/500",
//   "//placekitten.com/4000/3000",
//   "//placekitten.com/800/1200",
//   "//placekitten.com/1500/1500",
// ];

const GalleryImageCard = ({ item, images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className={`relative ${Styles.container}`}
      >
        <ImageComponent
          onClick={() => setIsOpen(true)}
          image={item?.image}
          className={`w-full h-[200px] object-cover block mx-auto rounded-md mb-3 ${Styles.image}`}
        />

        <div className={Styles.middle}>
          <div
            className={`w-full h-full flex items-center justify-center flex-col ${Styles.text}`}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: item?.title,
              }}
              className="text-lg"
            ></div>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: item?.description,
              }}
              className="text-sm"
            ></div> */}
          </div>
        </div>
      </div>

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

export default GalleryImageCard;
