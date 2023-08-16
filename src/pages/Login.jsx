import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context/context";

export const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (e) => {
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    e.preventDefault();
  };

  return (
    <div className="container">
      <h2 className="title">Sign in</h2>
      <form className="login_block" onSubmit={(e) => login(e)}>
        <MyInput type="text" />
        <MyInput type="password" />
        <MyButton>Click</MyButton>
      </form>
    </div>
  );
};
