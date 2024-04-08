import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversations";
import { getRandomEmoji } from "../utils/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div
      className={`py-2 flex flex-col overflow-auto${
        loading ? " items-center" : ""
      }`}
    >
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        conversations.map((conversation, index) => (
          <Conversation
            conversation={conversation}
            key={conversation._id}
            emoji={getRandomEmoji()}
            lastIndex={index === conversations.length - 1}
          />
        ))
      )}
      {/* <Conversation />
      <Conversation />
      <Conversation /> */}
    </div>
  );
};

export default Conversations;
