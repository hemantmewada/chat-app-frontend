import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://avatar.iran.liara.run/public/boy?username=hemantmewada"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 font-thin`}>
        Hey, what are you doing?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center font-thin">
        21:42
      </div>
    </div>
  );
};

export default Message;
