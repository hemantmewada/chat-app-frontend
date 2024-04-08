import React, { useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";
import config from "../config/config";
import toast from "react-hot-toast";
import useAuth from "../context/auth";

const useSendMessage = () => {
  const { messages, setMessages, selectedConversation } = useConversation();
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const sendMessage = async (message) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${config.VITE_API_URI}/messages/send/${selectedConversation._id}`,
        { message },
        { headers: { Authorization: token } }
      );
      if (data.status) {
        setMessages([...messages, data.newMessage]);
        toast.success(data.message);
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
  return { loading, sendMessage };
};

export default useSendMessage;
