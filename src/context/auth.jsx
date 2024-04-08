import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  // useEffect(() => {
  //   const localData = JSON.parse(localStorage.getItem("chat-user"));
  //   if(localData){
  //     setAuthUser(JSON.parse(localData))
  //   }
  // }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
