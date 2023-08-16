import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({ options, defualtValue, sortPost }) => {
  return (
    <select onChange={sortPost} className={classes.MySelect}>
      <option value="">{defualtValue}</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
