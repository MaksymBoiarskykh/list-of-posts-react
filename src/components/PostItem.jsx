import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="post">
        <div className="post__info_block">
          <strong>
            {props.post.id}. {props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btn_block">
          <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
            comments
          </MyButton>
          <MyButton onClick={() => props.remove(props.post)}>remove</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
