import React from "react";

const GenderCheckbox = ({
  handleChangeCheckbox,
  selectedGender,
  touched,
  error,
}) => {
  return (
    <>
      <div className="flex">
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer`}>
            <input
              type="checkbox"
              name="gender"
              className="checkbox border-slate-900"
              onChange={() => handleChangeCheckbox("male")}
              checked={selectedGender == "male"}
            />
            <span className="label-text">Male</span>
          </label>
        </div>
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer`}>
            <input
              type="checkbox"
              className="checkbox border-slate-900"
              name="gender"
              onChange={() => handleChangeCheckbox("female")}
              checked={selectedGender == "female"}
            />
            <span className="label-text">Female</span>
          </label>
        </div>
      </div>
      {touched && error && <p className="text-red-600 alert-error">{error}</p>}
    </>
  );
};
export default GenderCheckbox;
