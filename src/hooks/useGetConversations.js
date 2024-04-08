import React, { useEffect, useState } from "react";
import config from "../config/config.js";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../context/auth.jsx";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { token } = useAuth();
  useEffect(() => {
    const users = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${config.VITE_API_URI}/users`, {
          headers: { Authorization: token },
        });
        if (data.status) {
          setConversations(data.data);
        } else {
          // throw new Error(data.message);
          toast.error(data.message);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        console.log(`Error in useGetConversations hook api: ${error}`);
        toast.error(error?.response.data.message);
      }
    };
    users();
  }, []);
  return { loading, conversations };
};

export default useGetConversations;
