import { createContext, useContext, useEffect, useState } from "react";
import useAuth from "./auth";
import io from "socket.io-client";
import config from "../config/config";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuth();
  useEffect(() => {
    if (authUser) {
      const socket = io(config.VITE_BASE_URI, {
        query: {
          userId: authUser._id,
        },
      });
      // console.log("socket", socket);
      setSocket(socket);

      // socket.on() is used to listen to the events. can be used both on client and server side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      // clean up function
      return () => setSocket(null);
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocket = () => {
  return useContext(SocketContext);
};

export default useSocket;
