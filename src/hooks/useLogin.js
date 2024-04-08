import React, { useState } from "react";
import config from "../config/config.js";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../context/auth.jsx";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser, setToken } = useAuth();
  const login = async (vals) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${config.VITE_API_URI}/auth/login`,
        vals
      );
      if (data.status) {
        setAuthUser(data.data);
        setToken(data.token);
        localStorage.setItem("chat-user", JSON.stringify(data.data));
        localStorage.setItem("token", JSON.stringify(data.token));
        toast.success(data.message);
      } else {
        // throw new Error(data.message);
        toast.error(data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      console.log(`Error in useLogin hook api: ${error}`);
      toast.error(error?.response.data.message);
    }
  };
  return { loading, login };
};

export default useLogin;
