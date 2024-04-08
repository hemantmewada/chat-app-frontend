import React from "react";
import useAuth from "../context/auth";
import useConversation from "../zustand/useConversation";
import { dateFormat } from "../config/dateFormat";

const Message = (message) => {
  const { authUser } = useAuth();
  const { selectedConversation } = useConversation();
  const fromMe = message?.senderId === authUser._id;
  // console.log(fromMe);
  const chatClass = fromMe ? "chat-end" : "chat-start";
  const profile = fromMe ? authUser.profile : selectedConversation?.profile;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profile} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white font-thin pb-2 ${bubbleBgColor} ${shakeClass}`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center font-thin">
        {dateFormat(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;
