import React from "react";

const Button = ({ value, onClick, className }) => {
  return (
    <>
      <button onClick={onClick} className={` drop-shadow-2xl  ${className}`}>
        {value}
      </button>
    </>
  );
};

export default Button;
