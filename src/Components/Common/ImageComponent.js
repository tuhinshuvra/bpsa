import React from "react";

const ImageComponent = ({ image, alt, className }) => {
  return (
    <div>
      <img src={image} alt={alt} className={className} />
    </div>
  );
};

export default ImageComponent;
