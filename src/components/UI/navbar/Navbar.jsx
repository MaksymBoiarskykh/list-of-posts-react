import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import MyButton from "../button/MyButton";
import style from "./Navbar.module.css";

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const exit = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
  };

  return (
    <div className={style.navbar}>
      <div className={style.Container}>
        <ul className={style.navbar__list}>
          <li>
            <Link className={style.navbar__item} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={style.navbar__item} to="/posts">
              Posts
            </Link>
          </li>
        </ul>
        <MyButton onClick={exit}>Log out</MyButton>
      </div>
    </div>
  );
};
