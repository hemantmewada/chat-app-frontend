import React, { useState } from "react";
import Input from "../components/Input";
import GenderCheckbox from "../components/GenderCheckbox";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../schemas/schemas";
import useSignup from "./../hooks/useSignup";

const initialValues = {
  fullName: "",
  username: "",
  password: "",
  cpassword: "",
  gender: "",
};
const SignUp = () => {
  const { loading, signup } = useSignup();
  // use formik
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      signup(values);
    },
  });

  // set gender
  const handleChangeCheckbox = (gender) => {
    setValues({
      ...values,
      gender,
    });
    // values.gender = gender;
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up<span className="text-blue-500"> Chat App</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            id="fullName"
            labelTitle="Full Name"
            placeholder="Enter full name"
            className="w-full input input-bordered h-15"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            handleBlur={handleBlur}
            touched={touched.fullName}
            error={errors.fullName}
          />
          <Input
            id="username"
            labelTitle="Username"
            placeholder="Enter username"
            className="w-full input input-bordered h-15"
            name="username"
            value={values.username}
            onChange={handleChange}
            error={errors.username}
            handleBlur={handleBlur}
            touched={touched.username}
          />
          <Input
            id="password"
            labelTitle="Password"
            placeholder="Enter password"
            type="password"
            className="w-full input input-bordered h-15"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            handleBlur={handleBlur}
            touched={touched.password}
          />
          <Input
            id="cpassword"
            labelTitle="Confirm Password"
            placeholder="Enter Confirm Password"
            type="password"
            className="w-full input input-bordered h-15"
            name="cpassword"
            value={values.cpassword}
            onChange={handleChange}
            error={errors.cpassword}
            handleBlur={handleBlur}
            touched={touched.cpassword}
          />
          <GenderCheckbox
            handleChangeCheckbox={handleChangeCheckbox}
            selectedGender={values.gender}
            error={errors.gender}
            touched={touched.gender}
          />

          <Link
            to="/login"
            className="tet-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account
          </Link>

          <div>
            <button type="submit" className="btn btn-block mt-2">
              Sign Up
              {loading && <span className="loading loading-spinner"></span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
