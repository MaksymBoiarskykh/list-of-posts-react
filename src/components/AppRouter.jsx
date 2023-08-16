import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Posts } from "../pages/Posts";
import { Login } from "../pages/Login";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "../context/context";
import { Loader } from "../components/UI/Loader/Loader";

export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={route.element}
            />
          ))}
          <Route path="*" element={<Posts />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={route.element}
            />
          ))}
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </>
  );
};
