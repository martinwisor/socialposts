import React from "react";

const PostInList = ({ post, onDelete }: any) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <h2>{post.thought}</h2>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default PostInList;
