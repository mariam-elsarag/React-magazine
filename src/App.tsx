import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// auth context
const Auth_Layout = lazy(() => import("./pages/Auth/Auth_Container"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Forget_Password = lazy(() => import("./pages/Auth/Forget_password"));

const App_Layout = lazy(() => import("./layout/App_Layout"));
const Home = lazy(() => import("./pages/home/Home"));

const App = () => {
  const { token } = useAuth();
  return (
    <Routes>
      {!token && (
        <Route path="account" element={<Auth_Layout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget-password" element={<Forget_Password />} />
          <Route path="*" element={<Login />} />
        </Route>
      )}
      <Route path="/" element={<App_Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
