import React from "react";

const Input = ({
  type,
  name,
  id,
  value,
  className,
  label,
  labelClassName,
  onChange,
  onClick,
}) => {
  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        onClick={onClick}
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        id={id}
        label={label}
        className={className}
      />
    </>
  );
};

export default Input;
