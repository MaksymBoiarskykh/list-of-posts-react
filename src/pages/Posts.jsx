import React, { useEffect, useState } from "react";
import { PostService } from "../API/PostService";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import { Loader } from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { Pagination } from "../components/UI/pagination/Pagination";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", quarry: "" });
  const [modal, setModal] = useState(false);

  // pagination
  const [totalPost, setTotalPost] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);

  // fetch
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const posts = await PostService.getAllPosts(page, limit);
    setTotalPost(posts.headers["x-total-count"]);
    setPosts(posts.data);
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  // sort and filter
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.quarry);

  // create
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // delete
  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  // render
  return (
    <div className="container">
      <MyButton onClick={() => setModal(true)}>Создать пользователя</MyButton>

      <MyModal vissible={modal} setVissible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />

      {postsError && <h1 className="title">{postsError}</h1>}
      {isPostsLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          remove={removePost}
          title="first list"
        />
      )}

      <Pagination
        total={totalPost}
        limit={limit}
        activePage={page}
        changePage={setPage}
      />
    </div>
  );
};
