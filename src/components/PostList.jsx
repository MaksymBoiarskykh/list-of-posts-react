import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 className="title">Posts not found</h1>;
  }

  return (
    <div>
      <h1 className="title">{title}</h1>
      <TransitionGroup>
        {posts.map((el) => (
          <CSSTransition key={el.id} timeout={500} classNames="post">
            <PostItem post={el} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
