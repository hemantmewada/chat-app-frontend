import React from "react";
import Input from "./Input";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <Input
          isLabel={false}
          placeholder="Send a message"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
