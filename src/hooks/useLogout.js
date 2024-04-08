import React, { useState } from "react";
import config from "../config/config.js";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../context/auth.jsx";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();
  const logout = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${config.VITE_API_URI}/auth/logout`);
      if (data.status) {
        setAuthUser(null);
        localStorage.removeItem("chat-user");
        toast.success(data.message);
      } else {
        // throw new Error(data.message);
        toast.error(data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      console.log(`Error in useLogout hook api: ${error}`);
      toast.error(error?.response.data.message);
    }
  };
  return { loading, logout };
};

export default useLogout;
