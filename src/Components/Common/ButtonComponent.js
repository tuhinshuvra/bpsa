import React from "react";

const ButtonComponent = ({ title, className, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {title}
      </button>
    </div>
  );
};

export default ButtonComponent;
