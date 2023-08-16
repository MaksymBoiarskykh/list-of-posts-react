import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostService } from "../API/PostService";
import { Loader } from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { Comment } from "../components/UI/comment/Comment";

export const PostIdPage = () => {
  const [postInfo, setPostInfo] = useState({});
  const [postComments, setPostComments] = useState([]);
  const param = useParams();

  // get post information
  const [getInfoPost, isLoadingPost, errorInfo] = useFetching(async () => {
    const info = await PostService.getPostInfo(param.id);
    setPostInfo(info.data);
  });

  const [getCommentsPost, isLoadingCom, errorComment] = useFetching(
    async () => {
      const comments = await PostService.getPostInfo(param.id);
      setPostComments(comments.data);
    }
  );

  useEffect(() => {
    getInfoPost();
    getCommentsPost();
  }, []);

  return (
    <div className="container">
      <h1 className="title"> It's {param.id} post</h1>

      {isLoadingPost && isLoadingCom ? (
        <Loader />
      ) : (
        <>
          <div>
            {postInfo.id} {postInfo.title}
          </div>
          <ul>
            {postComments.map((com, index) => (
              <Comment data={com} num={index} key={com.id} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
