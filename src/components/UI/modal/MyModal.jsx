import classes from "./MyModal.module.css";

const MyModal = ({ children, vissible, setVissible }) => {
  const modal = [classes.MyModal];
  if (vissible) modal.push(classes.active);
  return (
    <div className={modal.join(" ")} onClick={() => setVissible(false)}>
      <div
        className={classes.MyModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
