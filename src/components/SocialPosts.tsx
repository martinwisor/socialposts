import Post from "../models/Post";
import PostInList from "./PostInList";
import PostForm from "./PostForm";
import { useState } from "react";

const SocialPost = () => {
  const [posts, setPosts] = useState([]);
  const [IsFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (newPost: any) => {
    setPosts([newPost, ...posts]);
    setIsFormVisible(false);
  };

  const handleDelete = (index: any) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <>
      <button onClick={() => setIsFormVisible(true)}>New Thoughts</button>
      <div>
        {IsFormVisible && (
          <PostForm
            onSubmit={handleSubmit}
            onClose={() => setIsFormVisible(false)}
          />
        )}
      </div>

      {posts.map((post, index) => (
        <PostInList
          key={index}
          post={post}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </>
  );
};
export default SocialPost;
