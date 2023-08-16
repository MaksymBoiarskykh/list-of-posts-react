import React from "react";
import classes from "./Btn.module.css";

const MyButton = ({ children, ...prop }) => {
  return (
    <button {...prop} className={classes.Btn}>
      {children}
    </button>
  );
};

export default MyButton;
