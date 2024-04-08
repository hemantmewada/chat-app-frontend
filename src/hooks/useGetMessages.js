import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";
import config from "../config/config";
import toast from "react-hot-toast";
import useAuth from "../context/auth";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const { token } = useAuth();
  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${config.VITE_API_URI}/messages/${selectedConversation._id}`,
          { headers: { Authorization: token } }
        );
        if (data.status) {
          setMessages(data.data);
          //   toast.success(data.message);
        } else {
          // throw new Error(data.message);
          toast.error(data.message);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        console.log(`Error in sendMessage hook api: ${error}`);
        toast.error(error?.response.data.message);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  return { loading, messages };
};

export default useGetMessages;
