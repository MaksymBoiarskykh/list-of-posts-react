import classes from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={classes.LoaderBlock}>
      <div className={classes.Loader}></div>
    </div>
  );
};
