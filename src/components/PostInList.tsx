import React from "react";
import Post from "../models/Post";

const PostInList = ({
  post,
  onDelete,
}: {
  post: Post;
  onDelete: () => void;
}) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <h2>{post.thought}</h2>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default PostInList;
