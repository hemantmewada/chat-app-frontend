import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useAuth from "./context/auth";

function App() {
  const { authUser } = useAuth();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="sign-up"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      {/* <Home /> */}
      <Toaster />
    </div>
  );
}

export default App;
