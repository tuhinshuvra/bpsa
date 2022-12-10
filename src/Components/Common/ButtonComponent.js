import React from "react";

const ButtonComponent = ({ title, className }) => {
  return (
    <div>
      <button className={className}>{title}</button>
    </div>
  );
};

export default ButtonComponent;
