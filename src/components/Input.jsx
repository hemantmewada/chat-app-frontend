import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({
  id,
  type = "text",
  placeholder,
  labelTitle,
  isLabel = true,
  value,
  onChange,
  name,
  handleBlur,
  touched,
  error,
  ...props
}) => {
  // const [visible, setVisible] = useState({
  //   status: false,
  //   name: "",
  // });

  return (
    <div>
      {isLabel && (
        <label htmlFor={id} className="label">
          <span className="text-base label-text">{labelTitle}</span>
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          {...props}
        />
        {/* {type == "password" &&
          (visible.status ? (
            <AiOutlineEye
              onClick={() => setVisible({ status: true, name })}
              className="absolute w-7 h-7 text-[#093c59] right-[3%] top-[19%]"
            />
          ) : (
            <AiOutlineEyeInvisible
              onClick={() => setVisible({ status: false, name })}
              className="absolute w-7 h-7 text-[#093c59] right-[3%] top-[19%]"
            />
          ))} */}
      </div>
      {touched && error && <p className="text-red-600 alert-error">{error}</p>}
    </div>
  );
};

export default Input;
