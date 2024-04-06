import React from "react";

const Input = ({
  id,
  type = "text",
  placeholder,
  labelTitle,
  isLabel = true,
  ...props
}) => {
  return (
    <div>
      {isLabel && (
        <label htmlFor={id} className="label">
          <span className="text-base label-text">{labelTitle}</span>
        </label>
      )}
      <input id={id} type={type} placeholder={placeholder} {...props} />
    </div>
  );
};

export default Input;
