import React from "react";
import Input from "../components/Input";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
          />
          <Input
            id="password"
            labelTitle="Password"
            placeholder="Enter password"
            type="password"
            className="w-full input input-bordered h-15"
          />

          <a
            href="#"
            className="tet-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have a account
          </a>

          <div>
            <button type="submit" className="btn btn-block mt-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
