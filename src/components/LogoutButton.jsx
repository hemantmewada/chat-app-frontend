import React from "react";
import { TbLogout2 } from "react-icons/tb";
import useLogout from "../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {loading ? (
        <div className="flex">
          <TbLogout2
            onClick={() => logout()}
            className="w-6 h-6 cursor-pointer text-white"
          />
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <TbLogout2
          onClick={() => logout()}
          className="w-6 h-6 cursor-pointer text-white"
        />
      )}
    </div>
  );
};

export default LogoutButton;
