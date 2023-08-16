import style from "./Comment.module.css";

export const Comment = ({ data, num }) => (
  <li className={style.CommentBlock}>
    <h3 className={style.CommentUser}>
      {(num += 1)}. {data.name}
    </h3>
    <div>
      <strong>Email:</strong> {data.name}
    </div>
    <div>
      <strong>Massage:</strong> {data.body}
    </div>
  </li>
);
