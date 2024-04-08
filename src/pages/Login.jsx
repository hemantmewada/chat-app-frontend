import React, { useState } from "react";
import Input from "../components/Input";
import GenderCheckbox from "../components/GenderCheckbox";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schemas/schemas";
import useLogin from "../hooks/useLogin";
import useConversation from "../zustand/useConversation";

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const { loading, login } = useLogin();
  // use formik
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        login(values);
      },
    });
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login<span className="text-blue-500"> Chat App</span>
        </h1>
        <form onSubmit={handleSubmit}>
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

          <Link
            to="/sign-up"
            className="tet-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have a account
          </Link>

          <div>
            <button type="submit" className="btn btn-block mt-2">
              Login
              {loading && <span className="loading loading-spinner"></span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
